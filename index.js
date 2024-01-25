/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './src/screens/User/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
