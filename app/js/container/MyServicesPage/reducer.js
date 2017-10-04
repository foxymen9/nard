import * as types from './actionTypes';

const initialState = {
  error: null,
  data: null,
  loading: false,
};

export default function my_ervices(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Update profile data
    /**************************/
    case types.GET_CLIENT_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_CLIENT_SERVICES_SUCCESS:
    if (action.result.data.success) {
        return {
          ...state,
          loading: false,
          data: action.result.data,
        };  
      }
      else if (action.result.data.error.code === "invalid_token") {
        return {
          ...state,
          loading: false,
          data: "token_failed",
        };
      }
    case types.GET_CLIENT_SERVICES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}