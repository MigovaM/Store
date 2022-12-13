export const MOCK_AVATAR = 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3';

export const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export type Service = {
  type: string,
  warning?: string,
  info: string,
  fuel?: {
    totalFuel: number,
    fuelLack: number,
    unit: string
  },
  sum: number,
  total: string
}

export type Car =  {
  id: string,
  model: string,
  subscription: {
    start: string,
    end: string,
  },
  stateNumber: string,
  services: Service[]
}

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    model: 'Genesis G70',
    subscription: {
      start: '22.12.21',
      end: '14.07.22',
    },
    stateNumber: 'К 332 МВ 777',
    services: [
      {
        type: 'refuel',
        warning: 'Мало топлива',
        info: 'АИ-95',
        fuel: {
          totalFuel: 80,
          fuelLack: 60,
          unit: 'л',
        },
        sum: 3325,
        total: '~45 минут',
      },
      {
        type: 'maintenance',
        warning: 'через 934 км',
        info: 'Масло ДВС, фильтры',
        sum: 27200,
        total: '~6 часов',
      },
      {
        type: 'fines',
        info: '4 новых',
        sum: 5200,
        total: 'Всего',
      },
      {
        type: 'parking',
        info: '№ 1119',
        sum: 800,
        total: '4 ч прошло',
      },
      {
        type: 'gasStation',
        info: '1,6 км',
        sum: 49,
        total: '1 л АИ-95',
      },
    ],
  },
  {
    id: '2',
    model: 'Genesis G90',
    subscription: {
      start: '22.01.21',
      end: '14.01.23',
    },
    stateNumber: 'К 444 МВ 777',
    services: [
      {
        type: 'refuel',
        warning: 'Мало топлива',
        info: 'АИ-93',
        fuel: {
          totalFuel: 85,
          fuelLack: 70,
          unit: 'л',
        },
        sum: 3921,
        total: '~50 минут',
      },
      {
        type: 'maintenance',
        warning: 'через 100 км',
        info: 'Масло ДВС, фильтры',
        sum: 50200,
        total: '~10 часов',
      },
      {
        type: 'fines',
        info: '2 новых',
        sum: 500,
        total: 'Всего',
      },
      {
        type: 'parking',
        info: '№ 10',
        sum: 100,
        total: '1 ч прошло',
      },
      {
        type: 'gasStation',
        info: '1,7 км',
        sum: 100,
        total: '1 л АИ-95',
      },
    ],
  },
  {
    id: '3',
    model: 'Audi A4',
    subscription: {
      start: '11.03.21',
      end: '11.02.23',
    },
    stateNumber: 'К 333 МВ 01',
    services: [
      {
        type: 'refuel',
        warning: 'Мало топлива',
        info: 'АИ-95',
        fuel: {
          totalFuel: 80,
          fuelLack: 75,
          unit: 'л',
        },
        sum: 6325,
        total: '~20 минут',
      },
      {
        type: 'maintenance',
        warning: 'через 300 км',
        info: 'Масло ДВС, фильтры',
        sum: 17200,
        total: '~39 часов',
      },
      {
        type: 'fines',
        info: '10 новых',
        sum: 15200,
        total: 'Всего',
      },
      {
        type: 'parking',
        info: '№ 1119',
        sum: 800,
        total: '4 ч прошло',
      },
      {
        type: 'gasStation',
        info: '11 км',
        sum: 50,
        total: '1 л АИ-95',
      },
    ],
  },
  {
    id: '4',
    model: 'Ford Fiesta',
    subscription: {
      start: '22.02.21',
      end: '14.02.25',
    },
    stateNumber: 'К 111 МВ 02',
    services: [
      {
        type: 'refuel',
        info: 'АИ-100',
        fuel: {
          totalFuel: 100,
          fuelLack: 10,
          unit: 'л',
        },
        sum: 3325,
        total: '~45 минут',
      },
      {
        type: 'maintenance',
        warning: 'через 1000 км',
        info: 'Масло ДВС, фильтры',
        sum: 30200,
        total: '~7 часов',
      },
      {
        type: 'fines',
        info: '4 новых',
        sum: 5200,
        total: 'Всего',
      },
      {
        type: 'parking',
        info: '№ 11',
        sum: 200,
        total: '1 ч прошло',
      },
      {
        type: 'gasStation',
        info: '1,6 км',
        sum: 49,
        total: '1 л АИ-100',
      },
    ],
  },
  {
    id: '5',
    model: 'Lexus GS',
    subscription: {
      start: '22.01.22',
      end: '14.01.24',
    },
    stateNumber: 'К 111 МВ 03',
    services: [
      {
        type: 'refuel',
        warning: 'Мало топлива',
        info: 'АИ-95',
        fuel: {
          totalFuel: 80,
          fuelLack: 70,
          unit: 'л',
        },
        sum: 2025,
        total: '~45 минут',
      },
      {
        type: 'maintenance',
        warning: 'через 934 км',
        info: 'Масло ДВС, фильтры',
        sum: 30200,
        total: '~6 часов',
      },
      {
        type: 'fines',
        info: '4 новых',
        sum: 3200,
        total: 'Всего',
      },
      {
        type: 'parking',
        info: '№ 119',
        sum: 800,
        total: '4 ч прошло',
      },
      {
        type: 'gasStation',
        info: '1,6 км',
        sum: 40,
        total: '1 л АИ-95',
      },
    ],
  },
];
