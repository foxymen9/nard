import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';

export function addNewProject(apiToken, data) {
  return {
    types: [types.ADD_PROJECT_REQUEST, types.ADD_PROJECT_SUCCESS, types.ADD_PROJECT_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/services/addproject&api_token=${apiToken}`,
          headers: {'Accept': 'application/json'},
          data: data,
      })
  };
}

export function initialStore() {
  return {
    type: types.INITIAL_STORE,
  }
}
