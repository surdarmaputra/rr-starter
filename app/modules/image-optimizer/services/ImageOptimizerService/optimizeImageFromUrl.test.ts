import { afterEach } from 'node:test';

import sharp, { type Sharp } from 'sharp';
import { fetch, Response } from 'undici';
import { describe, expect, test, vi } from 'vitest';

import { optimizeImageFromUrl } from './optimizeImageFromUrl';

vi.mock('sharp', () => ({
  default: vi.fn(),
}));

vi.mock('undici', () => ({
  fetch: vi.fn(),
}));

const mockImageBuffer = Buffer.from('mock image buffer');

const mockFetch = vi.mocked(fetch);
mockFetch.mockResolvedValue({
  arrayBuffer: () => Promise.resolve(mockImageBuffer),
  ok: true,
} as unknown as Response);

const mockSharp = vi.mocked(sharp);
const mockSharpReturnValue = {
  toBuffer: vi.fn(),
  toFormat: vi.fn(function (this: Sharp) {
    return this;
  }),
  resize: vi.fn(function (this: Sharp) {
    return this;
  }),
};
mockSharpReturnValue.toBuffer.mockResolvedValue(mockImageBuffer);
mockSharp.mockImplementation(() => mockSharpReturnValue as unknown as Sharp);

const imageSampleUrl = 'https://imagesample.com/image.png';

describe('optimizeImageFromUrl', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('returns a buffer with optimized into webp format and 800px width by default', async () => {
    const optimizedImage = await optimizeImageFromUrl({
      imageUrl: imageSampleUrl,
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(imageSampleUrl);
    expect(sharp).toHaveBeenCalledTimes(1);
    expect(sharp).toHaveBeenCalledWith(mockImageBuffer);
    expect(mockSharpReturnValue.resize).toHaveBeenCalledTimes(1);
    expect(mockSharpReturnValue.resize).toHaveBeenCalledWith({ width: 800 });
    expect(mockSharpReturnValue.toFormat).toHaveBeenCalledTimes(1);
    expect(mockSharpReturnValue.toFormat).toHaveBeenCalledWith('webp');

    expect(optimizedImage).toBeInstanceOf(Buffer);
    expect(optimizedImage).toEqual(mockImageBuffer);
  });

  test('uses the provided width and format if specified', async () => {
    const width = 300;
    const format = 'png';
    const optimizedImage = await optimizeImageFromUrl({
      imageUrl: imageSampleUrl,
      width,
      format,
    });

    expect(mockSharpReturnValue.resize).toHaveBeenCalledWith({ width });
    expect(mockSharpReturnValue.toFormat).toHaveBeenCalledWith(format);
    expect(optimizedImage).toBeInstanceOf(Buffer);
    expect(optimizedImage).toEqual(mockImageBuffer);
  });

  test('throws an error if the image fails to be fetched', async () => {
    mockFetch.mockResolvedValueOnce({
      arrayBuffer: () => null,
      ok: false,
      statusText: '404 Not Found',
    } as unknown as Response);

    await expect(
      optimizeImageFromUrl({
        imageUrl: imageSampleUrl,
      }),
    ).rejects.toThrow('FAILED_TO_FETCH_IMAGE - 404 Not Found');
  });

  test('throws an error from fetch function', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Unexpected error from fetch'));

    await expect(
      optimizeImageFromUrl({
        imageUrl: imageSampleUrl,
      }),
    ).rejects.toThrow('Unexpected error from fetch');
  });

  test('throws an error from sharp function', async () => {
    mockSharpReturnValue.toBuffer.mockRejectedValueOnce(
      new Error('Unexpected error from sharp'),
    );

    await expect(
      optimizeImageFromUrl({
        imageUrl: imageSampleUrl,
      }),
    ).rejects.toThrow('Unexpected error from sharp');
  });
});
