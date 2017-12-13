import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../../utils/service';
import {
  AsyncStorage,
} from 'react-native';

export function userLoginIn(data, apiToken) {
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
  AsyncStorage.removeItem('userInfo');
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

export function initialStore() {
  return {
    type: types.INITIAL_STORE,
  }
}


export function getProfileData(data, apiToken) {
    return {
      types: [types.GET_PROFILE_REQUEST, types.GET_PROFILE_SUCCESS, types.GET_PROFILE_FAILED],
      promise:
        axios({
            method: 'post',
            url: `${api_url}/index.php?route=api/login/client&api_token=${apiToken}`,
            headers: {'Accept': 'application/json'},
            data: data
        })
      
    };
}

export function registerDeviceID(apiToken, data) {
  return {
    types: [types.REGISTER_DEVICEID_REQUEST, types.REGISTER_DEVICEID_SUCCESS, types.REGISTER_DEVICEID_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/customer/subscribe&api_token=${apiToken}`,
          headers: {'Accept': 'application/json'},
          data: data
      })
    
  };
}