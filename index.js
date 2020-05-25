import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import LoginScreen from './src/screens/login';

if (__DEV__) activateKeepAwake();

registerRootComponent(LoginScreen);