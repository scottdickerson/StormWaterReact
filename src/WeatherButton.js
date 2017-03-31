import React, { Component } from 'react';
import './WeatherButton.css';

class WeatherButton extends Component {

    constructor(props) {
        super(props);
        var selected=false;
        if (this.props.className==="rain") {
            this.imgName="Weather02-MakeItRain";
        } else {
            this.imgName="Weather01-MakeItShine";
            selected=true;
        }
        this.state = {
            selected: selected
        };
    }

    render() {

        return (

            <img className={"weatherButton " + this.props.className}
                 alt={this.props.className}
                 src={"img/" + this.imgName + (this.state.selected?"-ON":"-OFF")+".png"} onClick={this.props.onClick}></img>

        );
    }

    setSelected(selected) {
        this.setState({
            selected: selected,
        })
    }

}

export default WeatherButton;