import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import OverviewStack from './Overview';
import Map from '../screens/Map';

export default createDrawerNavigator({
  OverviewStack,
  Map,
});
