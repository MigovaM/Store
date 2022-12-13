import React from 'react';
import { StyleSheet,View } from 'react-native';

import { COLORS } from '../constants/colors';

type IndicatorPropsType = {
    percentage: number
}

export const Indicator = (props: IndicatorPropsType) => {
  const { percentage } = props;

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={[styles.percentage, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 4,
  },
  percentage: {
    height: 4,
    backgroundColor: COLORS.dark,
    borderRadius: 3,
  },
  background: {
    flex: 1,
    backgroundColor: COLORS.linkWater,
    borderRadius: 3,
  },
});

