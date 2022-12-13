import React from 'react';
import { Route, StyleSheet, Text, View } from 'react-native';

import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import { MockScreen } from '../components/MockScreen';
import { Services } from '../features/home/components/services';

import { COLORS } from '../constants/colors';
import { TEXT } from '../constants/text';
import { MaterialTopNavigatorScreenNames, MaterialTopNavigatorType } from '../types/navigation';
import { scaleFontSize } from '../units/scaleFontSize';

type MaterialTopNavigatorProps = {
    activeCarIndex: number
}

const Tab = createMaterialTopTabNavigator<MaterialTopNavigatorType>();

const getTabBarLabel = (isFocus: boolean, label: string) => {
  return (
    <View style={styles.tab}>
      <Text style={isFocus ? styles.activeLabel : styles.label}>{label}</Text>
      {isFocus && (
        <View style={styles.activeIndicator}/>
      )}
    </View>
  );
};

const getScreenOptions = ({ route }: { route: Route }):  MaterialTopTabNavigationOptions => ({
  animationEnabled: false,
  tabBarLabel: ({ focused }: { focused: boolean }) => (
    getTabBarLabel(focused, TEXT.materialTop[route.name as keyof typeof TEXT.materialTop])
  ),
  tabBarItemStyle: {
    height: 40,
    justifyContent: 'flex-start',
    width: 100,
  },
  tabBarIndicatorStyle: {
    height: 0,
  },
  tabBarPressColor: 'transparent',
  tabBarContentContainerStyle: {
    justifyContent: 'space-around',
    marginRight: 10,
  },
  tabBarStyle: {
    height: 40,
    elevation: 0,
    shadowColor: COLORS.white,
  },
});

export const MaterialTopNavigator = (props: MaterialTopNavigatorProps) => {
  const { activeCarIndex } = props;

  return (
    <Tab.Navigator initialRouteName={MaterialTopNavigatorScreenNames.services} screenOptions={getScreenOptions}>
      <Tab.Screen name={MaterialTopNavigatorScreenNames.services}>
        {props => <Services {...props} activeCarIndex={activeCarIndex} />}
      </Tab.Screen>
      <Tab.Screen name={MaterialTopNavigatorScreenNames.subscription} component={MockScreen} />
      <Tab.Screen name={MaterialTopNavigatorScreenNames.marketplace} component={MockScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    width: '120%',
    position: 'relative',
    left: -10,
  },
  activeLabel: {
    fontSize: scaleFontSize(14),
    fontWeight: '600',
    lineHeight: 14,
  },
  label: {
    fontSize: scaleFontSize(12),
    lineHeight: 13,
    color: COLORS.wallStreet,
  },
  activeIndicator: {
    height: 3,
    width: '100%',
    marginTop: 5,
    borderRadius: 3,
    backgroundColor: COLORS.dark,
  },
});
