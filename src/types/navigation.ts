export enum BottomTabScreenNames {
    home = 'home',
    auto = 'auto',
    services = 'services',
    trips = 'trips',
    market = 'market'
}

export enum RootNavigatorScreenNames {
    bottomTab = 'BottomTab',
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
