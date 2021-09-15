import React from 'react';
import DragNDrop from './dragndrop.js'

class UploadForm extends React.Component{

  openFileManager(){
    const fileInput = document.getElementById('load-file')
    if (fileInput) {
      fileInput.click()
    } else{
      console.error('INPUT[id="load-file"]: UNDEFINED');
    }
  }

  submitFile(){
    const submitInput = document.getElementById('submit-file')
    if (submitInput) {
      // console.log( document.getElementById('load-file').value);
      submitInput.click()
    } else{
      console.error('INPUT[id="submit-file"]: UNDEFINED');
    }
  }

  getHiddenButtons(){
    return [
      <input key={0} onChange={this.submitFile} accept='image/*' id="load-file" type="file" name='content' style={{display:'none'}}/>,
      <input key={1} id="submit-file" type="submit" style={{display:'none'}} />,
      ]

  }

  render(){



    return (
      <form method="post" encType="multipart/form-data" action="http://0.0.0.0:8000/image/">
        <DragNDrop />
        <div className="or__workspace">Or</div>
        <div className="button_container__workspace">
          <div onClick={this.openFileManager} className="button__workspace">Choose a file</div>
        </div>
        {this.getHiddenButtons()}
      </form>
    )
  }
}

export default UploadForm
