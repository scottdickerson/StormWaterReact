import React, { Component } from 'react';
import './BottomCarousel.css';

import SwipeableCarousel from './SwipeableCarousel';

class BottomCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            slide: "GREEN ROOFS",
        };

        this.slides = {
          "GREEN ROOFS":  [
              {detail: "are native gardens or lawns planted over waterproof barriers and a special soil mix"},
              {detail: "absorb rainfall, reducing stormwater runoff"},
              {detail: "insulate buildings, lowering heating and cooling costs"},
              {detail: "filter air pollution and carbon dioxide, making oxygen"},
              {detail: "cool air temperature, reducing the urban heat island effect"}
          ],
          "RAIN CISTERNS": [
              {detail: "are tanks used to collect rainwater from rooftops"},
              {detail: "reduce runoff and store water for later use"},
              {detail:  "save water for watering lawns, washing cars and more"},
              {detail: "can reduce demand on city water during droughts"},
          ],
            "BIOSWALES": [
                {detail: "are shallow drainage channels, lined with native plants"},
                {detail: "capture stormwater runoff, allowing more to soak into the ground"},
                {detail: "naturally filter pollutants and silt, before runoff reaches creeks and streams"},
                {detail: "improve and beautify urban landscapes"},
            ],
            "PERMEABLE PAVEMENT": [
                {detail: "is made of porous concrete or paving bricks that allow water to seep through"},
                {detail:  "is durable enough for driveways, small parking lots and alleys"},
                {detail: "recreates the filtration of natural soils and substrates"},
                {detail: "reduces stormwater runoff"},
                {detail: "provides a green alternative to traditionally impervious areas"}
            ],
            "RAIN GARDENS": [
                {detail: "are slightly sunken planted areas that absorb rainwater"},
                {detail: "directs rainfall towards garden to collect water onsite"},
                {detail: "filters water as it slowly seeps into the ground"},
                {detail: "helps increase aquifer levels"},
            ]

        };
    }

    render() {
        let visibility = {
            visibility: this.state.visible?"visible":"hidden"
        };

                return (<div className="slideCarousel" id="slideCarousel">
                        <div className="slideTitle" style={visibility}>{this.state.slide}</div>
                        <SwipeableCarousel slides={this.slides[this.state.slide]}
                                           height="150px"
                                           fontSize="16pt"
                                           autoAdvance={false}
                                           ref={(carousel) => { this.carousel = carousel; }}/>
                        <img className="halfMoon" alt=""
                             src="img/680x680-HalfMoonOverlay-100Percent.png"
                             style={visibility}
                        />
                    </div>
                );
    }

    greenRoof() {
        console.log("Green Roof clicked");
        this.setState({
            visible: true,
            slide: "GREEN ROOFS",
        });
        this.carousel.setCarousel(this.slides["GREEN ROOFS"]);
    }

    rainCisterns() {
        console.log("Rain Cisterns clicked");
        this.setState({
            visible: true,
            slide: "RAIN CISTERNS",
        });
        this.carousel.setCarousel(this.slides["RAIN CISTERNS"]);
    }

    rainGardens() {
        console.log("Rain Gardens clicked");
        this.setState({
            visible: true,
            slide: "RAIN GARDENS",
        });
        this.carousel.setCarousel(this.slides["RAIN GARDENS"]);
    }

    permeablePavement() {
        console.log("Permeable Pavement clicked");
        this.setState({
            visible: true,
            slide: "PERMEABLE PAVEMENT",
        });
        this.carousel.setCarousel(this.slides["PERMEABLE PAVEMENT"]);
    }

    landScaping() {
        console.log("Landscaping clicked");
        this.setState({
            visible: true,
            slide: "BIOSWALES",
        });
        this.carousel.setCarousel(this.slides["BIOSWALES"]);
    }

    hide() {
        this.setState({
            visible: false,
        })
        this.carousel.hide();
    }

}

export default BottomCarousel
