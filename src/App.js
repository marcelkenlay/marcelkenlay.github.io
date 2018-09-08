import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import 'typeface-roboto';

class App extends Component {
    render() {
      return (
        <HashRouter>
          <div class="wrapper">
              <div class="header"><Header/></div>
              <div class="main"><Main/></div>
          </div>
        </HashRouter>
      );
    }
}
export default App;
