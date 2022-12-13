import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
import Carousel from 'react-native-reanimated-carousel';
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/src/types';

import { Header } from '../../../../components/Header';

import { COLORS } from '../../../../constants/colors';
import { Car, MOCK_AVATAR, MOCK_CARS } from '../../../../constants/mock';
import { TEXT } from '../../../../constants/text';
import { scaleFontSize } from '../../../../units/scaleFontSize';

const width = Dimensions.get('screen').width;
const SLIDE_HEIGHT = 160;

type MainHeaderPropsType = {
  activeCarIndex: number,
  setCarActiveIndex: (value: number) => void
}

export const MainHeader = (props: MainHeaderPropsType) => {
  const { activeCarIndex, setCarActiveIndex } = props;

  const onProgressChange = (_: number, absoluteProgress: number) => setCarActiveIndex(Math.round(absoluteProgress));

  const renderItem = ({ item }: CarouselRenderItemInfo<Car>) => (
    <View style={styles.slide}>
      <Text style={styles.logo}>TES</Text>
      <View style={styles.subscriptionContainer}>
        <Text style={styles.subscriptionText}>{TEXT.home.subscriptionEnd} {item.subscription.end}</Text>
      </View>
      <View style={styles.auto}>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.stateNumber}>{item.stateNumber}</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: MOCK_AVATAR }} style={styles.avatar} />
      </View>
    </View>
  );

  return (
    <Header>
      <Carousel
        width={width}
        height={SLIDE_HEIGHT}
        data={MOCK_CARS}
        loop={false}
        onProgressChange={onProgressChange}
        renderItem={renderItem}
      />
      <PaginationDot
        activeDotColor={COLORS.white}
        inactiveDotColor={COLORS.wallStreet}
        curPage={activeCarIndex}
        maxPage={MOCK_CARS.length}
      />
    </Header>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: scaleFontSize(28),
    letterSpacing: 3,
    color: COLORS.wallStreet,
  },
  subscriptionContainer: {
    zIndex: 1,
    position: 'relative',
    bottom: -12,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 15,
    marginBottom: 5,
    backgroundColor: COLORS.wallStreet,
  },
  subscriptionText: {
    fontSize: scaleFontSize(12),
    color: COLORS.white,
  },
  auto: {
    alignItems: 'center',
    minWidth: 200,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: COLORS.antarcticDeep,
  },
  model: {
    fontSize: scaleFontSize(28),
    color: COLORS.white,
  },
  stateNumber: {
    fontSize: scaleFontSize(14),
    color: COLORS.wallStreet,
  },
  avatarContainer: {
    position: 'absolute',
    right: 20,
    top: 25,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.seaMariner,
  },
});
