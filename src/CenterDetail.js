import React, { Component } from 'react';
import './CenterDetail.css';

import CenterButton from './CenterButton';
import BottomCarousel from './BottomCarousel';

class CenterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video: null,
        };

    }

    render() {
        let introStyle={
            visibility: this.state.video===null?"visible":"hidden"
        }
        let videoStyle={
            visibility: this.state.video===null?"hidden":"visible"
        }
        return (
        <div>
            <img className="centerImage centerRing" alt="" src="img/680x680-centerRing.png"></img>
            <img className="centerImage" alt="Explore these smart stormwater solutions"
             src="img/680x680-CenterRing-INTRO-noText.png" style={introStyle}></img>
            <video id="centerVideo" className="centerVideo" preload="true" style={videoStyle}>
                <source src={this.state.video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="centerTitle" style={introStyle}>EXPLORE</div>
            <div className="centerSubtitle" style={introStyle}>THESE SMART <br/>STORMWATER SOLUTIONS!</div>
            <div className="centerText" style={introStyle}>
                Rain is great, but too much stormwater rushing through <br/>
                our cities means increased flooding and pollution. Smart <br/>
                cities can use <b>Green Stormwater Infrastructure</b> to help <br/>
                rainfall soak in or save it for a dry day!
            </div>

            <CenterButton src="GreenRoofs" onClick={this.greenRoof.bind(this)} position="top" ref={(greenRoofButton) => { this.greenRoofButton = greenRoofButton; }}></CenterButton>
            <CenterButton src="RainGardens" onClick={this.rainGardens.bind(this)} position="right" ref={(rainGardensButton) => { this.rainGardensButton = rainGardensButton; }}></CenterButton>
            <CenterButton src="PermPavement" onClick={this.permeablePavement.bind(this)} position="bottom-right" ref={(permPavementButton) => { this.permPavementButton = permPavementButton; }}></CenterButton>
            <CenterButton src="Bioswales" onClick={this.landScaping.bind(this)} position="bottom-left" ref={(bioswalesButton) => { this.bioswalesButton = bioswalesButton; }}></CenterButton>
            <CenterButton src="RainCisterns" onClick={this.rainCisterns.bind(this)} position="left" ref={(rainCisternsButton) => { this.rainCisternsButton = rainCisternsButton; }}></CenterButton>
            <BottomCarousel ref={(bottomCarousel) => { this.bottomCarousel = bottomCarousel; }}></BottomCarousel>
        </div>
            );

    }

    greenRoof() {
        console.log("Green Roof clicked");
        this.loadVideo("videos/greenRoof.mp4");
        this.selectButton(this.greenRoofButton);
        this.bottomCarousel.greenRoof();
    }

    rainCisterns() {
        console.log("Rain Cisterns clicked");
        this.loadVideo("videos/rainCisterns.mp4");
        this.selectButton(this.rainCisternsButton);
        this.bottomCarousel.rainCisterns();
    }

    rainGardens() {
        console.log("Rain Gardens clicked");
        this.loadVideo("videos/rainGardens.mp4");
        this.selectButton(this.rainGardensButton);
        this.bottomCarousel.rainGardens();
    }

    permeablePavement() {
        console.log("Permeable Pavement clicked");
        this.loadVideo("videos/permeablePavement.mp4");
        this.selectButton(this.permPavementButton);
        this.bottomCarousel.permeablePavement();
    }

    landScaping() {
        console.log("Landscaping clicked");
        this.loadVideo("videos/landscaping.mp4");
        this.selectButton(this.bioswalesButton);
        this.bottomCarousel.landScaping();
    }

    selectButton(button) {
        if (this.selectedButton) {
            this.selectedButton.setSelected(false);
        }
        this.selectedButton = button;

        // If clicked in the rain state, need to trigger the sun state
        if (window.state==="rain") {
            window.videoStateDispatcher.dispatch(
                {
                   videoState: "sun"
                }
            );
        }

        button.setSelected(true);
    }
    loadVideo(videoName) {
        this.setState( {
            video: videoName,
        })
        var video = document.getElementById("centerVideo");
        video.load();
        video.play();
    }

    reset() {
        if (this.selectedButton) {
            this.selectedButton.setSelected(false);
        }
        this.setState({
            video: null,
        })
        var video = document.getElementById("centerVideo");
        video.pause();
        this.bottomCarousel.hide();
    }
}

export default CenterDetail
