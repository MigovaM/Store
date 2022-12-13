import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Map } from '../../../components/Map';
import { Widget } from '../../../components/Widget';

import { COLORS } from '../../../constants/colors';
import { MOCK_CARS, Service } from '../../../constants/mock';

type ServicesPropsType = {
    activeCarIndex: number
}

const width = Dimensions.get('screen').width;
const widgetColors = [[COLORS.white, COLORS.heartOfIce], [COLORS.white, COLORS.touchOfMint]];

export const Services = (props: ServicesPropsType) => {
  const { activeCarIndex } = props;
  const { bottom } = useSafeAreaInsets();

  const mainWidgets = MOCK_CARS[activeCarIndex].services.slice(0, 2);
  const commonWidgets = MOCK_CARS[activeCarIndex].services.slice(2);

  const mapContainerStyle = { marginBottom: bottom + 75 };

  const renderMainItem = ({ item, index }: ListRenderItemInfo<Service>) => (
    <Widget key={item.type} widget={item} containerStyle={styles.mainWidget} colors={widgetColors[index]} />
  );

  const renderCommonItem = ({ item }: ListRenderItemInfo<Service>) => (
    <Widget key={item.type} widget={item} containerStyle={styles.commonWidget} />
  );

  return(
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <FlatList
        horizontal={true}
        data={mainWidgets}
        scrollEnabled={false}
        renderItem={renderMainItem}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        horizontal={true}
        data={commonWidgets}
        scrollEnabled={false}
        renderItem={renderCommonItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={[styles.mapContainer, mapContainerStyle]}>
        <Map containerStyle={styles.map} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 5,
  },
  mainWidget: {
    width: (width - 60) / 2,
    aspectRatio: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  commonWidget: {
    width: (width - 70) / 3,
    height: (width - 130) / 2,
    marginHorizontal: 7,
    marginVertical: 5,
  },
  mapContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  map: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
