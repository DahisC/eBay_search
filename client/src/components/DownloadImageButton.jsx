import axios from 'axios';

import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

class DownloadImageButton extends React.Component {
  state = { isLoading: false };

  handleDownloadImage = () => {
    this.setState({
      isLoading: true,
    });
    const downloadImage = (itemArray) => {
      console.log(`Res Length: ${itemArray.length}`);
      const zip = JSZip();
      itemArray.forEach((item) => {
        zip.file(`${item.itemId}.jpg`, item.base64, { base64: true });
      });
      zip.generateAsync({ type: 'blob' }).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, 'Images.zip');
      });
    };

    axios
      .post('http://localhost:9001/api/convertImage', {
        itemArray: this.props.itemArray,
      })
      .then((res) => {
        downloadImage(res.data);
        this.setState({
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Button
          icon
          labelPosition="left"
          inverted
          color="olive"
          size="large"
          onClick={this.handleDownloadImage}
          loading={this.state.isLoading}
          disabled={this.state.isLoading}
        >
          <Icon name="file image outline" />
          Download Image
        </Button>
      </React.Fragment>
    );
  }
}

export default DownloadImageButton;
