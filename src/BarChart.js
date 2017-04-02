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
        this.delay = 500;
    }

    render() {
        let graphStyle = {
            visibility: this.state.visible?"visible":"hidden",
        };

        let childBars = [];
        for (let i=0; i<16; i++) {
            let imgFile = "img/01-EmptyBar-75x40.png";
            if (i < this.state.fillCount) {
                if (this.state.selected) {
                    imgFile = "img/03-SuperLitBar-75x40.png";
                } else {
                    imgFile = "img/02-LitBar-75x40.png";
                }
            }
            childBars.push(<img src={imgFile} className="graphImage" alt="" style={graphStyle} key={Math.random()}/>);
        }

        return (
            <div className="graph" style={graphStyle}>
                <div className="graphLabel" style={graphStyle}>{this.props.label}</div>
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
        setTimeout(this.animate.bind(this), 2000);
    }

    hideBar() {
        this.state = {
            visible: false,
            fillCount: 0,
        }
    }

    setSelected(selected) {
        this.setState ({
            visible: this.state.visible,
            fillCount: this.state.fillCount,
            selected: selected,
        });
    }
}
export default BarChart;
