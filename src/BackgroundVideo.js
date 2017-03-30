import React, { Component } from 'react';
import './BackgroundVideo.css';

class BackgroundVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {video: this.props.startVideo};
    }

    render() {
        return (
            <div className="outer-container">
                <button className="rain" onClick={this.rain.bind(this)}>Rain</button>
                <button className="sun" onClick={this.sun.bind(this)}>Sun</button>
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
         console.log("rain");
         this.setState({
             video: "videos/sunVideo.mp4",
         });
         var video = document.getElementById("backgroundVideo");
         video.load();
        this.props.rainCallback();
    }
    sun() {
        console.log("sun");
        this.setState({
            video: "videos/rainVideo.mp4",
        });
        var video = document.getElementById("backgroundVideo");
        video.load()
        this.props.sunCallback();
    }
}

export default BackgroundVideo;