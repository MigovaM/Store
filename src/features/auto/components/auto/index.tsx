import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { COLORS } from '../../../../constants/colors';
import { Car } from '../../../../constants/mock';
import { TEXT } from '../../../../constants/text';
import { Services } from '../../../../types/services';
import { scaleFontSize } from '../../../../units/scaleFontSize';

type AutoPropsType = {
    auto: Car,
    isActive: boolean,
    onPress: () => void
}

export const Auto = (props: AutoPropsType) => {
  const { auto, isActive, onPress } = props;

  return (
    <View style={styles.auto}>
      <View style={styles.autoTitle}>
        <View>
          <Text style={styles.model}>{auto.model}</Text>
          <Text style={styles.stateNumber}>{auto.stateNumber}</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.icon}>
          <Icon name={isActive ? 'chevron-up' : 'chevron-down'} size={20}/>
        </TouchableOpacity>
      </View>
      {isActive && (
        <>
          <Text style={styles.subscription}>
            {TEXT.auto.subscription}: {auto.subscription.start} - {auto.subscription.end}
          </Text>
          <Text style={styles.infoTitle}>{TEXT.auto.info}:</Text>
          {
            auto.services.map(service => (
              <View key={service.type} style={styles.service}>
                <Text style={styles.serviceText}>{TEXT.services[service.type as Services]}:</Text>
                <Text style={styles.serviceText}>{service.info}</Text>
              </View>
            ),
            )
          }
        </>
      )}
    </View>
  );
};

const styles= StyleSheet.create({
  auto: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  model: {
    fontSize: scaleFontSize(22),
    color: COLORS.dark,
  },
  stateNumber: {
    fontSize: scaleFontSize(16),
    color: COLORS.wallStreet,
  },
  autoTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subscription: {
    fontSize: scaleFontSize(14),
    marginVertical: 10,
    color: COLORS.dark,
  },
  infoTitle: {
    alignSelf: 'center',
    fontSize: scaleFontSize(18),
    marginBottom: 10,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceText: {
    fontSize: scaleFontSize(14),
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
