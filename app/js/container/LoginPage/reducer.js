import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  signupStatus: null,
  loginResult: null,
  loggin: false,
  currentLanguage: 'EN',
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
      return {
        ...state,
        loading: false,
        loggin: true,
        // loginResult: action.result.data,
      };
    case types.LOGIN_ERROR:
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
      };
    default:
      return state;
  }
}