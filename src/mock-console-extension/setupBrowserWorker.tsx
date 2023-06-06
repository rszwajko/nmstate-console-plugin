import { rest, SetupWorker, setupWorker } from 'msw';

import { logMockRequest } from './logMockRequest';
import { getMockData } from './mocks';

/**
 * Setup the MockServiceWorker with all of the mock handlers available handling request
 * for UI url paths.  The worker will be added to `window.msw` for debugging convenience.
 *
 * @param staticFilePath - URL prefix where `mockServiceWorker.js` will be available
 * @returns A setup and started MockServiceWorker
 */
export function setupBrowserWorker(staticFilePath: string): SetupWorker {
  const worker = setupWorker(
    rest.all('/*', (req, res, ctx) => {
      const mockResponse = getMockData({
        pathname: req.url.pathname,
        method: req.method,
        params: req.params,
      });

      if (mockResponse) {
        logMockRequest('handled', req.url.href);
        return res(ctx.status(mockResponse.statusCode), ctx.json(mockResponse.body));
      }

      logMockRequest('passthrough', req.url.href);
      return req.passthrough();
    }),
  );

  worker.start({
    serviceWorker: {
      url: `${staticFilePath}${staticFilePath.endsWith('/') ? '' : '/'}mockServiceWorker.js`,
      options: {
        scope: '/',
      },
    },
  });

  window['msw'] = worker;

  return worker;
}
export { SetupWorker };
