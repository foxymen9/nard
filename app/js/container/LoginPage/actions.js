import * as types from './actionTypes';
import axios from 'axios';
import {
  AsyncStorage,
} from 'react-native';

export function logIn(data) {
    // return {
    //   types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_ERROR],
    //   hasPost: 'true',
    //   promise:
    //     axios({
    //         method: 'get',
    //         url: '',
    //         headers: {'Accept': 'application/json'}
    //     })
      
    // };
    return {
      type: types.LOGIN_SUCCESS,
    };
}

export function logout() {
    //Save login status (false) to AsyncStorage after loggout
    AsyncStorage.setItem("loggin", "false");
    return {
      type: types.LOGOUT_SUCCESS,
    };
}

export function changeLanguage(lang) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: lang,
  };
}

