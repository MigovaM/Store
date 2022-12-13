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
    [BottomTabScreenNames.auto]: undefined,
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
