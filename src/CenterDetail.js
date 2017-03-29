import React, { Component } from 'react';
import './CenterDetail.css';

import CenterButton from './CenterButton';

class CenterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {video: "videos/greenRoof.mp4"};
    }

    render() {

        return (
            <div className="outerCircle">

                <video id="centerVideo" className="centerVideo" preload="true">
                    <source src={this.state.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <CenterButton label="Green Roof" onClick={this.greenRoof.bind(this)} position="top"></CenterButton>
                <CenterButton label="Rain Gardens" onClick={this.rainGardens.bind(this)} position="right"></CenterButton>
                <CenterButton label="Permeable Pavement" onClick={this.permeablePavement.bind(this)} position="bottom"></CenterButton>
                <CenterButton label="Landscaping" onClick={this.landScaping.bind(this)} position="left"></CenterButton>
            </div>
        );

    }

    greenRoof() {
        console.log("Green Roof clicked");
        this.loadVideo("videos/greenRoof.mp4");
    }

    rainGardens() {
        console.log("Rain Gardens clicked");
        this.loadVideo("videos/rainGardens.mp4");
    }

    permeablePavement() {
        console.log("Permeable Pavement clicked");
        this.loadVideo("videos/permeablePavement.mp4");
    }

    landScaping() {
        console.log("Landscaping clicked");
        this.loadVideo("videos/landscaping.mp4");
    }

    loadVideo(videoName) {
        this.setState( {
            video: videoName,
        })
        var video = document.getElementById("centerVideo");
        video.load();
        video.play();
    }
}

export default CenterDetail
