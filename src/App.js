import React, { Component } from 'react';

import './App.css';

import BarChartArea from './BarChartArea';
import BackgroundVideo from "./BackgroundVideo";
import CenterDetail from "./CenterDetail";


class App extends Component {
    constructor(props) {
        super(props);
        this.screenTimeout = 15000;
        this.timeout = setTimeout(this.reset.bind(this), this.screenTimeout);
    }

  render() {
    return (
      <div className="App">
          <BackgroundVideo rainCallback={this.rain.bind(this)}
                           sunCallback={this.sun.bind(this)}
                          />
          <BarChartArea position="left" pollutionHeight={5} floodHeight={10} aquiferHeight={2} height="733px" ref={(leftArea) => { this.leftArea = leftArea; }}/>
          <BarChartArea position="right" pollutionHeight={5} floodHeight={5} aquiferHeight={2} height="733px" ref={(rightArea) => { this.rightArea = rightArea; }}/>
          <CenterDetail  ref={(centerDetail) => { this.centerDetail = centerDetail; }}></CenterDetail>
      </div>
    );
  }

  componentDidMount() {
      document.body.addEventListener("touchstart", this.screenTouched.bind(this), false);
  }

  screenTouched() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.reset.bind(this), this.screenTimeout);
  }

  rain() {
    this.leftArea.activateArea();
    this.rightArea.activateArea();
  }

    sun() {
        this.leftArea.hideArea();
        this.rightArea.hideArea();
    }

    reset() {
        this.centerDetail.reset();
        this.sun();
    }
}

export default App;
