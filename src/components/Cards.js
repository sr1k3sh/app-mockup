import React, { Component } from 'react'
import "./cards.css"
import Switcher from './Switcher'

export default class Cards extends Component {
    render() {
        return (
            <div className="cards" style={{ background: this.props.background, boxShadow:`0px 0px 13px -3px ${this.props.background}`}}>
                <div className="cards-top">
                    <img src="./images/bell.svg" alt="icons" width="15px" height="15px"></img>
                    <Switcher/>
                </div>
                <div>
                    <span>Light</span>
                </div>
            </div>
        )
    }
}
