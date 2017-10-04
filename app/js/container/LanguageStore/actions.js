import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';
import {
  
} from 'react-native';
import Storage from 'react-native-key-value-store';

export function changeLanguage(lang) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: lang,
  };
}
