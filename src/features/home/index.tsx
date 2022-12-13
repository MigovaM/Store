import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomStatusBar from '../../components/CustomStatusBar';
import { MainHeader } from './components/mainHeader';

import { COLORS } from '../../constants/colors';
import { MaterialTopNavigator } from '../../navigation/MaterialTopNavigator';

export const HomeScreen = () => {
  const [activeCarIndex, setCarActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundStyle={styles.backgroundStyle} barStyle={'light-content'} />
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
  backgroundStyle: {
    backgroundColor: COLORS.seaMariner,
  },
});
