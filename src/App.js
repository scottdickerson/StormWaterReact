import React, { Component } from 'react';

import './App.css';

import BarChartArea from './BarChartArea';
import BackgroundVideo from "./BackgroundVideo";
import CenterDetail from "./CenterDetail";
import ReactDispatcher from  'flux-react-dispatcher/dist/ReactDispatcher.min.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.screenTimeout = 180000;
        this.timeout = setTimeout(this.reset.bind(this), this.screenTimeout);
        // First dispatcher is used for the barchart selections
        window.dispatcher = new ReactDispatcher();
        // Second dispatcher is used for the video selections
        window.videoStateDispatcher= new ReactDispatcher();

        this.leftBarChartSlides =
            [
                {
                    title: "Concrete Jungle",
                    detail: "Parking lots, streets and rooftops are hard on streams. Stormwater surges over these impervious surfaces picking up pollution and sediments. Without natural areas to slow the flow, dirty stormwater gushes into our steams and waterways."
                },
                {
                    title: "Pollution Delivery System",
                    detail: "When it rains, stormwater washes over lawns and parks, carrying bacteria-filled animal poop, fertilizer and pesticides into our streams and rivers. Stormwater also picks up passengers on our roads and parking lots - transporting motor oil and heavy metals directly to waterways. "
                },
                {
                    title: "Flood Factor",
                    detail: "In the average Texas big city, more than 50% of rainfall becomes stormwater runoff. That’s way more than nature intended! In heavy rains, runoff can overwhelm our streams and man-made drainage systems, leading to devastating floods."
                },
                {
                    title: "Sucked Dry",
                    detail: "The water levels in Texas aquifers are dropping as people take out the water they need.  Impervious surfaces send more water rushing out as runoff, so much less soaks in deeply to recharge our aquifers.  "
                },
            ]

        this.rightBarChartSlides =
            [
                {
                    title: "Green City",
                    detail: "Bioswales, green roofs, rain barrels and other Green Stormwater Infrastructure can help reduce stormwater runoff, leading to less flooding and cleaner water. Additionally, they create beautiful spaces that people can enjoy."
                },
                {
                    title: "Pollution Solution",
                    detail: "By reducing unfiltered runoff, Green Stormwater Infrastructure helps reduce pollution in our streams and waterways. Plus, the plants and trees used in bioswales, rain gardens and green roofs work to naturally filter greenhouse gases from our air."
                },
                {
                    title: "Flood Factor",
                    detail: "Texas has had more than our share of dramatic floods. As more land is paved over, flooding could get even worse. Green Stormwater Infrastructure can’t fully prevent flooding, but by decreasing stormwater runoff, it can make a big difference."
                },
                {
                    title: "More to Store",
                    detail: "In Texas, many people rely on the water from underground aquifers. Green Stormwater Infrastructure can help more rainfall soak deeply into the ground, replenishing aquifer levels."
                },
            ]
    }

  render() {
    return (
      <div className="App">
          <BackgroundVideo rainCallback={this.rain.bind(this)}
                           sunCallback={this.sun.bind(this)}
                           ref={(backgroundVideo) => { this.backgroundVideo = backgroundVideo; }} />
          <BarChartArea position="left" slides={this.leftBarChartSlides} pollutionHeight={5} floodHeight={9} aquiferHeight={1} height="733px" ref={(leftArea) => { this.leftArea = leftArea; }}/>
          <BarChartArea position="right" slides={this.rightBarChartSlides} pollutionHeight={2} floodHeight={4} aquiferHeight={3} height="733px" ref={(rightArea) => { this.rightArea = rightArea; }}/>
          <CenterDetail ref={(centerDetail) => { this.centerDetail = centerDetail; }}/>
      </div>
    );
  }

  componentDidMount() {
      document.body.addEventListener("touchstart", this.screenTouched.bind(this), false);
      document.body.addEventListener("onclick", this.screenTouched.bind(this), false);
      window.dispatcher.register(this.leftArea, this.leftArea.selectBarChart);
      window.dispatcher.register(this.rightArea, this.rightArea.selectBarChart);
      window.videoStateDispatcher.register(this, this.videoChanged);
  }

  screenTouched() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.reset.bind(this), this.screenTimeout);
  }

  rain() {
        window.state="rain";
        this.centerDetail.reset();
        this.leftArea.activateArea();
        this.rightArea.activateArea();
  }

    sun() {
        window.state="sun";
        this.leftArea.hideArea();
        this.rightArea.hideArea();
    }

    reset() {
        this.centerDetail.reset();
        this.sun();
    }
    videoChanged(payload) {
        if (payload.videoState === "sun") {
            this.sun();
            this.backgroundVideo.sun();
        } else {
            this.rain();
            this.backgroundVideo.rain();
        }
    }
}

export default App;
