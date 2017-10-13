import * as types from './actionTypes';

const initialState = {
  data: false,
};

export default function rememberMe(state = initialState, action = {}) {
  switch (action.type) {
    case types.REMEMBER_ME:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}