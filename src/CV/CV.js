import React, {Component} from 'react';
import './CV.css';
import Paper from '@material-ui/core/Paper';
import page1 from '../CV/Files/MarcelKenlayCv-1.jpg';
import page2 from '../CV/Files/MarcelKenlayCv-2.jpg';
import Fade from '@material-ui/core/Fade';

class Cv extends Component {
  render() {
    return (
      <div id="cv-doc">
        <a href="https://docs.google.com/document/d/1z0ca1JK5xDBENg8JhuQaggCEyljsSr6w9pifMzm3oQk/edit?usp=sharing">
          Download latest version here
        </a>
        <Fade in="true"
        {...{timeout: 1000 }}>
          <Paper>
            <img src={page1} alt="Resume page 1" width="100%"/>
          </Paper>
        </Fade>
        <Fade in="true"
        {...{timeout: 1500 }}>
          <Paper>
            <img src={page2} alt="Resume page 2" width="100%"/>
          </Paper>
        </Fade>
      </div>
    );
  }
}
export default Cv;
