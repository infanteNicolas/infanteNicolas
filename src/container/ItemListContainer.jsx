import React, { Component } from 'react'
import Item from './Item';

export default class ItemListContainer extends Component {

    render() {

    const text = "Welcome";

    return (
      <div>
          <Item saludo={text}></Item>
      </div>
    )
  }
}
