import React from 'react';
import DragNDrop from './dragndrop.js'

class UploadForm extends React.Component{
  render(){
    return (
      <form method="post">
        <DragNDrop />
        <div className="or__workspace">Or</div>
        <div className="button_container__workspace">
          <input type="button" className="button__workspace" value="Choose a file" />
        </div>
      </form>
    )
  }
}

export default UploadForm
