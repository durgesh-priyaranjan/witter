// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  border: 2px solid #26c7fe;
  border-radius: 4px;
  padding-right: 10px;
  display: block;
  overflow: hidden;
  color: black;
  text-decoration: none;
  margin: 30px;
`;

class ItemCard extends Component {
  shouldComponentUpdate() {
    return false;
  }

  props: {
    itemId: string,
    username: string,
    text: string
  };

  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.itemId}`}>
        <div>
          <h3>{this.props.username}</h3>
          <p>{this.props.text}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ItemCard;
