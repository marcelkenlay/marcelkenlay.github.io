import React, {Component} from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Header from '../Header/Header';
import LinkedInLink from '../Main/LinkedInLink';
import Main from '../Main/Main';
import 'typeface-roboto';

class App extends Component {
    render() {
      return (
        <Router>
          <div class="wrapper">
              <div class="header"><Header/></div>
              <div class="main"><Main/></div>
              <div class="linkedin"><LinkedInLink/></div>
          </div>
        </Router>
      );
    }
}
export default App;
