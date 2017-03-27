import React, { Component } from 'react';
import './BarChartArea.css';

import BarChart from './BarChart';

class BarChartArea extends Component {

    constructor(props) {
        super(props);
        this.rightAreaOffset=1950;
        this.state = {pollutionHeight: "30px",
                      aquiferHeight: "30px",
                      floodHeight: "30px",
                      visible: false,
        };
    }

    render() {
        var style;
        var leftOffset=40;
        if (this.props.position === "left") {
            style={
                left: "0px",
                visibility: this.state.visible?"visible":"hidden"
            }
        } else {
            style={
                right: "0px",
                visibility: this.state.visible?"visible":"hidden"
            }
            leftOffset = this.rightAreaOffset;
        }

        return (
            <div>
                <BarChart left={leftOffset+20+"px"}
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
        });
        this.pollutionBar.hideBar();
        this.floodBar.hideBar();
        this.aquiferBar.hideBar();
    }
}
export default BarChartArea;
