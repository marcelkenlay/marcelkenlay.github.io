import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import Header from '../Header/Header';
import LinkedInLink from '../Main/LinkedInLink';
import Main from '../Main/Main';
import 'typeface-roboto';

class App extends Component {
    render() {
      return (
        <HashRouter>
          <div class="wrapper">
              <div class="header"><Header/></div>
              <div class="main"><Main/></div>
              <div class="linkedin"><LinkedInLink/></div>
          </div>
        </HashRouter>
      );
    }
}
export default App;
