import React, { Component } from 'react';
import './CenterDetail.css';

import CenterButton from './CenterButton';

class CenterDetail extends Component {

    render() {

        return (
            <div className="outerCircle">

                <video id="centerVideo" className="centerVideo" preload="true">
                    <source src="videos/test.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <CenterButton label="Green Roof" onClick={this.greenRoof.bind(this)}></CenterButton>
            </div>
        );

    }

    greenRoof() {
        console.log("Green Roof clicked");
        var video = document.getElementById("centerVideo");
        video.load();
        video.play();
    }

    rainGardens() {

    }

    permeablePavement() {

    }

    landScaping() {

    }
}

export default CenterDetail
