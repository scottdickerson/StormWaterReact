import React, { Component } from 'react';
import './BottomCarousel.css';

import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Swipe from 'react-swipe-component/lib/Swipe';

class BottomCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            slide: "GREEN ROOFS",
        };

        this.slides = {
          "GREEN ROOFS":  [
              "are native gardens or lawns planted over waterproof barriers and a special soil mix",
              "absorb rainfall, reducing stormwater runoff",
              "insulate buildings, lowering heating and cooling costs",
              "filter air pollution and carbon dioxide, making oxygen",
              "cool air temperature, reducing the urban heat island effect"
          ],
          "RAIN CISTERNS": [
              "are tanks used to collect rainwater from rooftops",
              "reduce runoff and store water for later use",
              "save water for watering lawns, washing cars and more",
              "can reduce demand on city water during droughts",
          ],
            "BIOSWALES": [
                "are shallow drainage channels, lined with native plants",
                "capture stormwater runoff, allowing more to soak into the ground",
                "naturally filter pollutants and silt, before runoff reaches creeks and streams",
                "improve and beautify urban landscapes",
            ],
            "PERMEABLE PAVEMENT": [
                "is made of porous concrete or paving bricks that allow water to seep through",
                "is durable enough for driveways, small parking lots and alleys",
                "recreates the filtration of natural soils and substrates",
                "reduces stormwater runoff",
                "provides a green alternative to traditionally impervious areas"
            ],
            "RAIN GARDENS": [
                "are slightly sunken planted area that absorbs rainwater",
                "directs rainfall towards garden to collect water onsite",
                "filters water as it slowly seeps into the ground",
                "helps increase aquifer levels",
            ]

        };
    }

    render() {
        let visibility = {
            visibility: this.state.visible?"visible":"hidden"
        };
        return this.state.visible ?
                (<div className="slideCarousel" id="slideCarousel">
                        <Swipe
                            nodeName="div"
                            mouseSwipe={true}
                            onSwipedLeft={this.onSwipeLeftListener.bind(this)}
                            onSwipedRight={this.onSwipeRightListener.bind(this)}
                            onSwipe={this.onSwipe.bind(this)}
                        >
                        <div className="slideTitle">{this.state.slide}</div>
                        <Carousel ref={(carousel) => {
                            this.carousel = carousel;
                        }}>
                            {
                                this.slides[this.state.slide].map(function (slide, i) {
                                    return (<CarouselItem key={"carouseldiv" + i}>
                                        {slide}
                                    </CarouselItem>);
                                })
                            }
                        </Carousel>
                        <img className="halfMoon" alt=""
                             src="img/680x680-HalfMoonOverlay-100Percent.png"
                             style={visibility}
                        ></img>
                        </Swipe>
                    </div>
                ) : null
        ;
    }

    resetCarousel() {
        if (this.carousel) {
            this.carousel.setState({"activeIndex": 0});
        }
    }

    onSwipeLeftListener() {
        console.log("swiped left");
        let previousActiveIndex = this.carousel.state.activeIndex;
        if (previousActiveIndex < this.slides[this.state.slide].length-1) {
            this.carousel.setState({
                "activeIndex": previousActiveIndex + 1,
            })
        }
    }

    onSwipe() {
        console.log("swiped");
    }

    onSwipeRightListener() {
        console.log("swiped right");
        let previousActiveIndex = this.carousel.state.activeIndex;
        if (previousActiveIndex > 0) {
            this.carousel.setState({
                "activeIndex": previousActiveIndex - 1,
            })
        }
    }

    greenRoof() {
        console.log("Green Roof clicked");
        this.setState({
           slide: "GREEN ROOFS",
            visible: true,
        });
        this.resetCarousel();
    }

    rainCisterns() {
        console.log("Rain Cisterns clicked");
        this.setState({
            slide: "RAIN CISTERNS",
            visible: true,
        });
        this.resetCarousel();
    }

    rainGardens() {
        console.log("Rain Gardens clicked");
        this.setState({
            slide: "RAIN GARDENS",
            visible: true,
        });
        this.resetCarousel();
    }

    permeablePavement() {
        console.log("Permeable Pavement clicked");
        this.setState({
            slide: "PERMEABLE PAVEMENT",
            visible: true,
        });
        this.resetCarousel();
    }

    landScaping() {
        console.log("Landscaping clicked");
        this.setState({
            slide: "BIOSWALES",
            visible: true,
        });
        this.resetCarousel();
    }

    hide() {
        this.setState({
            slide: "GREENROOFS",
            visible: false,
        })
    }

}

export default BottomCarousel
