import React from 'react';
import DragNDrop from './dragndrop.js'
import $ from 'jquery'

class UploadForm extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.props = props
  // }


  openFileManager(){
    const fileInput = document.getElementById('load-file')
    if (fileInput) {
      fileInput.click()
    } else{
      console.error('INPUT[id="load-file"]: UNDEFINED');
    }
  }

  submitFile(value){
    const fileData = $('#load-file').prop('files')[0];

    const formData = new FormData();

    formData.append('url', fileData);

    this.props.handleAjaxRequest(formData)

  }

  getHiddenInputs(){
    return (
      <input key={0} onChange={this.submitFile.bind(this)} accept='image/jpeg,image/png' id="load-file" type="file" name='url' style={{display:'none'}}/>)
  }

  render(){



    return (
      <form method="post" encType="multipart/form-data">
        <DragNDrop />
        <div className="or__workspace">Or</div>
        <div className="button_container__workspace">
          <div onClick={this.openFileManager} className="button__workspace">Choose a file</div>
        </div>
        {this.getHiddenInputs()}
      </form>
    )
  }
}

export default UploadForm
