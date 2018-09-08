import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import MarcelKenlayCv from './MarcelKenlayCv.pdf';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

class Cv extends Component {
  state = {
    numPages: 2,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={MarcelKenlayCv}
          onLoadSuccess={this.onDocumentLoad}>
              <Page width="100%" pageNumber={1} />
              <Page width="100%" pageNumber={2} />
        </Document>
      </div>
    );
  }
}

export default Cv;
