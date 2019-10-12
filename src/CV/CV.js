import React, {Component} from 'react';
import page1 from './Files/page1.jpg';
import page2 from './Files/page2.jpg';
import Fade from '@material-ui/core/Fade';
import {Button} from "antd";

class Cv extends Component {
  render() {
    return (
      <div style={{
          padding: '0 3vw',
          width: '800px',
          maxWidth: '100%',
          margin: 'auto',
          alignItems: 'center',
          background: 'rgba(220, 220, 220, 0.7)'}}>
        <Button
            href="https://drive.google.com/file/d/1Gu-vlSnRvdd5AM849EApU04dYQ0WmLW9/view?usp=sharing"
            type="primary"
            size="large"
            shape="round"
            icon="file-pdf"
            style={{margin:'6px'}}
        >
          View CV as a PDF
        </Button>
        <Fade in="true"
        {...{timeout: 1000 }}>
          <div style={{maxWidth: '800px', margin:"auto", paddingBottom:'12px'}}>
            <img src={page1} alt="Resume page 1" width="100%"/>
          </div>
        </Fade>
        <Fade in="true"
        {...{timeout: 2000 }}>
          <div style={{maxWidth: '800px', margin:"auto", paddingBottom:'12px'}}>
            <img src={page2} alt="Resume page 2" width="100%"/>
          </div>
        </Fade>
      </div>
    );
  }
}
export default Cv;
