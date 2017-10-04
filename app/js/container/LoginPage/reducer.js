import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  signupStatus: null,
  userInfoResult: null,
  loggin: false,
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
      if (action.result.data.success) {
        return {
          ...state,
          loggin: true,
          loading: false,
          userInfoResult: action.result.data,
        };  
      }
      else if (action.result.data.error.code === "invalid_token") {
        console.log('LOGIN_FAILED_TOKEN', action.result.data);
        return {
          ...state,
          loggin: false,
          loading: false,
          userInfoResult: null,
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