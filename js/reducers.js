// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_SEARCH_DATA, ADD_SEARCH_STATUS, ADD_FIND_ONE } from './actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }

  return state;
};

const searchData = (state = { data: [] }, action) => {
  if (action.type === ADD_SEARCH_DATA) {
    return Object.assign({}, state, { data: action.payload });
  }

  return state;
};

const searchStatus = (
  state = {
    loaded: false,
    error: false,
    errorMsg: ''
  },
  action
) => {
  if (action.type === ADD_SEARCH_STATUS) {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

const itemData = (state = { text: '', username: '' }, action) => {
  if (action.type === ADD_FIND_ONE) {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

const rootReducers = combineReducers({
  searchTerm,
  searchData,
  searchStatus,
  itemData
});

export default rootReducers;
