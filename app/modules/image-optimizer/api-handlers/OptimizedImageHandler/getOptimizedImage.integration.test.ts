import { describe, expect, test } from 'vitest';

import { getOptimizedImage } from './getOptimizedImage';

const imageSample =
  'https://fastly.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04';

describe('getOptimizedImage', () => {
  test('returns 400 if no url query parameter is provided', async () => {
    const request = new Request('http://localhost:3000/api/optimize-image');
    const response = await getOptimizedImage(request);
    expect(response.status).toBe(400);
  });

  test('returns 500 if an error occurs while optimizing an unavailable image', async () => {
    const request = new Request(
      'http://localhost:3000/api/optimize-image?url=https://example.com/unavailable.jpg',
    );
    const response = await getOptimizedImage(request);
    expect(response.status).toBe(500);
  });

  test('returns the optimized image with the correct content type and cache control headers', async () => {
    const request = new Request(
      `http://localhost:3000/api/optimize-image?url=${imageSample}&width=800&format=webp`,
    );
    const response = await getOptimizedImage(request);
    expect(response.headers.get('Content-Type')).toBe('image/webp');
    expect(response.headers.get('Cache-Control')).toBe(
      'public, max-age=604800',
    );
  });
});
