import React, { Component } from 'react';
import styles from './App.scss'; // create initial app styles

import Item from './components/Item';

export default class App extends Component {
  render() {
    return (
      <Item />
    );
  }
}