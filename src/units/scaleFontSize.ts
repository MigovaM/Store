import { Dimensions, PixelRatio } from 'react-native';

type DimensionsSchema = {
  width: number;
  height: number;
};

const { width }: DimensionsSchema = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();

const idealWidth = 428;

export const scaleFontSize = (fontSize = 1): number => {
  const divisionRatio: number = idealWidth / (fontSize / ratio);

  return width / divisionRatio;
};
