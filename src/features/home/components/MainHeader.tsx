import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
import Carousel from 'react-native-reanimated-carousel';
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/src/types';

import { GradientView } from '../../../components/GradientView';

import { COLORS } from '../../../constants/colors';
import { Car, MOCK_AVATAR, MOCK_CARS } from '../../../constants/mock';
import { TEXT } from '../../../constants/text';

const width = Dimensions.get('screen').width;
const SLIDE_HEIGHT = 180;

export const MainHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onProgressChange = (_: number, absoluteProgress: number) => setActiveIndex(Math.round(absoluteProgress));

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
    <GradientView colors={[COLORS.seaMariner, COLORS.dark]} style={styles.container}>
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
        curPage={activeIndex}
        maxPage={MOCK_CARS.length}
      />
    </GradientView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: COLORS.dark,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  slide: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 28,
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
    fontSize: 12,
    color: COLORS.white,
  },
  auto: {
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: COLORS.antarcticDeep,
  },
  model: {
    fontSize: 28,
    color: COLORS.white,
  },
  stateNumber: {
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
