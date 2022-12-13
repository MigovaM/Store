import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';

import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Auto } from './components/auto';

import { COLORS } from '../../constants/colors';
import { Car, MOCK_CARS } from '../../constants/mock';
import { TEXT } from '../../constants/text';
import { AutoNavigationProp, AutoRouteType } from '../../types/navigation';
import { scaleFontSize } from '../../units/scaleFontSize';

export const AutoScreen = () => {
  const route = useRoute<AutoRouteType>();
  const navigation = useNavigation<AutoNavigationProp>();
  const isFocused = useIsFocused();

  const [activeCarIndex, setActiveCarIndex] = useState<number | null>(route.params.indexAuto);

  useEffect(() => {
    setActiveCarIndex(route.params.indexAuto);
  }, [route.params.indexAuto]);

  useEffect(() => {
    if (!isFocused) {
      navigation.setParams({ indexAuto: null });
    }
  }, [isFocused]);

  const onItemPress = (index: number) => {
    setActiveCarIndex(index === activeCarIndex ? null : index);
  };

  const renderItem = ({ item, index }: ListRenderItemInfo<Car>) => (
    <Auto auto={item} isActive={index === activeCarIndex} onPress={() => onItemPress(index)} />
  );

  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.title}>{TEXT.auto.cars}</Text>
      </Header>
      <FlatList data={MOCK_CARS} renderItem={renderItem} contentContainerStyle={styles.contentContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: scaleFontSize(22),
    fontWeight: '400',
    paddingVertical: 10,
    color: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

