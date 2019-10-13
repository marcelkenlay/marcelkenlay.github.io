import React from 'react';
import Resume from '../CV/CV';
import { Projects } from '../Projects/Projects';
import {Switch, Redirect, Route} from 'react-router-dom'
import './Main.css';

export const Main = () => (
  <div id="main-wrapper">
    <Switch>
        <Route path='/cv' component={Resume}/>
        <Route path='/projects' component={Projects}/>
        <Redirect to="/"/>
    </Switch>
  </div>
);