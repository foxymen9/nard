import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  signupStatus: null,
  userInfoResult: null,
  loggin: false,
  loggout: false,
  deviceInfoResult: null,
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
        userInfoResult: null,
      };
    case types.LOGIN_SUCCESS:
      if (action.result.data.success || action.result.data.error.login) {
        return {
          ...state,
          loggin: false,
          loading: false,
          loggout: false,
          userInfoResult: action.result.data,
        };  
      }
      else if (action.result.data.error) {
        if (action.result.data.error.code === "invalid_token") {
          return {
            ...state,
            loggin: false,
            loading: false,
            userInfoResult: "token_failed",
          };
        }
        else {
          return {
            ...state,
            loggin: false,
            loading: false,
            loggout: false,
            userInfoResult: action.result.data,
          }; 
        }
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
    case types.INITIAL_STORE:
      return {
        ...state,
        userInfoResult: null,
      }
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
      }
    case types.GET_PROFILE_SUCCESS:
      return {
          ...state,
          userInfoResult: action.result.data,
        };
    case types.GET_PROFILE_FAILED:
      return {
        ...state,
      }
    case types.REGISTER_DEVICEID_REQUEST:
      return {
        ...state,
      }
    case types.REGISTER_DEVICEID_SUCCESS:
    console.log('DEVICE_RESULT_DATA', action.result.data);
      return {
          ...state,
          deviceInfoResult: action.result.data,
        };
    case types.REGISTER_DEVICEID_FAILED:
      return {
        ...state,
      }
    default:
      return state;
  }
}