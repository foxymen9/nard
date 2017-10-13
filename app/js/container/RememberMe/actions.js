import * as types from './actionTypes';
import {
  AsyncStorage,
} from 'react-native';

export function rememberMe(flag) {
  return {
    type: types.REMEMBER_ME,
    data: flag,
  }
}