import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { MainHeader } from './components/mainHeader';

import { COLORS } from '../../constants/colors';
import { MaterialTopNavigator } from '../../navigation/MaterialTopNavigator';

export const HomeScreen = () => {
  const [activeCarIndex, setCarActiveIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <MainHeader activeCarIndex={activeCarIndex} setCarActiveIndex={setCarActiveIndex} />
      <MaterialTopNavigator activeCarIndex={activeCarIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
