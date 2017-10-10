// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOne, addFindOne } from './actionCreators';
import Spinner from './Spinner';
import Header from './Header';

class Details extends Component {
  componentDidMount() {
    const itemId = this.props.match.params.id;
    if (this.props.searchData.data.length) {
      const itemData = this.props.searchData.data.find(item => String(item.id) === String(itemId));
      this.props.setItemData(itemData);
    } else {
      this.props.getItemData(itemId);
    }
  }

  props: {
    match: {
      params: {
        id: string
      }
    },
    searchData?: Array<Any>,
    itemData: Any,
    searchStatus: Any,
    setItemData: Function,
    getItemData: Function
  };

  render() {
    const { text, username } = this.props.itemData;
    let spinner;
    let errorMsg;

    if (!this.props.searchStatus.loaded) {
      spinner = <Spinner className="spinner" />;
    }

    if (this.props.searchStatus.loaded && this.props.searchStatus.error) {
      errorMsg = <code>{JSON.stringify(this.props.searchStatus.errorMsg, null, 4)}</code>;
    }

    return (
      <div className="show-card">
        <Header {...this.props} />
        <section>
          {spinner}
          {errorMsg}
          <h1>{username}</h1>
          <p>{text}</p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchData: state.searchData,
  itemData: state.itemData,
  searchStatus: state.searchStatus
});

const mapDispatchToProps = (dispatch: Function) => ({
  setItemData(data: Any) {
    dispatch(
      addFindOne({
        text: data.text,
        username: data.user.name
      })
    );
  },
  getItemData(id: string) {
    dispatch(getOne(id));
  }
});

Details.defaultProps = {
  searchData: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
