import * as types from './actionTypes';

const initialState = {
  menuSelectedID: null,
  myServicesData: null,
  error: null,
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case types.MENU_SELECTED_ID:
      return {
        ...state,
        menuSelectedID: action.data,
      };
    /**************************/
    /* Get MY Services
    /**************************/
    case types.GET_MYSERVICES_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.GET_MYSERVICES_SUCCESS:
      return {
        ...state,
        error: null,
        myServicesData: action.result.data,
      };
    case types.GET_MYSERVICES_FAILED:
      return {
        ...state,
        error: null,
        error: action.error,
      };
    default:
      return state;
  }
}