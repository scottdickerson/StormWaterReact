import React, { Component } from 'react';
import './CenterButton.css';

class CenterButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
        let horizontalOffset = "275px";
        let verticalOffset = "-25px";
        switch (this.props.position) {
            case "top":
                this.style= {
                    left: horizontalOffset,
                    top: verticalOffset,
                };
                this.imgNumber = "01";
                break;
            case "right":
                this.style= {
                    right: verticalOffset,
                    bottom: horizontalOffset,
                };
                this.imgNumber = "03";
                break;
            case "bottom-right":
                this.style= {
                    left: horizontalOffset,
                    bottom: verticalOffset,
                };
                this.imgNumber = "05";
                break;
            case "bottom-left":
                this.style= {
                    right: verticalOffset,
                    bottom: horizontalOffset,
                };
                this.imgNumber = "04";
                break;
            case "left":
                this.style= {
                    left: verticalOffset,
                    bottom: horizontalOffset,
                };
                this.imgNumber = "02";
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
        <img src={"img/"+this.imgNumber+"-"+this.props.src+(this.state.selected?"-ON":"-OFF")+".png"}
             alt={this.props.label}
             style={this.style}
             className="buttonImage"
             onClick={this.props.onClick.bind(this)}></img>
            /*<div className="buttonOuterCircle" style={this.style}>
                <div className="centerButton" onClick={this.props.onClick.bind(this)} >
                <div className="label">
                    {this.props.label}
                </div>
            </div>
            </div>*/
        );

    }

    setSelected(selected) {
        this.setState({selected: selected});
    }

}

export default CenterButton
