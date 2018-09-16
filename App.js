import getTheme from './native-base-theme/components';
import React, {Component} from 'react';
import Main from './Main';
import {StyleProvider, Container, Content } from 'native-base';
export default class App extends Component {
  render() {
    return (

       <StyleProvider  style={getTheme()}>
             <Main />
       </StyleProvider>

    );
  }
}