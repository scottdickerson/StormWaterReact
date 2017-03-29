import React, { Component } from 'react';
import './CenterButton.css';

class CenterButton extends Component {

    constructor(props) {
        super(props);
        let horizontalOffset = "425px";
        let verticalOffset = "-60px";
        switch (this.props.position) {
            case "top":
                this.style= {
                    left: horizontalOffset,
                    top: verticalOffset,
                }
                break;
            case "bottom":
                this.style= {
                    left: horizontalOffset,
                    bottom: verticalOffset,
                }
                break;
            case "left":
                this.style= {
                    left: verticalOffset,
                    bottom: horizontalOffset,
                }
                break;
            case "right":
                this.style= {
                    right: verticalOffset,
                    bottom: horizontalOffset,
                }
                break;
            default:
                this.style= {
                    left: horizontalOffset,
                    top: verticalOffset,
                }
        }
    }

    render() {

        return (
            <div className="buttonOuterCircle" style={this.style}>
                <div className="centerButton" onClick={this.props.onClick.bind(this)} >
                <div className="label">
                    {this.props.label}
                </div>
            </div>
            </div>
        );

    }

}

export default CenterButton
