import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    render() {
        let graphStyle = {
            left: this.props.left,
            right: this.props.right,
            height: this.props.height,
            visibility: this.state.visible?"visible":"hidden"
        };

        let iconStyle = {
            "backgroundImage": "url("+this.props.iconSrc+")",
        };

        return (
            <div className="graph1 graph" style={graphStyle}>
                <div className="graphIcon" style={iconStyle}></div>
                <div className="graphLabel">{this.props.label}</div>
            </div>
        );
    }

    activateBar() {
        this.state = {
            visible: true,
        }
    }

    hideBar() {
        this.state = {
            visible: false,
        }
    }

}
export default BarChart;
