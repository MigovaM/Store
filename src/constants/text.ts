import { Services } from '../types/services';

export const TEXT = {
  bottomTab: {
    home: 'Главная',
    auto: 'Авто',
    services: 'Сервисы',
    trips: 'Поездки',
    market: 'Маркет',
  },
  home: {
    subscriptionEnd: 'Подписка до',
  },
  materialTop: {
    services: 'Услуги',
    subscription: 'Подписка',
    marketplace: 'Маркетплейс',
  },
  services: {
    [Services.refuel]: 'Заправить',
    [Services.maintenance]: 'Техобслуживание',
    [Services.fines]: 'Штрафы',
    [Services.parking]: 'Паркинг',
    [Services.gasStation]: 'АЗС',
  },
  auto: {
    cars: 'Автопарк',
    subscription: 'Подписка',
    info: 'Информация по услугам',
  },
};
