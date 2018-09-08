import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import MarcelKenlayCv from './MarcelKenlayCv.pdf';

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
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default Cv;
