import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../../utils/service';

export function saveMenuSelectedID(id) {
  return {
    type: types.MENU_SELECTED_ID,
    data: id,
  };
}


export function getMyServices(api_token, client_id) {
    return {
      types: [types.GET_MYSERVICES_REQUEST, types.GET_MYSERVICES_SUCCESS, types.GET_MYSERVICES_FAILED],
      promise:
        axios({
            method: 'post',
            url: `${api_url}/index.php?route=api/client/services&api_token=${api_token}`,
            headers: {'Accept': 'application/json'},
            data: {
              "client_id": client_id
            }
        })
      
    };
}
