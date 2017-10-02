import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  signupStatus: null,
  userInfoResult: null,
  loggin: false,
  apiToken: null,
  currentLanguage: 'EN',
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Get auth token
    /**************************/
    case types.TOKEN_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case types.TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        apiToken: action.result.data,
      };
    case types.TOKEN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
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
      return {
        ...state,
        loading: false,
        loggin: true,
        userInfoResult: action.result.data,
      };
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
    /**************************/
    /* Change Language(EN, AR)
    /**************************/
    case types.CHANGE_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.data,
        loggin: false,
      };
    default:
      return state;
  }
}