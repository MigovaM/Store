import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomStatusBar from '../../components/CustomStatusBar';
import { MainHeader } from './components/MainHeader';

import { COLORS } from '../../constants/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar barStyle={'light-content'} backgroundStyle={styles.backgroundStyle}/>
      <MainHeader />
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
