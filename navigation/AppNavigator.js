import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import CurrentScreen from '../screens/HistoryScreen';

export default createAppContainer(
  createSwitchNavigator({
    Current: CurrentScreen,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    Main: MainTabNavigator,
  }, {
    initialRouteName: 'Main'
  })
);

