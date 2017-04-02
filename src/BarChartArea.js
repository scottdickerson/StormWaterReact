import React, { Component } from 'react';
import './BarChartArea.css';

import BarChart from './BarChart';
import SwipeableCarousel from './SwipeableCarousel';

class BarChartArea extends Component {

    constructor(props) {
        super(props);
        this.rightAreaOffset=1448;
        this.state = {
                      visible: false,
                      height: "0px",

        };
    }

    render() {
        var style;
        var visibility=this.state.visible?"visible":"hidden";
        if (this.props.position === "left") {
            style={
                left: "70px",
                visibility: visibility,
                height: this.state.height,
                transition: this.state.transition,
            };
        } else {
            style={
                right: "70px",
                visibility: visibility,
                height: this.state.height,
                transition: this.state.transition,
            };
        }


        return (
            <div>
            <div className="graphBackground" style={style}/>
            <div className="graphContainer" style={style}>
                <div className="topGraphArea" style={{visibility: visibility, transition: this.state.transition}}>
                    <BarChart label="POLLUTION PROBLEMS"
                              fill={this.props.pollutionHeight}
                              ref={(pollutionBar) => { this.pollutionBar = pollutionBar; }}/>
                    <BarChart label="STORMWATER RUNOFF"
                              fill={this.props.floodHeight}
                              ref={(floodBar) => { this.floodBar = floodBar; }}/>
                    <BarChart label="AQUIFER RECHARGE"
                              fill={this.props.aquiferHeight}
                              ref={(aquiferBar) => { this.aquiferBar = aquiferBar; }}/>
                </div>
                <div className="graphCarousel" style={{visibility: visibility, transition: this.state.transition}}>
                    <SwipeableCarousel slides={this.props.slides} visible={true} fontSize="12pt" height="225px" autoAdvance={false}
                                       onSelect={this.carouselSelected.bind(this)}
                                       ref={(carousel) => { this.carousel = carousel; }}/>
                </div>
            </div>
            </div>
        );

    }

    activateArea() {
        this.setState({
            visible: true,
            height: this.props.height,
            transition: "height 2s",
        });

        this.pollutionBar.activateBar();
        this.floodBar.activateBar();
        this.aquiferBar.activateBar();
    }

    hideArea() {
        this.setState( {
            visible: false,
            height: "0px",
            transition: "height 0s",
        });
        this.carousel.selectSlide(0,null);
        this.pollutionBar.hideBar();
        this.floodBar.hideBar();
        this.aquiferBar.hideBar();
    }

    carouselSelected(selectedIndex, e) {
        window.dispatcher.dispatch(
            {
                chartSelected:selectedIndex,
                direction: e.direction,
            }
        );
    }

    selectBarChart(payload) {
        let selectedIndex = payload.chartSelected;
        let direction = payload.direction;

        this.carousel.selectSlide(selectedIndex, direction);
        switch(selectedIndex) {
            case 0:
                this.pollutionBar.setSelected(false);
                this.floodBar.setSelected(false);
                this.aquiferBar.setSelected(false);
                break;
            case 1:
                this.pollutionBar.setSelected(true);
                this.floodBar.setSelected(false);
                this.aquiferBar.setSelected(false);
                break;
            case 2:
                this.pollutionBar.setSelected(false);
                this.floodBar.setSelected(true);
                this.aquiferBar.setSelected(false);
                break;
            case 3:
                this.pollutionBar.setSelected(false);
                this.floodBar.setSelected(false);
                this.aquiferBar.setSelected(true);
                break;
            default:
                this.pollutionBar.setSelected(false);
                this.floodBar.setSelected(false);
                this.aquiferBar.setSelected(false);
                break;
        }

    }
}
export default BarChartArea;
