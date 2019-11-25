import React, { Component } from 'react'
import './temperature.css'
import $ from 'jquery'
export default class TemperatureComponent extends Component {
    componentDidMount(){
        $('.temperature-container .temp-unit h2').click(function(){
            $('.temperature-container .temp-unit h2').removeClass('active')
            $(this).addClass('active')
        })
    }
    render() {
        return (
            <div className="temperature-container">
                <h3>Temperature</h3>
                <div className="temp-unit">
                    <h2 className="active">°C</h2>
                    <h2>°F</h2>
                </div>
                <div className="temp-button">
                    <div className="but-base">
                        <div className="temp-details">
                            <h2>25°</h2>
                            <h2>Kathmandu</h2>
                        </div>
                        <div className="but-mid"></div>
                    </div>
                </div>
                <span>Normal temperature for kitech 20-24°C</span>
            </div>
        )
    }
}
