import React from 'react';
import image__dnd from '../../img/svg/image.svg'

class DragNDrop extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      idDropArea: '#drop-area',
    }
  }

  handleEnterEvent = event => {
    event.target.classList.add('hovered')
  }

  handleLeaveEvent = event => {
    event.target.classList.remove('hovered')
  }

  handleDropEvent = event => {
    event.preventDefault();
    event.target.classList.remove('hovered')

    const inputElem = document.getElementById('load-file')
    inputElem.files =event.dataTransfer.files
    const changeEvent = new Event('change', { bubbles: true, cancelable: false })
    inputElem.dispatchEvent(changeEvent)
  }



  componentDidMount(){
    this.setState({dropTarget: document.querySelector(this.state.idDropArea)})

    const bindDragCallback = (target, callback) => {
      if (target.isEqualNode(this.state.dropTarget)){
        callback();
      }
    }

    window.addEventListener("dragover",function(e){
      e.preventDefault();

    },false);

    window.addEventListener("dragenter", (e)=>
        bindDragCallback(e.target, this.handleEnterEvent.bind(this,e))
    );

    window.addEventListener("dragleave", (e)=>
        bindDragCallback(e.target, this.handleLeaveEvent.bind(this,e))
    );

    window.addEventListener("drop",(e) =>
        bindDragCallback(e.target, this.handleDropEvent.bind(this,e))
    ,false);

  }

  render(){



    return(
      <div className="dnd__workspace">
        <div className="base__dnd">
          <img src={image__dnd} className="image__dnd" alt="mountains and clouds" draggable='false'/>
          <div className="text__dnd">Drag & Drop your image here</div>
          <div id={this.state.idDropArea.slice(1)} className='dropper__dnd'/>
        </div>
      </div>
    )
  }
}

export default DragNDrop
