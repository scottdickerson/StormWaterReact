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

                <CenterButton src="GreenRoofs" onClick={this.greenRoof.bind(this)} position="top" ref={(greenRoofButton) => { this.greenRoofButton = greenRoofButton; }}></CenterButton>
                <CenterButton src="RainGardens" onClick={this.rainGardens.bind(this)} position="right" ref={(rainGardensButton) => { this.rainGardensButton = rainGardensButton; }}></CenterButton>
                <CenterButton src="PermPavement" onClick={this.permeablePavement.bind(this)} position="bottom-right" ref={(permPavementButton) => { this.permPavementButton = permPavementButton; }}></CenterButton>
                <CenterButton src="Bioswales" onClick={this.landScaping.bind(this)} position="bottom-left" ref={(bioswalesButton) => { this.bioswalesButton = bioswalesButton; }}></CenterButton>
                <CenterButton src="RainCisterns" onClick={this.rainCisterns.bind(this)} position="left" ref={(rainCisternsButton) => { this.rainCisternsButton = rainCisternsButton; }}></CenterButton>
            </div>
        );

    }

    greenRoof() {
        console.log("Green Roof clicked");
        this.loadVideo("videos/greenRoof.mp4");
        this.selectButton(this.greenRoofButton);
    }

    rainCisterns() {
        console.log("Rain Cisterns clicked");
        this.loadVideo("videos/rainCisterns.mp4");
        this.selectButton(this.rainCisternsButton);
    }

    rainGardens() {
        console.log("Rain Gardens clicked");
        this.loadVideo("videos/rainGardens.mp4");
        this.selectButton(this.rainGardensButton);
    }

    permeablePavement() {
        console.log("Permeable Pavement clicked");
        this.loadVideo("videos/permeablePavement.mp4");
        this.selectButton(this.permPavementButton);
    }

    landScaping() {
        console.log("Landscaping clicked");
        this.loadVideo("videos/landscaping.mp4");
        this.selectButton(this.bioswalesButton);
    }

    selectButton(button) {
        if (this.selectedButton) {
            this.selectedButton.setSelected(false);
        }
        this.selectedButton = button;
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
}

export default CenterDetail
