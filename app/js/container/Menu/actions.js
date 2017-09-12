import * as types from './actionTypes';
import axios from 'axios';

export function saveMenuSelectedID(id) {
  return {
    type: types.MENU_SELECTED_ID,
    data: id,
  };
}
