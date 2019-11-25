import React, { Component } from 'react'
import './history.css'
import Profile from './Profile'
export default class History extends Component {
    render() {
        return (
            <div className="history-container">
                <h3>History</h3>
                <Profile color="#00fb00"></Profile>
                <Profile color="#00fb00"></Profile>
                <Profile color="#00fb00"></Profile>
                
            </div>
        )
    }
}
