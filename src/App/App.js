import React, {Component} from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { Header } from '../Header';
import { LinkedInLink } from '../Footer';
import { Main } from '../Main';

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
