import * as types from './actionTypes';

const initialState = {
  apiToken: null,
  error: null,
  token_status: false,
  loadingToken: false,
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
        token_status: false,
        loadingToken: true,
        apiToken: null,
      };
    case types.TOKEN_SUCCESS:
      return {
        ...state,
        token_status: true,
        loadingToken: false,
        apiToken: action.result.data,
      };
    case types.TOKEN_FAILED:
      return {
        ...state,
        error: action.error,
        loadingToken: false,
        token_status: false,
        apiToken: null,
      };
    case types.CHANGE_TOKEN_STATUS:
      return {
          ...state,
          loadingToken: false,
          token_status: action.data,
        };
    default:
      return state;
  }
}