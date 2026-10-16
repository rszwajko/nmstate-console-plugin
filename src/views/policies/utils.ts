import { NodeNetworkConfigurationInterface, V1NodeNetworkConfigurationPolicy } from '@types';
import { isEmpty } from '@utils/helpers';
import { OVN_BRIDGE_MAPPINGS } from '@utils/resources/ovn/constants';

import { SUPPORTED_INTERFACE_TYPES } from './constants';

export const isPolicySupported = (policy: V1NodeNetworkConfigurationPolicy) => {
  const hasSupportedInterface = policy?.spec?.desiredState?.interfaces?.some(
    (policyInterface: NodeNetworkConfigurationInterface) =>
      SUPPORTED_INTERFACE_TYPES.includes(policyInterface.type),
  );
  const hasOVNBridgeMapping = !isEmpty(policy?.spec?.desiredState?.ovn?.[OVN_BRIDGE_MAPPINGS]);

  return Boolean(hasSupportedInterface || hasOVNBridgeMapping);
};
