import React, { Component } from 'react'
import Accordian from '../components/Accordion'

class SolarFAQ extends Component {
    render() {
        return (
        <div>
            <p id="faq-title"> Frequently Asked Questions </p>
            <p id="faq-desc"> Learn more about how solar energy works, how Soli calculates your custom solar system, and next steps to implement your solar investment. </p>
        

            <Accordian title="what is abc?" content="letters" />
            <Accordian title="what is cbd?" content="hello" />
        </div>
        )
    }
}

export default SolarFAQ