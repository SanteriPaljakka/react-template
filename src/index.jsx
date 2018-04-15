/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <div>
    <h1>Moi maailma!</h1>
    <img src="http://www.saratmd.com/files/2013/10/How-Empathy-Can-Change-Your-Life-and-Our-World-C.jpg" height="300" width="300"></img>
  </div>

);

class App extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
