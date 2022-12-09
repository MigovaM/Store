import React from 'react';
import { ViewStyle } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

type CoordinatesType = { x: number; y: number }

type GradientViewPropsType = {
    children: React.ReactNode,
    style: ViewStyle,
    colors: string[],
    start?: CoordinatesType,
    end?: CoordinatesType,
}

export const GradientView = (props: GradientViewPropsType) => {
  const {
    style,
    children,
    start ,
    end,
    colors,
  } = props;

  return (
    <LinearGradient style={style} start={start} end={end} colors={colors}>
      {children}
    </LinearGradient>
  );
};
