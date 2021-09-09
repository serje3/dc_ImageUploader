import React from 'react';
import image__dnd from '../img/svg/image.svg'

class DragNDrop extends React.Component{
  render(){
    return(
      <div className="dnd__workspace">
        <div className="base__dnd">
          <img src={image__dnd} className="image__dnd" alt="Image Uploader" />
          <div className="text__dnd">Drag & Drop your image here</div>
        </div>
      </div>
    )
  }
}

export default DragNDrop
