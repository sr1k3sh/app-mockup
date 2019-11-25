import React, { Component } from 'react'
import './home.css'
import $ from 'jquery'
import Cards from '../components/Cards'
import Switcher from '../components/Switcher'
import TemperatureComponent from '../components/TemperatureComponent'
import History from './../components/History'
const mdetails=['living Room','Bedroom','Kitchen','Hall']
const schMenu=['week','month','year']
const devMenu=['Coffee Machine','Light','Refrigerator']
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            active:mdetails[0],
            sactive:schMenu[0],
            dactive:devMenu[1]
        }
    }
    _handleClick(mdetails){
        this.setState({ active: mdetails });
    }
    _handleClickSch(schMenu){
        this.setState({sactive:schMenu});
    }
    _handleClickDev(devMenu) {
        this.setState({ dactive: devMenu });
    }
    render() {
        const activeStyle = { color: '#35357f',fontWeight:'600'};
        return (
            <div className="home-page">
                <div className="body-detail">
                    <div className="main-detail">
                        <h1><span>Hello,</span>Rikesh Shrestha</h1>
                        <div className="menus">
                            <div className="m-details">{
                                mdetails.map(mdetails=>
                                    <span style={this.state.active === mdetails ? activeStyle : {}} 
                                     onClick={this._handleClick.bind(this, mdetails)}>
                                        {mdetails}
                                    </span>)
                            }
                            </div>
                            <div>
                                <img src="./images/more-horizontal.svg" alt=" more"/>
                            </div>
                            
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'20px'}}>
                            <Cards background="#fec514"></Cards>
                            <Cards background="#4c4de5"></Cards>
                            <Cards background="#4c4de5"></Cards>
                            <Cards background="#4c4de5"></Cards>
                        </div>
                        <div className="bottom-container">
                            <div className="schedule-container">
                                <span style={{fontWeight:'500',fontSize:'20px',textTransform:'capitalize'}}>schedule</span>
                                <div className="sch-details">
                                    {
                                    schMenu.map(schMenu=>
                                    <span style={this.state.sactive === schMenu ? activeStyle : {}}
                                        onClick={this._handleClickSch.bind(this, schMenu)}>
                                        {schMenu}   
                                    </span>)
                                    }
                                </div>
                                <img src="./area_graph.png" alt="graph" style={{
                                    width: 250, height: 170, objectFit: 'cover', borderRadius: '10px', boxShadow: '2px 2px 8px 1px #73737380'}}></img>
                            </div>
                            <div className="my-device-container">
                                <span style={{ fontWeight: '500', fontSize: '20px', textTransform: 'capitalize' }}>My device</span>
                                <div className="dev-details">
                                    {
                                        devMenu.map(devMenu =>
                                            <span style={this.state.dactive === devMenu ? activeStyle : {}}
                                                onClick={this._handleClickDev.bind(this, devMenu)}>
                                                {devMenu}
                                            </span>)
                                    }
                                </div>
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <div className="dev1">
                                        <img src="./bulb.png" alt="bulb"></img>
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                                            <div style={{width:'60%'}}>
                                                <span style={{fontSize:'15px',fontWeight:'500'}}>Lamp 1</span>
                                                <div style={{display:'flex',justifyContent:'space-between',fontSize:'10px'}}><span>From</span><span>To</span></div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between',fontSize:'10px',fontWeight:'500' }}><span>14:00</span><span>22:00</span></div>
                                            </div>
                                            <div style={{transform:'rotate(90deg)'}}>
                                                <Switcher></Switcher>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dev2">
                                        <img src="./lamp.png" alt="lamp"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-detail">
                        <TemperatureComponent></TemperatureComponent>
                        <History></History>
                    </div>
                </div>
                <div className="footer-detail"></div>
            </div>
        )
    }
}
