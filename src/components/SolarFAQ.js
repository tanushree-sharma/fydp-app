import React, { Component } from 'react'

class SolarFAQ extends Component {
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
            <h1> Solar FAQ </h1>
        </div>
        )
    }
}

export default SolarFAQ