import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';

export default createStackNavigator({
  Login,
  // Register,
  //Forgot,
}, {
  defaultNavigationOptions: {
    header: null
  }
});
