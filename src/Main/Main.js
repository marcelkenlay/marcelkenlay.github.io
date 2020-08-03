import React from 'react';
import Resume from '../CV/CV';
import { Projects } from '../Projects/Projects';
import {Switch, Redirect, Route} from 'react-router-dom'
import './Main.css';
import {Project} from "../Project/Project";

export const Main = () => (
  <div id="main-wrapper">
    <Switch>
        <Route path='/cv' component={Resume}/>
        <Route exact path='/projects/:projectId' component={Project}/>
        <Route path='/projects' component={Projects}/>
        <Redirect to="/"/>
    </Switch>
  </div>
);