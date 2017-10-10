// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm, getSearchData } from './actionCreators';

class Header extends Component {
  componentDidMount() {
    if (this.props.match.params.searchTerm) {
      this.props.handleSearchTermFromRoute(this.props.match.params.searchTerm);
    }
  }

  props: {
    showSearch?: boolean,
    handleSearchTermChange: Function,
    handleSearchTermFromRoute: Function,
    searchTerm: string,
    match: {
      params: {
        searchTerm: string
      }
    }
  };

  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = (
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchTerm}
          onChange={this.props.handleSearchTermChange}
        />
      );
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to="/search">Back</Link>
        </h2>
      );
    }
    return (
      <header>
        <h1>
          <Link to="/">weet</Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
    dispatch(getSearchData(event.target.value));
  },
  handleSearchTermFromRoute(value) {
    dispatch(setSearchTerm(value));
    dispatch(getSearchData(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
