import React, { Component } from 'react'
import carbonFootprint from '../carbonFootprintIcon.png'
import customAnalysis from '../customAnalysisIcon.png'
import longTermSavings from '../longTermSavingsIcon.png'

console.log(carbonFootprint)
console.log(customAnalysis)
console.log(longTermSavings)

class scrollHomepage extends Component {
    render() {
        return (
        <div>
            {/* Your Html/JSX code goes here */}
            <img src={customAnalysis} alt ="Custom Analysis" id="customAnalysisIcon"/>
            <img src={longTermSavings} alt ="Long Term Savings" id="longTermSavingsIcon"/>
            <p id="longTermSavingsLabel"> Long Term Savings </p>
            <img src={carbonFootprint} alt ="Carbon Footprint" id="carbonFootprintIcon"/>
            
            <p id="customAnalysisLabel"> Custom Analysis </p>
            <p id="longTermSavingsLabel"> Long Term Savings </p>
            <p id="carbonFootprintLabel"> Carbon Footprint </p>

            <p id="customAnalysisDesc"> Soli provides you with optimized, custom results to help you make the right decision for your home. </p>
            <p id="longTermSavingsDesc"> We’ll give you full visibility into long-term cost savings and the payback period for your unique system. </p>
            <p id="carbonFootprintDesc"> Discover how leveraging solar energy impacts your hoursehold carbon footprint over time. </p>

            <form action="/form">
                <button type="submit" id="startButton2"> Start Saving </button>
            </form>
        </div>
        )
    }
}

export default scrollHomepage