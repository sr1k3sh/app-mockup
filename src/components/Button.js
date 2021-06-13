import React, { Component } from 'react'
import './button.css'
export default class Button extends Component {
    constructor(){
        super()
        this.state={
            back:''
        }
    }
    componentWillMount(){
        this.setState({
            back:this.props.background
        })
    }
    componentDidMount(e){
        // let that = this
        // $('.cbutton').hover(function(){
        //     $(this).css('background',that.setState({back:'blue'}))
        // },function(){
        //         $(this).css('background', that.setState({back:'green'}))
        // }
        // )
    }
    render() {
        return (
            <div className="cbutton" style={{background:this.state.back,borderRadius:'17px',padding:'6px 10px'}}>
                <span>{this.props.value}</span>
            </div>
        )
    }
}
