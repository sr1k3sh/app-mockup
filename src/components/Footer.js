import React, { Component } from 'react'
import './footer.css'
import Button from './Button'
export default class Footer extends Component {
    constructor(){
        super()
        this.state={
            value:'',
            time:''
        }
    }
    onChange=(event)=>{       
        this.setState({
            value:event.target.value
        })
    }
    onChangePlayer=(event)=>{
        this.setState({
            time:event.target.time
        })
    }
    render() {
        return (
            <div className="footer-container">
                <div className="media-controller">
                    <img src="./images/chevrons-left.svg" alt="prev"></img>
                    <img src="./images/pause.svg" alt="pause"></img>
                    <img src="./images/chevrons-right.svg" alt="next"></img>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="20"
                        value={this.state.value}
                        onChange={this.onChange}
                        step="1" />
                </div>
                <div style={{ display: 'flex',justifyContent:'center', alignItems: 'center', width: 30, height: 30, borderRadius: '50%', background:'#58579c'}}>
                    <span style={{color:'#fff',fontWeight:'500'}}>K</span>
                </div>
                <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
                    <span style={{color:'#000',fontSize:'12px',fontWeight:'600'}}>Hands on</span>
                    <span style={{ color: '#c1b3b3', fontSize: '8px', fontWeight: '600' }}>Kanya West</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        className="play-time"
                        type="range"
                        min="0" max="120"
                        value={this.state.time}
                        onChange={this.onChangePlayer}
                        step="1" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenly',width:222 }}>
                    <Button background="#fcc61f" value="Morning"></Button>
                    <Button background="#e35775" value="Evening"></Button>
                    <Button background="#4f50ce" value="Night"></Button>
                </div>
            </div>
        )
    }
}
