import { InterfaceType } from '@types';

export const SUPPORTED_INTERFACE_TYPES = [
  InterfaceType.BOND,
  InterfaceType.ETHERNET,
  InterfaceType.LINUX_BRIDGE,
  InterfaceType.OVS_BRIDGE,
];

export enum EnactmentStatuses {
  // t('Failing')
  Failing = 'Failing',
  // t('Aborted')
  Aborted = 'Aborted',
  // t('Available')
  Available = 'Available',
  // t('Progressing')
  Progressing = 'Progressing',
  // t('Pending')
  Pending = 'Pending',
}
