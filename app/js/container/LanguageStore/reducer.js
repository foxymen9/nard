import * as types from './actionTypes';

const initialState = {
  currentLanguage: 'EN',
};

export default function language(state = initialState, action = {}) {
  switch (action.type) {
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