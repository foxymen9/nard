import * as types from './actionTypes';

const initialState = {
  error: null,
  data: null,
  loading: false,
};

export default function offers(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Update profile data
    /**************************/
    case types.GET_OFFERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case types.GET_OFFERS_SUCCESS:
      if (action.result.data.data) {
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
    case types.INITIAL_STORE:
      return {
        ...state,
        data: null,
      }
    case types.GET_OFFERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}