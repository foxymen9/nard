import * as types from './actionTypes';

const initialState = {
  error: null,
  data: null,
  loading: false,
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
        loading: true,
      };
    case types.UPDATE_PROFILE_SUCCESS:
      console.log('PROFILE_SUCCESS_DATA', action.result.data);
      if (action.result.data.success) {
        return {
          ...state,
          loading: false,
          data: action.result.data,
        };  
      }
      else if (action.result.data.error) {
        if (action.result.data.error.code === "invalid_token") {
          return {
            ...state,
            loading: false,
            data: "token_failed",
          };
        }
        else {
          return {
            ...state,
            loading: false,
            data: action.result.data,
          }; 
        }
      }
    case types.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
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