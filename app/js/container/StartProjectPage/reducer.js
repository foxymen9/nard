import * as types from './actionTypes';

const initialState = {
  error: null,
  data: null,
  loading: false,
};

export default function project(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Update profile data
    /**************************/
    case types.ADD_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_PROJECT_SUCCESS:
      if (action.result.data && action.result.data.error.code !== "invalid_token") {
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
    case types.ADD_PROJECT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.INITIAL_STORE:
      return {
        ...state,
        data: null,
      }
    default:
      return state;
  }
}