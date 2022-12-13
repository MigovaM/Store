import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MOCK_CARS } from '../../../../constants/mock';

enum Refreshing {
    loading,
    block,
    default
}

export const useServices = (activeCarIndex: number) => {
  const { bottom } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(Refreshing.default);

  const mainWidgets = MOCK_CARS[activeCarIndex].services.slice(0, 2);
  const commonWidgets = MOCK_CARS[activeCarIndex].services.slice(2);

  const mapContainerStyle = { marginBottom: bottom + 75 };
  const isLoading = refreshing === Refreshing.loading;

  useEffect(() => {
    if (refreshing === Refreshing.block) {
      const timer = setTimeout(() => {
        setRefreshing(Refreshing.default);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [refreshing]);

  const onRefresh = () => {
    if (refreshing !== Refreshing.block) {
      setRefreshing(Refreshing.loading);
      setTimeout(() => setRefreshing(Refreshing.block), 2000);
    }
  };

  return {
    onRefresh,
    isLoading,
    mainWidgets,
    commonWidgets,
    mapContainerStyle,
  };
};
