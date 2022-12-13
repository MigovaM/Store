import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../constants/colors';

import CustomStatusBar from './CustomStatusBar';
import { GradientView } from './GradientView';

type HomePropsType = {
    children: React.ReactNode
}

const colors = [COLORS.seaMariner, COLORS.dark];

export const Header = (props: HomePropsType) => {
  const { children } = props;

  return (
    <View style={[styles.container]}>
      <CustomStatusBar backgroundStyle={styles.backgroundStyle} barStyle={'light-content'} />
      <GradientView colors={colors} style={styles.gradient}>
        {children}
      </GradientView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    marginBottom: 10,
  },
  gradient: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  backgroundStyle: {
    backgroundColor: COLORS.seaMariner,
  },
});
