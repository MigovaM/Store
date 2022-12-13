import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { RouteProp } from '@react-navigation/native';

export enum BottomTabScreenNames {
    home = 'home',
    auto = 'auto',
    services = 'services',
    trips = 'trips',
    market = 'market'
}

export enum RootNavigatorScreenNames {
    bottomTab = 'bottomTab',
}

export enum MaterialTopNavigatorScreenNames {
    services = 'services',
    subscription = 'subscription',
    marketplace = 'marketplace'
}

export type BottomTabNavigatorType = {
    [BottomTabScreenNames.home]: undefined,
    [BottomTabScreenNames.auto]: { indexAuto: number | null },
    [BottomTabScreenNames.services]: undefined,
    [BottomTabScreenNames.trips]: undefined,
    [BottomTabScreenNames.market]: undefined,
}

export type RootNavigatorType = {
    [RootNavigatorScreenNames.bottomTab]: undefined,
}

export type MaterialTopNavigatorType = {
    [MaterialTopNavigatorScreenNames.services]: undefined,
    [MaterialTopNavigatorScreenNames.subscription]: undefined,
    [MaterialTopNavigatorScreenNames.marketplace]: undefined,
}

export const bottomTabIcons = {
  [BottomTabScreenNames.home]: 'home',
  [BottomTabScreenNames.auto]: 'car',
  [BottomTabScreenNames.services]: 'appstore-o',
  [BottomTabScreenNames.trips]: 'compass',
  [BottomTabScreenNames.market]: 'storefront',
};

export type HomeNavigationProp = NativeStackNavigationProp<BottomTabNavigatorType, BottomTabScreenNames.home>
export type AutoNavigationProp = NativeStackNavigationProp<BottomTabNavigatorType, BottomTabScreenNames.auto>

export type AutoRouteType = RouteProp<BottomTabNavigatorType, BottomTabScreenNames.auto>;

