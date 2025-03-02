import { PassThrough } from 'node:stream';

import { createReadableStreamFromReadable } from '@react-router/node';
import { isbot } from 'isbot';
import type { RenderToPipeableStreamOptions } from 'react-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import type {
  ActionFunctionArgs,
  AppLoadContext,
  EntryContext,
  LoaderFunctionArgs,
} from 'react-router';
import { ServerRouter } from 'react-router';

import { ERROR_LOG_MESSAGE } from './modules/core/libs/logger/constants';
import { logger } from './modules/core/libs/logger/logger';
import {
  logIncomingRequest,
  logRequestError,
} from './modules/core/libs/logger/utils';

export const streamTimeout = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadContext: AppLoadContext,
) {
  const userAgent = request.headers.get('user-agent');
  const isBot = userAgent && isbot(userAgent);

  if (routerContext.staticHandlerContext.statusCode !== 404) {
    logIncomingRequest(request, routerContext.isSpaMode);
  }

  return new Promise((resolve, reject) => {
    let shellRendered = false;

    // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
    // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
    const readyOption: keyof RenderToPipeableStreamOptions =
      isBot || routerContext.isSpaMode ? 'onAllReady' : 'onShellReady';

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            logger.logError(ERROR_LOG_MESSAGE.STREAMING_RENDERING_ERROR, error);
          }
        },
      },
    );

    // Abort the rendering stream after the `streamTimeout` so it has tine to
    // flush down the rejected boundaries
    setTimeout(abort, streamTimeout + 1000);
  });
}

export function handleError(
  error: unknown,
  { request }: LoaderFunctionArgs | ActionFunctionArgs,
) {
  if (!request.signal.aborted) {
    logRequestError(error);
  }
}
