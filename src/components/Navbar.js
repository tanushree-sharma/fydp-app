import React, { Component } from 'react';
import logo from '../logo.png';

class Navbar extends Component {

    
    render() {
        return (
            <div class="sticky">
                <div class="nav">
                    <img src={logo} class="logo" alt="logo" width="100px"></img>
                    <ul class="nav-right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/start-saving">Start Saving</a></li>
                        <li><a href="/faq">Solar FAQ</a></li>
                        <li><a href="/about">About Us</a></li>   
                    </ul>
                </div>
            </div>
        );
    }
    }
    
export default Navbar