import { forwardRef, useEffect, useState } from 'react';

import type { SupportedImageFormat } from './constants';
import {
  detectBestFormat,
  generateOptimizedUrl,
  generateSizes,
  generateSrcSet,
  hasOriginUrl,
} from './utils';

export interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  alt: string;
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, width, alt, ...rest }, ref) => {
    if (!src) throw new Error("The 'src' prop is required for OptimizedImage.");

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [format, setFormat] = useState<SupportedImageFormat | undefined>(
      undefined,
    );
    const srcSet = generateSrcSet(imageUrl, format, width);
    const sizes = generateSizes(width);

    useEffect(() => {
      const requestDomain =
        typeof window !== 'undefined' ? window.location.origin : '';
      setFormat(detectBestFormat());
      setImageUrl(hasOriginUrl(src) ? src : `${requestDomain}${src}`);
    }, [src]);

    if (!imageUrl) return null;

    return (
      <img
        alt={alt}
        ref={ref}
        sizes={sizes}
        src={generateOptimizedUrl(
          imageUrl,
          format as SupportedImageFormat,
          width || 320,
        )}
        srcSet={srcSet}
        width={width}
        {...rest}
      />
    );
  },
);

OptimizedImage.displayName = 'OptimizedImage';
