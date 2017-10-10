// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  props: {
    history: RouterHistory,
    searchTerm: string,
    handleSearchTermChange: Function
  };

  gotoSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!this.props.searchTerm) return;
    this.props.history.push(`/search/${this.props.searchTerm}`);
  };

  render() {
    return (
      <div className="landing">
        <h1>weet</h1>
        <form onSubmit={this.gotoSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
