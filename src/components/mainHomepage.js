import React, { Component } from 'react'
import {Link} from 'react-scroll'
import graphic from '../homepageGraphic.png'
import carbonFootprint from '../carbonFootprintIcon.png'
import customAnalysis from '../customAnalysisIcon.png'
import longTermSavings from '../longTermSavingsIcon.png'
import scrollArrow from '../ScrollArrow.png';

console.log(graphic)
console.log(carbonFootprint)
console.log(customAnalysis)
console.log(longTermSavings)

class mainHomepage extends Component {
    render() {
        return (
        <div id="main">
            {/* main landing page */}
            <h1 id="mainText">Unlock your potential </h1>
            <h1 id="mainText"> solar savings</h1>
            <p id="mainSubText"> Streamlining the decision making process for </p>
            <p id="mainSubText"> residential solar energy investement </p>
            
            <form action="/form">
                <button type="submit" id="startButton"> Start Saving </button>
            </form>

            <img src={graphic} alt ="graphic" id="mainGraphic"/>

            <Link to="scrollTo" spy={true} smooth={true}> <img src={scrollArrow} alt="scroll" id="scrollArrow"/> </Link>

            {/* scrolled content */}
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

export default mainHomepage