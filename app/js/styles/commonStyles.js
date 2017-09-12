import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export function wp (percentage) {
  const value = (percentage * screenWidth) / 100;
  return Math.round(value);
}

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