import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { SUPPORTED_IMAGE_FORMATS } from './constants';
import { OptimizedImage, type OptimizedImageProps } from './OptimizedImage';

const imageSampleUrl = 'https://example.com/image.jpg';
const imageSampleAlt = 'Sample image';

describe('OptimizedImage', () => {
  const mockGetContext = vi.fn().mockImplementation(() => ({
    canvas: { getContext: () => true },
  }));
  const mockToDataURL = vi
    .fn()
    .mockImplementation(
      () =>
        'data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=',
    );

  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = mockGetContext;
    HTMLCanvasElement.prototype.toDataURL = mockToDataURL;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  function renderComponent(props?: OptimizedImageProps) {
    return render(<OptimizedImage alt="" src="#" {...props} />);
  }

  test('renders optimized image with default attributes', () => {
    renderComponent({ src: imageSampleUrl, alt: imageSampleAlt });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute(
      'src',
      `/api/optimize-image?url=${encodeURIComponent(imageSampleUrl)}&width=320&format=webp`,
    );
    expect(img).toHaveAttribute('alt', imageSampleAlt);
    expect(img).toHaveAttribute(
      'sizes',
      '(max-width: 640px) 512px, (max-width: 768px) 614px, (max-width: 1024px) 819px, (max-width: 1280px) 1024px, (max-width: 1536px) 1229px, 100vw',
    );
    expect(img).toHaveAttribute(
      'srcSet',
      // provide all possible widths for screen density 1 and 2
      [512, 1024, 614, 1229, 819, 1638, 1024, 2048, 1229, 2458]
        .map(
          (width) =>
            `/api/optimize-image?url=${encodeURIComponent(imageSampleUrl)}&width=${width}&format=webp ${width}w`,
        )
        .join(', '),
    );
  });

  test('renders optimized image with specified width', () => {
    const width = 640;
    renderComponent({ src: imageSampleUrl, alt: imageSampleAlt, width });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute(
      'src',
      `/api/optimize-image?url=${encodeURIComponent(imageSampleUrl)}&width=${width}&format=webp`,
    );
    expect(img).toHaveAttribute('alt', imageSampleAlt);
    expect(img).toHaveAttribute('sizes', `${width}px`);

    expect(img).toHaveAttribute(
      'srcSet',
      [640, 1280] // provide width for screen density 1 and 2
        .map(
          (srcSetWidth) =>
            `/api/optimize-image?url=${encodeURIComponent(imageSampleUrl)}&width=${srcSetWidth}&format=webp ${srcSetWidth}w`,
        )
        .join(', '),
    );
  });

  test.each(Object.values(SUPPORTED_IMAGE_FORMATS))(
    'renders optimized image with %s as the only supported format',
    (supportedFormat) => {
      HTMLCanvasElement.prototype.toDataURL = vi
        .fn()
        .mockImplementation(
          () =>
            `data:image/${supportedFormat};base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=`,
        );
      renderComponent({ src: imageSampleUrl, alt: imageSampleAlt });

      const img = screen.getByRole('img');
      expect(img).toHaveAttribute(
        'src',
        `/api/optimize-image?url=${encodeURIComponent(imageSampleUrl)}&width=320&format=${supportedFormat}`,
      );
      expect(img).toHaveAttribute(
        'srcSet',
        // provide all possible widths for screen density 1 and 2
        [512, 1024, 614, 1229, 819, 1638, 1024, 2048, 1229, 2458]
          .map(
            (width) =>
              `/api/optimize-image?url=${encodeURIComponent(imageSampleUrl)}&width=${width}&format=${supportedFormat} ${width}w`,
          )
          .join(', '),
      );
    },
  );
});
