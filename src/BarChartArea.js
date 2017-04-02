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
        this.slides =
            [
                {
                    title: "Concrete Jungle",
                    detail: "Parking lots, streets and rooftops are hard on streams. Stormwater surges over these impervious surfaces picking up pollution and sediments. Without natural areasto slow the flow, dirty stormwater gushes into our steams and waterways."
                },
                {
                    title: "Flood Factor",
                    detail: "In the average Texas big city, more than 50% of rainfall becomes stormwater runoff. That’s way more than nature intended! In heavy rains, runoff can overwhelm our streams and man-made drainage systems, leading to devastating floods."
                },
                {
                    title: "Sucked Dry",
                    detail: "The water levels in Texas aquifers are dropping as people take out the water they need.  Impervious surfaces send more water rushing out as runoff, so much less soaks in deeply to recharge our aquifers.  "
                },
                {
                    title: "Pollution Delivery System",
                    detail: "When it rains, stormwater washes over lawns and parks, carrying bacteria-filled animal poop, fertilizer and pesticides into our streams and rivers. Stormwater also picks up passengers on our roads and parking lots - transporting motor oil and heavy metals directly to waterways. "
                }
            ]
    }

    render() {
        var style;
        var leftOffset=70;
        var visibility=this.state.visible?"visible":"hidden";
        var transition="height 2s";
        if (this.props.position === "left") {
            style={
                left: "70px",
                visibility: visibility,
                height: this.state.height,
                transition: transition,
            }
        } else {
            style={
                right: "70px",
                visibility: visibility,
                height: this.state.height,
                transition: transition,
            }
            leftOffset = this.rightAreaOffset;
        }

        return (
            <div>
            <div className="graphBackground" style={style}/>
            <div className="graphContainer" style={style}>
                <div className="topGraphArea">
                    <BarChart left={leftOffset+"px"}
                              label="POLLUTION PROBLEMS"
                              fill={this.props.pollutionHeight}
                              ref={(pollutionBar) => { this.pollutionBar = pollutionBar; }}/>
                    <BarChart left={leftOffset+200+"px"}
                              label="AQUIFER RECHARGE"
                              fill={this.props.aquiferHeight}
                              ref={(aquiferBar) => { this.aquiferBar = aquiferBar; }}/>
                    <BarChart left={leftOffset+380+"px"}
                              label="STORMWATER RUNOFF"
                              fill={this.props.floodHeight}
                              ref={(floodBar) => { this.floodBar = floodBar; }}/>
                </div>
                <div className="graphCarousel">
                    <SwipeableCarousel slides={this.slides} visible={true} fontSize="13pt" height="200px"/>
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
        this.pollutionBar.hideBar();
        this.floodBar.hideBar();
        this.aquiferBar.hideBar();
    }
}
export default BarChartArea;
