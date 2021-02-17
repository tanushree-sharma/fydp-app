import React, { Component } from 'react'

class About extends Component {
    render() {
        var defaultForm = "solar";
        localStorage.setItem("whichForm", defaultForm);
        return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1> About Us </h1>
        </div>
        )
    }
}

export default About