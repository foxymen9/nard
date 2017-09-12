import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  signupStatus: null,
  loginResult: null,
  currentLanguage: 'EN',
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* LogIn
    /**************************/
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginResult: action.result.data,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
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