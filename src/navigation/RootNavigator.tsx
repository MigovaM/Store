import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RootNavigatorScreenNames, RootNavigatorType } from '../types/navigation';

import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createStackNavigator<RootNavigatorType>();

const screenOptions = {
  headerShown: false,
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RootNavigatorScreenNames.bottomTab} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
