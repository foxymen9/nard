import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../../utils/service';
import {
  AsyncStorage,
} from 'react-native';

export function userLoginIn(data, apiToken) {
  // console.log('LOGIN_DATA', data);
  console.log('LOGIN_apiToken_1', apiToken);
    return {
      types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_FAILED],
      promise:
        axios({
            method: 'post',
            url: `${api_url}/index.php?route=api/login/client&api_token=${apiToken}`,
            headers: {'Accept': 'application/json'},
            data: data
        })
      
    };
}

export function logout() {
    //Save login status (false) to AsyncStorage after loggout
    return {
      type: types.LOGOUT_SUCCESS,
    };
}

export function saveLoggin() {
    //Save login status (false) to AsyncStorage after loggout
    return {
      type: types.SAVE_LOGGIN,
    };
}
