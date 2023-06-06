import * as React from 'react';

import { setupBrowserWorker, SetupWorker } from './setupBrowserWorker';

type MockServiceWorkerContextType = {
  worker: SetupWorker;
};

export const MockingContext = React.createContext<MockServiceWorkerContextType>({
  worker: undefined,
});

export const MockingContextProvider = MockingContext.Provider;

export const useValuesMockingContext = (): MockServiceWorkerContextType => {
  const worker = React.useMemo(() => {
    let worker;
    try {
      worker = setupBrowserWorker('/api/plugins/nmstate-console-plugin');
    } catch (e) {
      console.error('Could not setup mocking, setupBrowserWorker failed!', e);
    }
    return worker;
  }, []);

  return {
    worker,
  };
};
