import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MockScreen } from '../components/MockScreen';

import { COLORS } from '../constants/colors';
import { TEXT } from '../constants/text';
import { AutoScreen } from '../features/auto';
import { HomeScreen } from '../features/home';
import { bottomTabIcons, BottomTabNavigatorType, BottomTabScreenNames } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabNavigatorType>();

const getNavigatorOptions = (bottomInset: number): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: true,
  tabBarActiveTintColor: COLORS.white,
  tabBarInactiveTintColor: COLORS.whiteOpaque,
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.darkOpaque,
    elevation: 0,
    height: 70 + bottomInset,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10 + bottomInset,
  },
});

const getScreenOptions = (Icon: typeof React.Component, name: BottomTabScreenNames ): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color }) => <Icon name={bottomTabIcons[name]} size={30} color={color} />,
  tabBarLabel: TEXT.bottomTab[name],
});

export const BottomTabNavigator = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator screenOptions={() => getNavigatorOptions(bottom)}>
      <Tab.Screen
        options={() => getScreenOptions(AntDesignIcon, BottomTabScreenNames.home)}
        name={BottomTabScreenNames.home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={() => getScreenOptions(AntDesignIcon, BottomTabScreenNames.auto)}
        name={BottomTabScreenNames.auto}
        component={AutoScreen}
        initialParams={{ indexAuto: null }}
      />
      <Tab.Screen
        options={() => getScreenOptions(AntDesignIcon, BottomTabScreenNames.services)}
        name={BottomTabScreenNames.services}
        component={MockScreen}
      />
      <Tab.Screen
        options={() => getScreenOptions(FeatherIcon, BottomTabScreenNames.trips)}
        name={BottomTabScreenNames.trips}
        component={MockScreen}
      />
      <Tab.Screen
        options={() => getScreenOptions(MaterialIcon, BottomTabScreenNames.market)}
        name={BottomTabScreenNames.market}
        component={MockScreen}
      />
    </Tab.Navigator>
  );
};
