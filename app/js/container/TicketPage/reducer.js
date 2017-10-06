import * as types from './actionTypes';

const initialState = {
  error: null,
  data: null,
  loading: false,
};

export default function ticket(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Update profile data
    /**************************/
    case types.TICKET_SUBMIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.TICKET_SUBMIT_SUCCESS:
    console.log('PPPP', action);
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
    case types.TICKET_SUBMIT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}