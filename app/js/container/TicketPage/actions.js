import * as types from './actionTypes';
import axios from 'axios';
import { api_url } from '../../utils/service';

export function submitTicket(apiToken, data) {
  return {
    types: [types.TICKET_SUBMIT_REQUEST, types.TICKET_SUBMIT_SUCCESS, types.TICKET_SUBMIT_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${api_url}/index.php?route=api/services/addsupportticket&api_token=${apiToken}`,
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
