import React from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/style.css';
import Workspace from './workspace/workspace.js';

class App extends React.Component {
  render(){
    return (
    <div className="wrapper">
      <div className="base-block">
        <Workspace />
      </div>
      <footer>created by <a href="https://github.com/serje3" class="username__footer">serje3</a> - devChallenges.io</footer>
    </div>
  )
  }
}


export default App;
