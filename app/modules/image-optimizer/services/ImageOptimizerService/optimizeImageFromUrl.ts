import sharp from 'sharp';
import { fetch } from 'undici';

import { ERROR_LOG_MESSAGE } from '../../constants';

export interface OptimizeImageFromUrlOptions {
  imageUrl: string;
  width?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
}

/**
 * Optimizes an image using sharp.
 *
 * @param options - The options for image optimization.
 * @returns The optimized image as a Buffer.
 */
export async function optimizeImageFromUrl({
  imageUrl,
  width = 800,
  format = 'webp',
}: OptimizeImageFromUrlOptions): Promise<Buffer> {
  if (!imageUrl) {
    throw new Error(ERROR_LOG_MESSAGE.MISSING_IMAGE_URL);
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(
      `${ERROR_LOG_MESSAGE.FAILED_TO_FETCH_IMAGE} - ${response.statusText}`,
    );
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const optimizedImage = await sharp(buffer)
    .resize({ width })
    .toFormat(format)
    .toBuffer();

  return optimizedImage;
}
