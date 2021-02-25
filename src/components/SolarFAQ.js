import React, { Component } from 'react'
import { render } from 'react-dom';
import Accordion from './Accordion';

class SolarFAQ extends Component {
    render() {
        return (
        <div>
            <p id="faq-title"> Frequently Asked Questions </p>
            <p id="faq-desc"> Learn more about how solar energy works, how Soli calculates your custom solar system, and next steps to implement your solar investment. </p>
            
            <p id="aboutSolar"> About Solar Energy </p>
            <p id="myData"> My Data </p>
            <p id="myResults"> My Results </p>
            <p id="nextSteps"> Next Steps </p>

            <div>
            <Accordion allowMultipleOpen>
                <div label='How does solar energy work?'>
                    <p>In residential projects, the Sun’s energy is harnessed through the use of photovoltaic (PV) technology. A solar panel is a collection of silicon PV cells that absorb sunlight to produce electricity through the Photovoltaic Effect. This electricity can be used to immediately power the home, or be reserved in a battery storage system for future use. </p>
                    
                </div>
                <div label='What are the different types of solar systems?'>
                    <p>There are three primary residential solar PV and storage installations:</p>
                    <p><strong>Solar</strong> installations include solar panels providing energy for immediate use. Any unused energy captured by panels is lost.</p>
                    <p><strong>Solar + Battery</strong> installations use a home battery system to store excess energy captured during hours of sunlight to allow for use during periods of minimal or no sun exposure.</p>
                    <p><strong>Off-grid</strong> systems serve as stand alone power systems where homes are entirely self-sufficient and do not rely on the electrical grid at all. </p>
                </div>
            </Accordion>
            </div>

        </div>
        )
    }
}

export default SolarFAQ

