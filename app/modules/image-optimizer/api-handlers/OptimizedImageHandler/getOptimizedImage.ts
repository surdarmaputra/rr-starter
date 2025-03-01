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

    return new Response(optimizedImage, {
      headers: {
        'Content-Type': `image/${format}`,
        'Cache-Control': 'public, max-age=604800', // Cache for 7 days
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  } catch (error) {
    // TODO: add logger
    return new Response('Error processing image', { status: 500 });
  }
}
