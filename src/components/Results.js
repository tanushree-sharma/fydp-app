import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1> Results </h1>
            <p> installation size: {{installationSize}} kWh </p>
            <p> capital cost: ${{capitalCost}} </p>
            <p> payback period: {{paybackPeriod}} years</p>
            <p> total savings: ${{totalSavings}} over a 25 year time horizon</p>
            <p> spring savings: ${{springSavings}}/month</p>
            <p> summer savings: ${{summerSavings}}/month</p>
            <p> fall savings: ${{fallSavings}}/month</p>
            <p> winter savings: ${{winterSavings}}/month</p>
            <p> carbon emissions reduced by {{reducedCO2}} metric tonnes </p>
            <p> trees planted: {{treesPlanted}} trees </p>
        </div>
        )
    }
}

export default About