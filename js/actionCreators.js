// @flow

import axios from 'axios';
import { SET_SEARCH_TERM, ADD_SEARCH_DATA, ADD_SEARCH_STATUS, ADD_FIND_ONE } from './actions';

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addSearchData(searchData: Any) {
  return { type: ADD_SEARCH_DATA, payload: searchData };
}

export function addSearchStatus(status: Any) {
  return { type: ADD_SEARCH_STATUS, payload: status };
}

export function getSearchData(searchTerm: string) {
  return dispatch => {
    dispatch(
      addSearchStatus({
        loaded: false,
        error: false
      })
    );

    axios
      .get(`http://localhost:8080/tweets-search/${searchTerm}`)
      .then(response => {
        dispatch(addSearchData(response.data.statuses));
        dispatch(
          addSearchStatus({
            loaded: true,
            error: false
          })
        );
      })
      .catch(error => {
        dispatch(
          addSearchStatus({
            loaded: true,
            error: true,
            errorMsg: error
          })
        );
        console.log('Axios error: search data', error); // eslint-disable-line no-console
      });
  };
}

export function addFindOne(item: Any) {
  return { type: ADD_FIND_ONE, payload: item };
}

export function getOne(itemId: string) {
  return dispatch => {
    dispatch(
      addSearchStatus({
        loaded: false,
        error: false
      })
    );

    axios
      .get(`http://localhost:8080/tweet-specific/${itemId}`)
      .then(response => {
        dispatch(addFindOne(response.data));
        dispatch(
          addSearchStatus({
            loaded: true,
            error: false
          })
        );
      })
      .catch(error => {
        dispatch(
          addSearchStatus({
            loaded: true,
            error: true,
            errorMsg: error.response.data
          })
        );
        console.log('Axios error: search item', error); // eslint-disable-line no-console
      });
  };
}
