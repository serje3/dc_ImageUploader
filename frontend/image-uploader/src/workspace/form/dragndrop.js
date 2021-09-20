import React from 'react';
import image__dnd from '../../img/svg/image.svg'

class DragNDrop extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      idDropArea: 'drop-area'
    }
  }
  //
  // uploadFile(file) {
  //   const form = document.getElementById('load-file')
  //   form.value = file;
  // }
  //
  // handleFiles(files) {
  //   if (files.length!==0){
  //     this.uploadFile(files.item(0))
  //   }
  //   else {
  //     console.error('NO FILES')
  //   }
  // }
  //
  // handleDrop(e) {
  //
  //   console.log(e);
  //
  //   const dt = e.dataTransfer
  //   const files = dt.files
  //
  //   this.handleFiles(files)
  // }

  preventDefault(dropArea){
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, (ev)=>{
        ev.preventDefault()
        ev.stopPropagation()
      }, false)
    })

  }

  componentDidMount(){
    const dropArea = document.getElementById(this.state.idDropArea)
    this.preventDefault(dropArea)

    ;['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false)
    })

    ;['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false)
    })

    function highlight(e) {
      dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
      console.log(e);

      dropArea.classList.remove('highlight')
    }

  }

  render(){



    return(
      <div className="dnd__workspace">
        <div id={this.state.idDropArea} className="base__dnd">
          <img src={image__dnd} className="image__dnd" alt="mountains and clouds" draggable='false'/>
          <div className="text__dnd">Drag & Drop your image here</div>
        </div>
      </div>
    )
  }
}

export default DragNDrop
