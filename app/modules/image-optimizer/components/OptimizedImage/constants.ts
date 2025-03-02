export const SCREEN_DENSITY_FACTORS = [1, 2] as const;

export const SCREEN_DENSITY_REDUCTION_MULTIPLIER = 0.8;

export const SUPPORTED_IMAGE_FORMATS = {
  avif: 'avif',
  webp: 'webp',
  jpeg: 'jpeg',
  png: 'png',
} as const;

export const TAILWIND_BREAKPOINTS = [640, 768, 1024, 1280, 1536] as const;

export type SupportedImageFormat =
  (typeof SUPPORTED_IMAGE_FORMATS)[keyof typeof SUPPORTED_IMAGE_FORMATS];
