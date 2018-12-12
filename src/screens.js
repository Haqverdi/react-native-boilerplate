import { Navigation } from 'react-native-navigation';

import Init from './containers/Init';

export function registerScreens(Provider, store) {
  Navigation.registerComponentWithRedux('Init', () => Init, Provider, store);
}
