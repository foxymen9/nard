import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
};

export default function main(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}