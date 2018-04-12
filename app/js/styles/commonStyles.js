import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import ExtraDimensions from 'react-native-extra-dimensions-android';

export const { width: screenWidthIOS, height: screenHeightIOS } = Dimensions.get('window');

export const RealWidth = ExtraDimensions.get('REAL_WINDOW_WIDTH');
export const RealHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
export const softMenubarHeight = ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');
export const statusbarHeight = ExtraDimensions.get('STATUS_BAR_HEIGHT');
export const smartbarHeight = ExtraDimensions.get('SMART_BAR_HEIGHT');

function getScreenHeight() {
  if (Platform.OS === "ios") {
    return screenHeightIOS;
  }
  else {
    return RealHeight - softMenubarHeight - statusbarHeight - smartbarHeight;
  }
}

function getScreenWidth() {
  if (Platform.OS === "ios") {
    return screenWidthIOS;
  }
  else {
    return RealWidth;
  }
}

export let screenHeight = getScreenHeight();
export let screenWidth = getScreenWidth();

// export function wp (percentage) {
//   const value = (percentage * screenWidth) / 100;
//   return Math.round(value);
// }

export function getInputMargin() {
  if (screenWidth < 375)  // < iOS6
    return 55;
  else 
    return 75;
}

export function getTextareaPadding() {
  if (screenWidth < 375)  // < iOS6
    return 10;
  else 
    return 30;
}

export const statusBar = 20;
export const navBar = 80;
export const inputMargin = getInputMargin();
export const subWidth = screenWidth * 0.8;
export const textPadding = getTextareaPadding();

export const NORMAL_FONT = 'NotoKufiArabic';