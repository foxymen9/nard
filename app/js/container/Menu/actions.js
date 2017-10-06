import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../../utils/service';

export function saveMenuSelectedID(id) {
  return {
    type: types.MENU_SELECTED_ID,
    data: id,
  };
}

