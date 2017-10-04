import * as types from './actionTypes';

const initialState = {
  error: null,
  data: null,
};

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Update profile data
    /**************************/
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.UPDATE_PROFILE_SUCCESS:
    console.log('PROFILE_SUCCESS_TOKEN', action.result.data);
    if (action.result.data.success) {
        return {
          ...state,
          data: action.result.data,
        };  
      }
      else if (action.result.data.error.code === "invalid_token") {
        return {
          ...state,
          data: "token_failed",
        };
      }
    case types.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}