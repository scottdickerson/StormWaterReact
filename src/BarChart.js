import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: false,
            fillCount: 0,
        };
        this.delay = 1000;
    }

    render() {
        let graphStyle = {
            visibility: this.state.visible?"visible":"hidden",
        };

        var childBars = []
        for (let i=0; i<16; i++) {
            var imgFile = "img/01-EmptyBar-75x40.png";
            if (i < this.state.fillCount) {
                imgFile = "img/02-LitBar-75x40.png";
            }
            childBars.push(<img src={imgFile} className="graphImage" alt=""></img>);
        }

        return (
            <div className="graph" style={graphStyle}>
                <div className="graphLabel">{this.props.label}</div>
                {childBars}
            </div>
        );
    }

    animate() {
        if (this.state.fillCount < this.props.fill) {
            this.fillBar();
            setTimeout(this.animate.bind(this), this.delay);
        }
    }

    fillBar() {
        this.setState( {
            fillCount: this.state.fillCount+1,
        });
    }

    activateBar() {
        this.state = {
            visible: true,
            fillCount: 0,
        };
        this.animate();
    }

    hideBar() {
        this.state = {
            visible: false,
            fillCount: 0,
        }
    }

}
export default BarChart;
