import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import HorImg from './assets/dish-horizontal.jpg';
import NavigationBar from './components/NavigationBar.js';
import HorizontalContainer from './components/HorizontalContainer';
//import Header from './components/Header'

class App extends Component {
  constructor(){
    super();
    this.state={
    
    }
  }
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div clasName="horizimage" ><img src={require("./assets/dish-horizontal.jpg")}  alt="dish horizontal" />
        </div>
        <HorizontalContainer/>
        
      </div>
    );
  }
}


export default App;
