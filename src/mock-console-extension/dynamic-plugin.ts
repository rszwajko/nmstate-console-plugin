import { EncodedExtension } from '@openshift/dynamic-plugin-sdk';
import { ContextProvider } from '@openshift-console/dynamic-plugin-sdk';
import type { ConsolePluginMetadata } from '@openshift-console/dynamic-plugin-sdk-webpack/lib/schema/plugin-package';


export const exposedModules : ConsolePluginMetadata['exposedModules'] = {
  MockPlugin: './mock-console-extension',
};

export const extensions : EncodedExtension[] = [
  {
    type: 'console.context-provider',
    properties: {
      provider: { $codeRef: 'MockPlugin.MockingContextProvider' },
      useValueHook: { $codeRef: 'MockPlugin.useValuesMockingContext' },
    },
  } as EncodedExtension<ContextProvider>,
];
