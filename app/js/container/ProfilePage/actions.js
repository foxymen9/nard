import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';

export function updateProfile(data, apiToken) {
  console.log('PROFILE_URL', `${api_url}/index.php?route=api/client/updateclientprofile&api_token=${apiToken}`);
  console.log('PROFILE_DATA', data);
  console.log('PROFILE_TOKEN', apiToken);
  return {
    types: [types.UPDATE_PROFILE_REQUEST, types.UPDATE_PROFILE_SUCCESS, types.UPDATE_PROFILE_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/client/updateclientprofile&api_token${apiToken}`,
          headers: {'Accept': 'application/json'},
          data: data,
      })
  };
}
