import React, { Component } from 'react';
import './CenterButton.css';

class CenterButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };

        switch (this.props.position) {
            case "top":
                this.imgNumber = "01";
                break;
            case "right":
                this.imgNumber = "03";
                break;
            case "bottom-right":
                this.imgNumber = "05";
                break;
            case "bottom-left":
                this.imgNumber = "04";
                break;
            case "left":
                this.imgNumber = "02";
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <img src={"img/"+this.imgNumber+"-"+this.props.src+(this.state.selected?"-ON":"-OFF")+".png"}
                 alt={this.props.label}
                 style={this.style}
                 className={"buttonImage "+ this.props.position}
                 onClick={this.props.onClick.bind(this)}></img>
        );

    }

    setSelected(selected) {
        this.setState({selected: selected});
    }

}

export default CenterButton
