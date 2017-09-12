import * as types from './actionTypes';
import axios from 'axios';

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
      type: types.LOGIN_REQUEST,
    };
}

export function changeLanguage(lang) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: lang,
  };
}

