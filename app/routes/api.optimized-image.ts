import type { LoaderFunction } from 'react-router';

import { wrapWithApiLogger } from '~/modules/core/libs/logger/utils';
import { getOptimizedImage } from '~/modules/image-optimizer/api-handlers/OptimizedImageHandler/getOptimizedImage';

export const loader: LoaderFunction = async ({ request }) => {
  return wrapWithApiLogger(request, () => getOptimizedImage(request));
};
