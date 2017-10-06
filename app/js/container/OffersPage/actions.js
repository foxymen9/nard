import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';

export function getOffers(data, apiToken) {
  return {
    types: [types.GET_OFFERS_REQUEST, types.GET_OFFERS_SUCCESS, types.GET_OFFERS_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/services/getoffers&api_token=${apiToken}`,
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
