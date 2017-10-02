import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../../utils/service';
import {
  AsyncStorage,
} from 'react-native';

export function getApiToken() {
  const data = {
    username: 'nard-app',
    key: '6lyVobaQvHev6BCZXeEhQ6liPK3bkYElCiCDmucmu4lKQxziCKiPTJAMcr2FCM1CTB7yvTXaubzmKMljuUyS7EMwSTUZ7trjnYvcW3vqz6IKB5sdUAwUQeznvkkH7cP0avB8F8ybf0RzZmIzsYOtTmN5uBiUVzS88Nl6yRKOal2hkrHysZcJ76UNMsKc2OKPEeNIWnJjW8nuDm23FQG7t64HPxNPunC6thT114qWEBVer235sDlueUNp3cAJPwXG',
  };

  return {
    types: [types.TOKEN_REQUEST, types.TOKEN_SUCCESS, types.TOKEN_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/login`,
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          data: data,
      })
  };
}

export function userLoginIn(data, apiToken) {
  console.log('APITOKEN', apiToken);
  console.log('APIDATA', data);
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

