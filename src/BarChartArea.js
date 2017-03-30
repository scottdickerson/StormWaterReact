import React, { Component } from 'react';
import './BarChartArea.css';

import BarChart from './BarChart';

class BarChartArea extends Component {

    constructor(props) {
        super(props);
        this.rightAreaOffset=1448;
        this.state = {pollutionHeight: "30px",
                      aquiferHeight: "30px",
                      floodHeight: "30px",
                      visible: false,
                      height: "0px",
        };
    }

    render() {
        var style;
        var leftOffset=70;
        var visibility=this.state.visible?"visible":"hidden";
        var transition="height 2s";
        if (this.props.position === "left") {
            style={
                left: "0px",
                visibility: visibility,
                height: this.state.height,
                transition: transition,
            }
        } else {
            style={
                right: "0px",
                visibility: visibility,
                height: this.state.height,
                transition: transition,
            }
            leftOffset = this.rightAreaOffset;
        }

        return (
            <div>
                <BarChart left={leftOffset+"px"}
                          label="Pollution"
                          iconSrc="img/pollution.png"
                          height={this.state.pollutionHeight}
                          ref={(pollutionBar) => { this.pollutionBar = pollutionBar; }}></BarChart>
                <BarChart left={leftOffset+200+"px"}
                          label="Aquifer Recharge"
                          iconSrc="img/aquifer.png"
                          height={this.state.aquiferHeight}
                          ref={(aquiferBar) => { this.aquiferBar = aquiferBar; }}></BarChart>
                <BarChart left={leftOffset+380+"px"}
                          label="Flood Factor"
                          iconSrc="img/flood.png"
                          height={this.state.floodHeight}
                          ref={(floodBar) => { this.floodBar = floodBar; }}></BarChart>
                <div className="graphContainer" style={style}>
                </div>
            </div>
        );

    }

    activateArea() {
        this.setState({
            pollutionHeight: this.props.pollutionHeight,
            aquiferHeight: this.props.aquiferHeight,
            floodHeight: this.props.floodHeight,
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
            pollutionHeight: "30px",
            aquiferHeight: "30px",
            floodHeight: "30px",
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
