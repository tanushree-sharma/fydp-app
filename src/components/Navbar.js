import React, { Component } from 'react';
import Navitem from './Navitem'
import logo from '../logo.png';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
        document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
        document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
   
    render() {
        return (
            <nav>
            <img src={logo} className="logo" alt="logo"></img>
            <ul>
            <Navitem item="About Us" tolink="/about_us" activec={this.activeitem}></Navitem>
            <Navitem item="Solar FAQ" tolink="/faq" activec={this.activeitem}></Navitem>
            <Navitem item="Start Saving" tolink="/start_saving" activec={this.activeitem}></Navitem>
            <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar