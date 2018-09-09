import React from 'react';
import BioStepper from './BioStepper';
import Resume from './Resume';
import Projects from './Projects';
import {Switch, Route} from 'react-router-dom'
import './Stylesheets/Main.css';

const Main = () => (
  <div id="main-wrapper">
    <Switch>

        <Route path='/bio' component={BioStepper}/>
        <Route path='/cv' component={Resume}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/' component={BioStepper}/>
    </Switch>
  </div>
)

export default Main;
