import * as types from './actionTypes';

const initialState = {
  menuSelectedID: null,
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case types.MENU_SELECTED_ID:
      return {
        ...state,
        menuSelectedID: action.data,
      };
    default:
      return state;
  }
}