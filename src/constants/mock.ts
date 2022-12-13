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
        info: 'АИ-95',
        fuel: {
          totalFuel: 80,
          fuelLack: 40,
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
    model: 'Audi A4',
    subscription: {
      start: '22.01.21',
      end: '14.01.23',
    },
    stateNumber: 'К 333 МВ 777',
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
    model: 'Ford Fiesta',
    subscription: {
      start: '22.01.21',
      end: '14.01.23',
    },
    stateNumber: 'К 111 МВ 777',
    services: [
      {
        type: 'refuel',
        info: 'АИ-95',
        fuel: {
          totalFuel: 80,
          fuelLack: 10,
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
    model: 'Lexus GS',
    subscription: {
      start: '22.01.21',
      end: '14.01.23',
    },
    stateNumber: 'К 111 МВ 777',
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
];
