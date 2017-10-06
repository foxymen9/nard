import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../../utils/service';

export function getServices(apiToken) {
  let data = {
      language_id: 1
  }

  return {
    types: [types.GET_SERVICES_REQUEST, types.GET_SERVICES_SUCCESS, types.GET_SERVICES_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/services&api_token=${apiToken}`,
          headers: {'Accept': 'application/json'},
          data: {data}
      })
  };
}