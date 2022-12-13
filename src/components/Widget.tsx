import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../constants/colors';
import { Service } from '../constants/mock';
import { TEXT } from '../constants/text';
import { serviceIcons, Services } from '../types/services';
import { formatByThousands } from '../units/formatByThousands';
import { scaleFontSize } from '../units/scaleFontSize';

import { GradientView } from './GradientView';
import { Indicator } from './Indicator';

type WidgetPropsType = {
    containerStyle: ViewStyle,
    widget: Service,
    colors?: string[]
}

const defaultGradient = [COLORS.white, COLORS.white];

export const Widget = (props: WidgetPropsType) => {
  const { containerStyle, widget, colors } = props;

  const isFuel = !!widget.fuel;
  const isWarning = !!widget.warning;
  const isMainWidget = !!colors;

  const fuelPercentage = widget.fuel ?  100 - widget.fuel?.fuelLack * 100 / widget.fuel?.totalFuel : 0;

  return (
    <View style={[containerStyle, styles.container]}>
      <GradientView colors={colors ?? defaultGradient} style={styles.gradient}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{TEXT.services[widget.type as Services]}</Text>
            {isFuel && (
              <Text style={styles.info}>{widget.info}</Text>
            )}
          </View>
          {isWarning && (
            <View style={styles.warningContainer}>
              <Icon name={'information'} color={COLORS.embarrassed} />
              <Text style={styles.warning}>{widget.warning}</Text>
            </View>
          )}
          {isFuel ? (
            <View style={!isWarning && styles.fuelContainer}>
              <Indicator percentage={fuelPercentage} />
              <Text style={styles.fuelLack}>+ {widget.fuel?.fuelLack} {widget.fuel?.unit}</Text>
            </View>
          ) : (
            <Text style={styles.info}>{widget.info}</Text>
          )}
        </View>
        <View>
          <Text style={styles.sum}>{formatByThousands(widget.sum)} ₽</Text>
          <Text style={styles.total}>{widget.total}</Text>
        </View>
        <View style={isMainWidget ? styles.mainIconContainer : styles.commonIconContainer}>
          <Icon
            size={isMainWidget ? 22 : 26}
            name={serviceIcons[widget.type as Services]}
            color={isMainWidget ? COLORS.approachingDusk : COLORS.cloudBreak}
          />
        </View>
      </GradientView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: scaleFontSize(16),
    fontWeight: '600',
  },
  info: {
    fontSize: scaleFontSize(14),
    color: COLORS.wallStreet,
  },
  warningContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  warning: {
    fontSize: scaleFontSize(12),
    marginLeft: 5,
    color: COLORS.dark,
  },
  fuelContainer: {
    marginTop: 23,
  },
  fuelLack: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'right',
    color: COLORS.linkWater,
  },
  sum: {
    fontSize: scaleFontSize(18),
    fontWeight: '600',
    color: COLORS.dark,
  },
  total: {
    fontSize: scaleFontSize(14),
    color: COLORS.wallStreet,
  },
  mainIconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  commonIconContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});
