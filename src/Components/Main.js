import React from 'react';
import Bio from './Bio';
import Cv from './Cv';
import Projects from './Projects';
import {Switch, Route} from 'react-router-dom'
import './Stylesheets/Main.css';

const Main = () => (
  <div id="main-wrapper">
    <Switch>
        <Route path='/bio' component={Bio}/>
        <Route path='/cv' component={Cv}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/' component={Bio}/>
    </Switch>
  </div>
)

export default Main;
