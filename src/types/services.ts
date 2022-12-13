export enum Services {
    refuel = 'refuel',
    maintenance = 'maintenance',
    fines = 'fines',
    parking = 'parking',
    gasStation = 'gasStation',
}

export const serviceIcons = {
  [Services.refuel]: 'gas-station-outline',
  [Services.maintenance]: 'tools',
  [Services.fines]: 'cctv',
  [Services.parking]: 'car-brake-parking',
  [Services.gasStation]: 'gas-station',
};
