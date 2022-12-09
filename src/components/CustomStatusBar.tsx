import React from 'react';
import { SafeAreaView, StatusBar, StatusBarStyle, StyleSheet, View, ViewStyle } from 'react-native';

type CustomStatusBarProps = {
    backgroundStyle: ViewStyle,
    barStyle: StatusBarStyle,
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const CustomStatusBar = ({ backgroundStyle, barStyle }: CustomStatusBarProps) => (
  <View style={[styles.container, backgroundStyle]}>
    <SafeAreaView>
      <StatusBar
        barStyle={barStyle as StatusBarStyle}
        translucent
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: STATUSBAR_HEIGHT,
  },
});

export default CustomStatusBar;
