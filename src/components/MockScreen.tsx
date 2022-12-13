import React from 'react';
import { StyleSheet,View } from 'react-native';

import { COLORS } from '../constants/colors';

export const MockScreen = () => (
  <View style={styles.container} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
