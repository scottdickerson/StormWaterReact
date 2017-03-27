import React, { Component } from 'react';
import './CenterButton.css';

class CenterButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="buttonOuterCircle">
                <div className="centerButton" onClick={this.props.onClick.bind(this)}>
                    <div className="label">
                        {this.props.label}
                    </div>
                </div>
            </div>
        );

    }

}

export default CenterButton
