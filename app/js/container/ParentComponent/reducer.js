import * as types from './actionTypes';

const initialState = {
  apiToken: null,
  error: null,
  token_status: false,
};

export default function parent_state(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Get auth token
    /**************************/
    case types.TOKEN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.TOKEN_SUCCESS:
      return {
        ...state,
        token_status: true,
        apiToken: action.result.data,
      };
    case types.TOKEN_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case types.CHANGE_TOKEN_STATUS:
      return {
          token_status: action.data,
        };
    default:
      return state;
  }
}