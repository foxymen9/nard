import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';
import {
  
} from 'react-native';
import Storage from 'react-native-key-value-store';

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

export function changeTokenStatus(state) {
  return {
    type: types.CHANGE_TOKEN_STATUS,
    data: state,
  };
}
