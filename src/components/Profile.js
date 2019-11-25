import React, { Component } from 'react'
import './profile.css'
export default class Profile extends Component {
    render() {
        return (
            <div className="profile-container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <div className="profile-account">
                    <img src="./images/profile.jpg" alt="profile"></img>
                    <span>George Main</span> 
                </div>
                <span style={{color:this.props.color,fontWeight:600}}>•  Coffee</span>
                <span>12:44</span>                
            </div>
        )
    }
}
