import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screens from './Screens';
import Auth from './Auth';

// Loading screen

export default createAppContainer(createSwitchNavigator({
  Auth,
  Main: Screens,
}));