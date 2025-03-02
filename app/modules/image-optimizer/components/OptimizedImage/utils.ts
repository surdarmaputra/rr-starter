import {
  SCREEN_DENSITY_FACTORS,
  SCREEN_DENSITY_REDUCTION_MULTIPLIER,
  SUPPORTED_IMAGE_FORMATS,
  type SupportedImageFormat,
  TAILWIND_BREAKPOINTS,
} from './constants';

export function hasOriginUrl(url: string): boolean {
  try {
    return new URL(url).origin !== 'null';
  } catch {
    return false;
  }
}

export function detectBestFormat(): SupportedImageFormat {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    for (const format of Object.values(SUPPORTED_IMAGE_FORMATS)) {
      if (
        canvas.toDataURL(`image/${format}`).indexOf(`data:image/${format}`) ===
        0
      ) {
        return format;
      }
    }
  }
  return 'jpeg';
}

export function generateOptimizedUrl(
  url: string,
  format: SupportedImageFormat,
  width: number,
): string {
  return `/api/optimize-image?url=${encodeURIComponent(url)}&width=${width}&format=${format}`;
}

export function generateSrcSet(
  url?: string,
  format?: SupportedImageFormat,
  width?: number,
): string {
  if (!url || !format) {
    return '';
  }

  const srcSetEntries: string[] = [];

  if (width) {
    // If width prop is provided, generate variations for different pixel densities
    for (const density of SCREEN_DENSITY_FACTORS) {
      const effectiveWidth = width * density;
      srcSetEntries.push(
        `${generateOptimizedUrl(url, format, effectiveWidth)} ${effectiveWidth}w`,
      );
    }
  } else {
    // If no width prop, generate variations for Tailwind breakpoints
    for (const breakpoint of TAILWIND_BREAKPOINTS) {
      for (const density of SCREEN_DENSITY_FACTORS) {
        const effectiveWidth = Math.round(
          breakpoint * density * SCREEN_DENSITY_REDUCTION_MULTIPLIER,
        );
        srcSetEntries.push(
          `${generateOptimizedUrl(url, format, effectiveWidth)} ${effectiveWidth}w`,
        );
      }
    }
  }

  return srcSetEntries.join(', ');
}

export function generateSizes(width?: number): string {
  if (width) {
    // If width prop is provided, return the fixed width in CSS pixels
    return `${width}px`;
  }

  // If no width prop, use Tailwind breakpoints for responsive sizing
  const sizesByBreakpoint = TAILWIND_BREAKPOINTS.map(
    (breakpoint) =>
      `(max-width: ${breakpoint}px) ${Math.round(breakpoint * SCREEN_DENSITY_REDUCTION_MULTIPLIER)}px`,
  );
  return [...sizesByBreakpoint, '100vw'].join(', ');
}
