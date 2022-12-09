import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from '../constants/colors';
import { TEXT } from '../constants/text';
import { HomeScreen } from '../features/home';
import { BottomTabNavigatorType, BottomTabScreenNames } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabNavigatorType>();

const MockScreen = () => <></>;

export const BottomTabNavigator = () => {
  const { bottom } = useSafeAreaInsets();

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: COLORS.darkOpaque,
      borderTopWidth: 0,
      elevation: 0,
      height: 70 + bottom,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    tabBarLabelStyle: {
      color: COLORS.white,
    },
    tabBarIconStyle: {
      backgroundColor: 'red',
    },
  };

  const getColor = (isActive: boolean) => isActive ? COLORS.white : COLORS.whiteOpaque;

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <AntDesignIcon name="home" size={30} color={getColor(focused)} />
              <Text style={[styles.label, { color: getColor(focused) }]}>
                {TEXT.bottomTab[BottomTabScreenNames.home]}
              </Text>
            </>
          ),
        }}
        name={BottomTabScreenNames.home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <AntDesignIcon name="car" size={30} color={getColor(focused)} />
              <Text style={[styles.label, { color: getColor(focused) }]}>
                {TEXT.bottomTab[BottomTabScreenNames.auto]}
              </Text>
            </>
          ),
        }}
        name={BottomTabScreenNames.auto}
        component={MockScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <AntDesignIcon name="appstore-o" size={30} color={getColor(focused)} />
              <Text style={[styles.label, { color: getColor(focused) }]}>
                {TEXT.bottomTab[BottomTabScreenNames.services]}
              </Text>
            </>
          ),
        }}
        name={BottomTabScreenNames.services}
        component={MockScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <FeatherIcon name="compass" size={30} color={getColor(focused)} />
              <Text style={[styles.label, { color: getColor(focused) }]}>
                {TEXT.bottomTab[BottomTabScreenNames.trips]}
              </Text>
            </>
          ),
        }}
        name={BottomTabScreenNames.trips}
        component={MockScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <MaterialIcon name="storefront" size={30} color={getColor(focused)} />
              <Text style={[styles.label, { color: getColor(focused) }]}>
                {TEXT.bottomTab[BottomTabScreenNames.market]}
              </Text>
            </>
          ),
        }}
        name={BottomTabScreenNames.market}
        component={MockScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
  },
});
