import React, { Component } from 'react'
import './navbar.css'
import $ from 'jquery'
import Shome from './svgs/Shome'
import Sbell from './svgs/Sbell'
import Ssetting from './svgs/Ssetting'
import Ssearch from './svgs/Ssearch'
import Sslider from './svgs/Sslider'
export default class Navbar extends Component {
    componentDidMount(){
        $('.navbar-menu svg').click(function(){
            $('.navbar-menu svg.active').removeClass('active')
            $(this).addClass('active')
        })
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-icon">
                    <img src="./images/cloud-lightning.svg" alt="main-icons"></img>
                </div>
                <div className="navbar-menu">
                    <Shome />
                    <Ssearch />
                    <Sbell />
                    <Ssetting />
                    <Sslider />
                </div>
                <div className="navbar-profile">
                    <img width='24px' height="24px" src="./logo512.png" alt='profile pic'/>
                </div>
            </div>
        )
    }
}
