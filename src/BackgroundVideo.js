import React, { Component } from 'react';
import './BackgroundVideo.css';
import WeatherButton from './WeatherButton'

class BackgroundVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video: "videos/sunVideo.mp4"
        };
    }

    render() {

        return (
            <div className="outer-container">
                <img className="title" alt="Rainfall Revolution" src="img/1077x259-Title-RainfallRevolution-01.png"></img>
                <WeatherButton className="rain" onClick={this.rain.bind(this)} ref={(rainButton) => { this.rainButton = rainButton; }}></WeatherButton>
                <WeatherButton className="sun" onClick={this.sun.bind(this)} ref={(sunButton) => { this.sunButton = sunButton; }}></WeatherButton>
                <div className="inner-container">
                    <div>
                        <video id="backgroundVideo" className="backgroundVideo" muted={true} loop autoPlay={true} preload="true">
                            <source src={this.state.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        );
    }

    rain() {
        if (!window.state || window.state==="sun") {
             console.log("rain");
             this.setState({
                 video: "videos/rainVideo.mp4",
             });
             var video = document.getElementById("backgroundVideo");
             video.load();
             this.rainButton.setSelected(true);
             this.sunButton.setSelected(false);
            this.props.rainCallback();
        }
    }
    sun() {
        if (window.state === "rain") {
            console.log("sun");
            this.setState({
                video: "videos/sunVideo.mp4",
            });
            var video = document.getElementById("backgroundVideo");
            video.load()
            this.sunButton.setSelected(true);
            this.rainButton.setSelected(false);
            this.props.sunCallback();
        }
    }
}

export default BackgroundVideo;