import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { Map } from '../../../../components/Map';
import { Widget } from '../../../../components/Widget';

import { COLORS } from '../../../../constants/colors';
import { Service } from '../../../../constants/mock';

import { useServices } from './useServices';

type ServicesPropsType = {
    activeCarIndex: number
}

const width = Dimensions.get('screen').width;
const widgetColors = [[COLORS.white, COLORS.heartOfIce], [COLORS.white, COLORS.touchOfMint]];

export const Services = (props: ServicesPropsType) => {
  const {
    goToAuto,
    onRefresh,
    isLoading,
    mainWidgets,
    commonWidgets,
    mapContainerStyle,
  } = useServices(props.activeCarIndex);

  const renderMainItem = ({ item, index }: ListRenderItemInfo<Service>) => (
    <Widget
      key={item.type}
      widget={item}
      containerStyle={styles.mainWidget}
      colors={widgetColors[index]}
      goToAuto={goToAuto}
    />
  );

  const renderCommonItem = ({ item }: ListRenderItemInfo<Service>) => (
    <Widget
      key={item.type}
      widget={item}
      containerStyle={styles.commonWidget}
      goToAuto={goToAuto}
    />
  );

  return(
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
    >
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
