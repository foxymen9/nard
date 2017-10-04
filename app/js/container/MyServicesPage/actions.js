import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';

export function getMyServices(data, apiToken) {
  return {
    types: [types.GET_CLIENT_SERVICES_REQUEST, types.GET_CLIENT_SERVICES_SUCCESS, types.GET_CLIENT_SERVICES_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/client/services&api_token=${apiToken}`,
          headers: {'Accept': 'application/json'},
          data: data,
      })
  };
}
