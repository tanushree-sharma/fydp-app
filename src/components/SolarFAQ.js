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
            <p id="faq-title"> Frequently Asked Questions </p>
            <p id="faq-desc"> Learn more about how solar energy works, how Soli calculates your custom solar system, and next steps to implement your solar investment. </p>
        </div>
        )
    }
}

export default SolarFAQ