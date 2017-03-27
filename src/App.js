import React, { Component } from 'react';

import './App.css';

import BarChartArea from './BarChartArea';
import BackgroundVideo from "./BackgroundVideo";
import CenterDetail from "./CenterDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BackgroundVideo startVideo="videos/sunVideo.mp4" rainCallback={this.rain.bind(this)} sunCallback={this.sun.bind(this)}/>
          <BarChartArea position="left" pollutionHeight="300px" aquiferHeight="80px" floodHeight="200px" ref={(leftArea) => { this.leftArea = leftArea; }}/>
          <BarChartArea position="right" pollutionHeight="100px" aquiferHeight="200px" floodHeight="50px" ref={(rightArea) => { this.rightArea = rightArea; }}/>
          <CenterDetail></CenterDetail>
      </div>
    );
  }

  rain() {
    this.leftArea.activateArea();
    this.rightArea.activateArea();
  }

    sun() {
        this.leftArea.hideArea();
        this.rightArea.hideArea();
    }
}

export default App;
