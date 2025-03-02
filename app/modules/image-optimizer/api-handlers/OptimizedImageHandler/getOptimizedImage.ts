import { logger } from '~/modules/core/libs/logger/logger';

import { ERROR_LOG_MESSAGE, INFO_LOG_MESSAGE } from '../../constants';
import { optimizeImageFromUrl } from '../../services/ImageOptimizerService/optimizeImageFromUrl';

export async function getOptimizedImage(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const imageUrl = url.searchParams.get('url');
  const width = parseInt(url.searchParams.get('width') || '800', 10);
  const format = (url.searchParams.get('format') || 'webp') as
    | 'webp'
    | 'jpeg'
    | 'png'
    | 'avif';

  if (!imageUrl) {
    return new Response("Missing 'url' query parameter", { status: 400 });
  }

  try {
    const optimizedImage = await optimizeImageFromUrl({
      imageUrl,
      width,
      format,
    });

    logger.logInfo(INFO_LOG_MESSAGE.OPTIMIZE_IMAGE_SUCCESS);
    return new Response(optimizedImage, {
      headers: {
        'Content-Type': `image/${format}`,
        'Cache-Control': 'public, max-age=604800', // Cache for 7 days
      },
    });
  } catch (error) {
    logger.logError(ERROR_LOG_MESSAGE.GET_OPTIMIZED_IMAGE_ERROR, error);
    return new Response('Image not found', { status: 404 });
  }
}
