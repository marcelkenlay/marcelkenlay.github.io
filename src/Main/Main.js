import React from 'react';
import Resume from '../CV/CV';
import { Projects } from '../Projects/Projects';
import {Switch, Route} from 'react-router-dom'
import './Main.css';

export const Main = () => (
  <div id="main-wrapper">
    <Switch>
        <Route path='/cv' component={Resume}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/' component={Projects}/>
    </Switch>
  </div>
);