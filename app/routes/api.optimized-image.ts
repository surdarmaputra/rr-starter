import type { LoaderFunction } from 'react-router';

import { getOptimizedImage } from '~/modules/image-optimizer/api-handlers/OptimizedImageHandler/getOptimizedImage';

export const loader: LoaderFunction = async ({ request }) => {
  return getOptimizedImage(request);
};
