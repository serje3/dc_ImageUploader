import React from 'react';
import UploadForm from './uploadform.js'

class Workspace extends React.Component{
  render(){
    return (
      <div className="workspace">
        <div className="title__workspace">Upload your image</div>
        <div className="description__workspace">File should be Jpeg, Png</div>
        <UploadForm />
      </div>
    )
  }
}

export default Workspace
