// @flow

import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Spinner from './Spinner';
import Header from './Header';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  searchItems: Array<Any>,
  searchStatus: {
    loaded: boolean,
    error: boolean,
    errorMsg: string
  }
}) => {
  let spinner;
  let errorMsg;

  if (!props.searchStatus.loaded) {
    spinner = <Spinner className="spinner" />;
  }

  if (props.searchStatus.loaded && props.searchStatus.error) {
    errorMsg = <code>{JSON.stringify(props.searchStatus.errorMsg, null, 4)}</code>;
  }

  return (
    <div className="search details">
      <Header showSearch {...props} />
      <section>
        {spinner}
        {errorMsg}
      </section>
      {props.searchItems.data.map(item => (
        <Card key={item.id} itemId={item.id} username={item.user.name} text={item.text} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchItems: state.searchData,
  searchStatus: state.searchStatus
});

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
