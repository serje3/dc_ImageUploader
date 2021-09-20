import React from 'react';
import './css/reset.css';
import './css/style.css';
import './css/load.css';
import './css/success.css';
import PageManager from './workspace/workspace.js';
import {PageStatus} from "./utils/enums";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pageStatus: PageStatus.Base
    }
  }

  handlePageStatusChange = pageStatus =>{
    this.setState({ pageStatus })
  }

  getBaseBlockClass = () =>{
    if (this.state.pageStatus === PageStatus.Base){
      return 'base-block'
    }
    else if (this.state.pageStatus === PageStatus.Load){
      return 'load-block'
    }
    else if (this.state.pageStatus === PageStatus.Success){
      return 'success-block'
    }
  }

  render(){
    return (
    <div className="wrapper">
      <div className={this.getBaseBlockClass()}>
        <PageManager pageStatus={this.state.pageStatus} onPageStatusChanged={this.handlePageStatusChange}/>
      </div>
      <footer>created by <a href="https://github.com/serje3" className="username__footer">serje3</a> - devChallenges.io</footer>
    </div>
  )
  }
}


export default App;