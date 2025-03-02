import { isbot } from 'isbot';
import { isRouteErrorResponse } from 'react-router';

import {
  ERROR_LOG_MESSAGE,
  INFO_LOG_MESSAGE,
  WARNING_LOG_MESSAGE,
} from './constants';
import { logger } from './logger';

export function logIncomingRequest(request: Request, isSpaMode?: boolean) {
  const userAgent = request.headers.get('user-agent');
  const isBot = userAgent && isbot(userAgent);

  logger.logInfo(INFO_LOG_MESSAGE.INCOMING_REQUEST, {
    is_bot: isBot,
    is_spa_mode: isSpaMode,
    url: request.url,
    user_agent: userAgent,
  });
}

export function logRequestError(error: unknown) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    logger.logWarn(WARNING_LOG_MESSAGE.ROUTE_NOT_FOUND, error);
  } else {
    logger.logError(ERROR_LOG_MESSAGE.GENERAL_SERVER_ERROR, error);
  }
}

export function wrapWithApiLogger(
  request: Request,
  handler: () => Promise<Response>,
) {
  try {
    logIncomingRequest(request);
    return handler();
  } catch (error) {
    logRequestError(error);
  }
}
