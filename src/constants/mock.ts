export const MOCK_AVATAR = 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3';

export type Car =  {
  model: string,
  subscription: {
    start: string,
    end: string,
  },
  stateNumber: string,
}

export const MOCK_CARS: Car[] = [
  {
    model: 'Genesis G70',
    subscription: {
      start: '22.12.21',
      end: '14.07.22',
    },
    stateNumber: 'К 332 МВ 777',
  },
  {
    model: 'Genesis G90',
    subscription: {
      start: '22.01.21',
      end: '14.01.23',
    },
    stateNumber: 'К 444 МВ 777',
  },
];
