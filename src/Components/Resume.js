import React, {Component} from 'react';
import './Stylesheets/Cv.css';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import page1 from './Files/MarcelKenlayCv-1.jpg';
import page2 from './Files/MarcelKenlayCv-2.jpg';
import Fade from '@material-ui/core/Fade';

class Cv extends Component {
  render() {
    return (
      <div id="cv-doc">
        <a href="https://docs.google.com/document/d/1z0ca1JK5xDBENg8JhuQaggCEyljsSr6w9pifMzm3oQk/edit?usp=sharing">
          Download latest version here
        </a>
        <Fade in="true">
          <Paper>
            <img src={page1} width="100%"/>
          </Paper>
        </Fade>
        <Fade in="true">
          <Paper>
            <img src={page2} width="100%"/>
          </Paper>
        </Fade>
      </div>
    );
  }
}
export default Cv;