import React, { Component } from 'react';

import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Swipe from 'react-swipe-component/lib/Swipe';
import './SwipeableCarousel.css';

class SwipeableCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            slides: this.props.slides
        };
    }

    render() {
        let style={
            height: this.props.height,
            fontSize: this.props.fontSize,
        }
        return this.state.visible?(<Swipe
            nodeName="div"
            mouseSwipe={true}
            onSwipedLeft={this.onSwipeLeftListener.bind(this)}
            onSwipedRight={this.onSwipeRightListener.bind(this)}
            onSwipe={this.onSwipe.bind(this)}
        >
            <Carousel className="textCarousel" style={style} ref={(carousel) => {
                this.carousel = carousel;
            }}>
                {
                    this.state.slides.map(function (slide, i) {
                        return (<CarouselItem key={"carouseldiv" + i}>
                            {slide.detail}
                        </CarouselItem>);
                    })
                }
            </Carousel>
        </Swipe>):null  ;
    }

    hide() {
        this.setState ({
            visible: false,
        });
    }

    show() {
        this.setState ({
            visible: true,
            slides: this.props.slides,
        });
    }
    setCarousel(slides) {
        if (this.carousel) {
            this.carousel.setState(
                {
                    activeIndex: 0,
                });
        }
        this.setState ({
            visible: true,
            slides: slides,
        });
    }

    onSwipeLeftListener() {
        console.log("swiped left");
        let previousActiveIndex = this.carousel.state.activeIndex;
        if (previousActiveIndex < this.state.slides.length-1) {
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
}

export default SwipeableCarousel