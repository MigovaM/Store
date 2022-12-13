import React from 'react';
import { StyleSheet,View, ViewStyle } from 'react-native';
import MapView from 'react-native-maps';

import { INITIAL_REGION } from '../constants/mock';

type MapPropsType = {
    containerStyle: ViewStyle
}

export const Map = (props: MapPropsType) => {
  const { containerStyle } = props;

  return (
    <View style={containerStyle}>
      <MapView style={styles.map} initialRegion={INITIAL_REGION} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
