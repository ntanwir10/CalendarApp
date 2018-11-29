import React, {Component} from 'react';
import {View} from 'react-native';

import Routes from './src/config/routes';
 
export default class App extends Component {
  render() {
    return (
      <View>
        <Routes/>
      </View>
    );
  }
}