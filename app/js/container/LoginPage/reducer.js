import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  signupStatus: null,
  userInfoResult: null,
  loggin: false,
  loggout: false,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* LogIn
    /**************************/
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggin: false,
        error: null,
      };
    case types.LOGIN_SUCCESS:
    console.log('QQQQQQQQQQQQQQQQQQQQQQQQQ', action.result.data);
      if (action.result.data.success) {
        return {
          ...state,
          loggin: false,
          loading: false,
          loggout: false,
          userInfoResult: action.result.data,
        };  
      }
      else if (action.result.data.error.code === "invalid_token") {
        return {
          ...state,
          loggin: false,
          loading: false,
          userInfoResult: "token_failed",
        };
      }
    case types.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loggin: false,
        error: action.error,
      };
    /**************************/
    /* Log Out
    /**************************/
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loggin: false,
        loggout: true,
      };

    case types.SAVE_LOGGIN:
    return {
      ...state,
      loggin: true,
    };
    default:
      return state;
  }
}