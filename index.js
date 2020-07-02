import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';


import navigation from './src/navigations';

import firebase from 'firebase';
import {firebaseConfig} from './src/config/firebase-config';

firebase.initializeApp(firebaseConfig);



if (__DEV__) activateKeepAwake();

registerRootComponent(navigation);