import React, { Component } from 'react'
import { render } from 'react-dom';
import Accordion from './Accordion';
import Footer from '../components/Footer';
import faqArrowDown from '../faqArrowDown.png'
import faqArrowUp from '../faqArrowUp.png'


class SolarFAQ extends Component {
    render() {
        window.addEventListener('load', function () {
            var oldURL = document.referrer
            var resultsSolar = "http://localhost:3000/solar-results";
            var resultsBattery = "http://localhost:3000/solarbattery-results"
            var startSaving = "http://localhost:3000/start-saving";


            var currentUrl = window.location.href;
            var temp = currentUrl.split("/");
            var anchor = temp[4];
            var fromResults = "#results";
            var fromBudget = "#budget";


            if ((oldURL.localeCompare(resultsSolar) == 0 || oldURL.localeCompare(resultsBattery) == 0 || oldURL.localeCompare(startSaving) == 0) && currentUrl.length  == 4) {

            console.log(anchor);
            console.log(temp.length);

                if (anchor.localeCompare(fromResults) == 0) {
                    console.log("open results");
                    openResultsSection1();
                }
              
                //link from Start Savings page
                if (anchor.localeCompare(fromBudget) == 0) {
                    openDataSection2();
                }
            }
        });
        function openAboutSection1() {
            document.getElementById("aboutDownFAQArrow1").style.display = "None";
            document.getElementById("aboutUpFAQArrow1").style.display = "Block";
            document.getElementById("aboutFAQAnswer1").style.display = "Block";
        }
        function closeAboutSection1() {
            document.getElementById("aboutDownFAQArrow1").style.display = "Block";
            document.getElementById("aboutUpFAQArrow1").style.display = "None";
            document.getElementById("aboutFAQAnswer1").style.display = "None";
        }
        function openAboutSection2() {
            document.getElementById("aboutDownFAQArrow2").style.display = "None";
            document.getElementById("aboutUpFAQArrow2").style.display = "Block";
            document.getElementById("aboutFAQAnswer2").style.display = "Block";
        }
        function closeAboutSection2() {
            document.getElementById("aboutDownFAQArrow2").style.display = "Block";
            document.getElementById("aboutUpFAQArrow2").style.display = "None";
            document.getElementById("aboutFAQAnswer2").style.display = "None";
        }
        function openAboutSection3() {
            document.getElementById("aboutDownFAQArrow3").style.display = "None";
            document.getElementById("aboutUpFAQArrow3").style.display = "Block";
            document.getElementById("aboutFAQAnswer3").style.display = "Block";
        }
        function closeAboutSection3() {
            document.getElementById("aboutDownFAQArrow3").style.display = "Block";
            document.getElementById("aboutUpFAQArrow3").style.display = "None";
            document.getElementById("aboutFAQAnswer3").style.display = "None";
        }
        function openAboutSection4() {
            document.getElementById("aboutDownFAQArrow4").style.display = "None";
            document.getElementById("aboutUpFAQArrow4").style.display = "Block";
            document.getElementById("aboutFAQAnswer4").style.display = "Block";
        }
        function closeAboutSection4() {
            document.getElementById("aboutDownFAQArrow4").style.display = "Block";
            document.getElementById("aboutUpFAQArrow4").style.display = "None";
            document.getElementById("aboutFAQAnswer4").style.display = "None";
        }
        function openAboutSection5() {
            document.getElementById("aboutDownFAQArrow5").style.display = "None";
            document.getElementById("aboutUpFAQArrow5").style.display = "Block";
            document.getElementById("aboutFAQAnswer5").style.display = "Block";
        }
        function closeAboutSection5() {
            document.getElementById("aboutDownFAQArrow5").style.display = "Block";
            document.getElementById("aboutUpFAQArrow5").style.display = "None";
            document.getElementById("aboutFAQAnswer5").style.display = "None";
        }

        function openDataSection1() {
            document.getElementById("dataDownFAQArrow1").style.display = "None";
            document.getElementById("dataUpFAQArrow1").style.display = "Block";
            document.getElementById("dataFAQAnswer1").style.display = "Block";
        }
        function closeDataSection1() {
            document.getElementById("dataDownFAQArrow1").style.display = "Block";
            document.getElementById("dataUpFAQArrow1").style.display = "None";
            document.getElementById("dataFAQAnswer1").style.display = "None";
        }
        function openDataSection2() {
            document.getElementById("dataDownFAQArrow2").style.display = "None";
            document.getElementById("dataUpFAQArrow2").style.display = "Block";
            document.getElementById("dataFAQAnswer2").style.display = "Block";
        }
        function closeDataSection2() {
            document.getElementById("dataDownFAQArrow2").style.display = "Block";
            document.getElementById("dataUpFAQArrow2").style.display = "None";
            document.getElementById("dataFAQAnswer2").style.display = "None";
        }
        function openDataSection3() {
            document.getElementById("dataDownFAQArrow3").style.display = "None";
            document.getElementById("dataUpFAQArrow3").style.display = "Block";
            document.getElementById("dataFAQAnswer3").style.display = "Block";
        }
        function closeDataSection3() {
            document.getElementById("dataDownFAQArrow3").style.display = "Block";
            document.getElementById("dataUpFAQArrow3").style.display = "None";
            document.getElementById("dataFAQAnswer3").style.display = "None";
        }

        function openResultsSection1() {
            document.getElementById("resultsDownFAQArrow1").style.display = "None";
            document.getElementById("resultsUpFAQArrow1").style.display = "Block";
            document.getElementById("resultsFAQAnswer1").style.display = "Block";
        }
        function closeResultsSection1() {
            document.getElementById("resultsDownFAQArrow1").style.display = "Block";
            document.getElementById("resultsUpFAQArrow1").style.display = "None";
            document.getElementById("resultsFAQAnswer1").style.display = "None";
        }
        function openResultsSection2() {
            document.getElementById("resultsDownFAQArrow2").style.display = "None";
            document.getElementById("resultsUpFAQArrow2").style.display = "Block";
            document.getElementById("resultsFAQAnswer2").style.display = "Block";
        }
        function closeResultsSection2() {
            document.getElementById("resultsDownFAQArrow2").style.display = "Block";
            document.getElementById("resultsUpFAQArrow2").style.display = "None";
            document.getElementById("resultsFAQAnswer2").style.display = "None";
        }
        function openResultsSection3() {
            document.getElementById("resultsDownFAQArrow3").style.display = "None";
            document.getElementById("resultsUpFAQArrow3").style.display = "Block";
            document.getElementById("resultsFAQAnswer3").style.display = "Block";
        }
        function closeResultsSection3() {
            document.getElementById("resultsDownFAQArrow3").style.display = "Block";
            document.getElementById("resultsUpFAQArrow3").style.display = "None";
            document.getElementById("resultsFAQAnswer3").style.display = "None";
        }
        function openResultsSection4() {
            document.getElementById("resultsDownFAQArrow4").style.display = "None";
            document.getElementById("resultsUpFAQArrow4").style.display = "Block";
            document.getElementById("resultsFAQAnswer4").style.display = "Block";
        }
        function closeResultsSection4() {
            document.getElementById("resultsDownFAQArrow4").style.display = "Block";
            document.getElementById("resultsUpFAQArrow4").style.display = "None";
            document.getElementById("resultsFAQAnswer4").style.display = "None";
        }
        function openResultsSection5() {
            document.getElementById("resultsDownFAQArrow5").style.display = "None";
            document.getElementById("resultsUpFAQArrow5").style.display = "Block";
            document.getElementById("resultsFAQAnswer5").style.display = "Block";
        }
        function closeResultsSection5() {
            document.getElementById("resultsDownFAQArrow5").style.display = "Block";
            document.getElementById("resultsUpFAQArrow5").style.display = "None";
            document.getElementById("resultsFAQAnswer5").style.display = "None";
        }

        function openNextSection1() {
            document.getElementById("nextDownFAQArrow1").style.display = "None";
            document.getElementById("nextUpFAQArrow1").style.display = "Block";
            document.getElementById("nextFAQAnswer1").style.display = "Block";
        }
        function closeNextSection1() {
            document.getElementById("nextDownFAQArrow1").style.display = "Block";
            document.getElementById("nextUpFAQArrow1").style.display = "None";
            document.getElementById("nextFAQAnswer1").style.display = "None";
        }
        function openNextSection2() {
            document.getElementById("nextDownFAQArrow2").style.display = "None";
            document.getElementById("nextUpFAQArrow2").style.display = "Block";
            document.getElementById("nextFAQAnswer2").style.display = "Block";
        }
        function closeNextSection2() {
            document.getElementById("nextDownFAQArrow2").style.display = "Block";
            document.getElementById("nextUpFAQArrow2").style.display = "None";
            document.getElementById("nextFAQAnswer2").style.display = "None";
        }
        function openNextSection3() {
            document.getElementById("nextDownFAQArrow3").style.display = "None";
            document.getElementById("nextUpFAQArrow3").style.display = "Block";
            document.getElementById("nextFAQAnswer3").style.display = "Block";
        }
        function closeNextSection3() {
            document.getElementById("nextDownFAQArrow3").style.display = "Block";
            document.getElementById("nextUpFAQArrow3").style.display = "None";
            document.getElementById("nextFAQAnswer3").style.display = "None";
        }
        return (
            <div>
                <p id="faq-title"> Frequently Asked Questions </p>
                <p id="faq-desc"> Learn more about how solar energy works, how Soli calculates your custom solar system, and next steps to implement your solar investment. </p>

                <p id="aboutSolar"> About Solar Energy </p>
                <div id="faqDiv">
                    <div id="aboutFAQSectionContainer1">
                        <div id="aboutFAQIcon1">
                            <img src={faqArrowDown} alt="faq-arrow" id="aboutDownFAQArrow1" onClick={() => { openAboutSection1(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="aboutUpFAQArrow1" onClick={() => { closeAboutSection1(); }} />
                        </div>
                        <div id="aboutFAQQuestion1">
                            <p class="FAQ-Question"> How does solar energy work?</p>
                        </div>
                        <div id="aboutFAQAnswer1">
                            <p class="FAQ-Answer"> In residential projects, the Sun’s energy is harnessed through the use of photovoltaic (PV) technology. A solar panel is a collection of silicon PV cells that absorb sunlight to produce electricity through the Photovoltaic Effect. This electricity can be used to immediately power the home, or be reserved in a battery storage system for future use. </p>
                        </div>
                    </div>
                    <div id="aboutFAQSectionContainer2">
                        <div id="aboutFAQIcon2">
                            <img src={faqArrowDown} alt="faq-arrow" id="aboutDownFAQArrow2" onClick={() => { openAboutSection2(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="aboutUpFAQArrow2" onClick={() => { closeAboutSection2(); }} />
                        </div>
                        <div id="aboutFAQQuestion2">
                            <p class="FAQ-Question"> What are the different types of solar systems? </p>
                        </div>
                        <div id="aboutFAQAnswer2">
                            <p class="FAQ-Answer"> There are three primary residential solar PV and storage installations: </p>
                            <p class="FAQ-Answer" style={{ marginLeft: '2.5rem', marginBottom: '0.8rem' }}><strong>Solar</strong> installations include solar panels providing energy for immediate use. Any unused energy captured by panels is lost.</p>
                            <p class="FAQ-Answer" style={{ marginLeft: '2.5rem', marginBottom: '0.8rem' }}><strong>Solar + Battery</strong> installations use a home battery system to store excess energy captured during hours of sunlight to allow for use during periods of minimal or no sun exposure.</p>
                            <p class="FAQ-Answer" style={{ marginLeft: '2.5rem', marginBottom: '0.8rem' }}><strong>Off-grid</strong> systems serve as stand alone power systems where homes are entirely self-sufficient and do not rely on the electrical grid at all. </p>
                        </div>
                    </div>
                    <div id="aboutFAQSectionContainer3">
                        <div id="aboutFAQIcon3">
                            <img src={faqArrowDown} alt="faq-arrow" id="aboutDownFAQArrow3" onClick={() => { openAboutSection3(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="aboutUpFAQArrow3" onClick={() => { closeAboutSection3(); }} />
                        </div>
                        <div id="aboutFAQQuestion3">
                            <p class="FAQ-Question"> What is the average lifespan of a solar energy system? </p>
                        </div>
                        <div id="aboutFAQAnswer3">
                            <p class="FAQ-Answer"> Solar panels have an average lifespan of 25-30 years, which is why Soli presents cost-saving results covering a span of a conservative 25 years. It is likely that panels will remain functioning beyond 25 years, however the yearly rate of deterioration will reduce their effectiveness over time. </p>
                        </div>
                    </div>
                    <div id="aboutFAQSectionContainer4">
                        <div id="aboutFAQIcon4">
                            <img src={faqArrowDown} alt="faq-arrow" id="aboutDownFAQArrow4" onClick={() => { openAboutSection4(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="aboutUpFAQArrow4" onClick={() => { closeAboutSection4(); }} />
                        </div>
                        <div id="aboutFAQQuestion4">
                            <p class="FAQ-Question" id="budget"> Are there any government rebates for solar investments? </p>
                        </div>
                        <div id="aboutFAQAnswer4">
                            <p class="FAQ-Answer"> As of February 2021, under Ontario’s current provincial government, there are no active rebate programs for homeowners with solar energy systems.</p>
                        </div>
                    </div>
                    <div id="aboutFAQSectionContainer5">
                        <div id="aboutFAQIcon5">
                            <img src={faqArrowDown} alt="faq-arrow" id="aboutDownFAQArrow5" onClick={() => { openAboutSection5(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="aboutUpFAQArrow5" onClick={() => { closeAboutSection5(); }} />
                        </div>
                        <div id="aboutFAQQuestion5">
                            <p class="FAQ-Question"> What are pros and cons of residential solar energy investment? </p>
                        </div>
                        <div id="aboutFAQAnswer5">
                            <p class="FAQ-Answer"> <strong>Pros:</strong></p>
                            <ul class="FAQ-Answer">
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Lower Electricity Bills → Continued reduction in your electricity bill during the lifespan of the solar panels.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Increased Property Value → On average, homes with solar systems installed, sell for almost 4% more.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Reduced Carbon Footprint → Solar is an infinite energy source and is able to generate energy without harmful emissions, unlike its alternatives such as natural gas or fossil fuels.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Energy Independence → Generating energy from solar panels decreases a home’s reliance on the electrical grid, and leads to a more predictable electricity bill.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Longevity & Low Maintenance → Solar panels require limited maintenance during the first 25 years after installation. Panels can be independently maintained or cleaned for a relatively low cost by professionals.</li>
                            </ul>
                            <br></br>
                            <p class="FAQ-Answer"><strong>Cons:</strong></p>
                            <ul class="FAQ-Answer">
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Initial investment → Though the savings pay-off in the long run, the upfront cost required may deter homeowners.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Weather factors → For optimal efficiency, panels require direct sunlight, thus, snow, shade and dust build up overtime should be mitigated.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Space requirement → Most configurations see solar panels taking up a significant amount of space on the roof, therefore homeowners with smaller roofs may need to compromise installation size for space.</li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Usability → Unless a home battery is paired with a solar energy system, energy can only be used during the day, while it’s being harnessed.</li>
                            </ul>
                        </div>
                    </div>

                    <p id="myData"> My Data </p>
                    <div id="dataFAQSectionContainer1">
                        <div id="dataFAQIcon1">
                            <img src={faqArrowDown} alt="faq-arrow" id="dataDownFAQArrow1" onClick={() => { openDataSection1(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="dataUpFAQArrow1" onClick={() => { closeDataSection1(); }} />
                        </div>
                        <div id="dataFAQQuestion1">
                            <p class="FAQ-Question"> How is the data I input used to complete the solar analysis?</p>
                        </div>
                        <div id="dataFAQAnswer1">
                            <p class="FAQ-Answer"><strong>Postal Code</strong></p>
                            <p class="FAQ-Answer">Solar irradiation differs based on location. Your postal code helps Soli determine the expected sun hours in your region each season.</p>
                            <br></br>

                            <p class="FAQ-Answer"><strong>Roof Size</strong></p>
                            <p class="FAQ-Answer">Depending on the size of your home, the optimal size of a solar installation may be  limited by the size of your roof.</p>
                            <br></br>

                            <p class="FAQ-Answer"><strong>Electricity Usage & Month of Usage</strong></p>
                            <p class="FAQ-Answer">The amount of electricity your home uses in a given month is important in determining the size of your system and seasonal fluctuations in your electricity demand. Soli ensures that the amount of energy generated from solar panels does not exceed your electricity demand when it's at its highest. Soli also uses this electricity usage value to forecast the cost of electricity. Based on projections from Ontario’s Financial Accountability Office, yearly electricity costs are expected to increase at a rate of approximately 2% per year.</p>
                            <br></br>

                            <p class="FAQ-Answer"><strong>Type of Heating</strong></p>
                            <p class="FAQ-Answer">The type of heating in your home (electric or natural gas) dictates the seasonal fluctuations in electricity demand. For example, the value of a homeowners electricity demand from a spring or fall month would be inflated to project winter demand if their home runs on electric heating, but would remain consistent if running on natural gas.</p>
                            <br></br>

                            <p class="FAQ-Answer"><strong>Storage Capacity</strong></p>
                            <p class="FAQ-Answer">The battery capacity controls how much space is available to store excess energy generated by the solar panels.</p>
                            <br></br>

                            <p class="FAQ-Answer"><strong>Battery Depth of Discharge (DoD)</strong></p>
                            <p class="FAQ-Answer">The DoD further constrains the storage capacity of the battery, and indicates the percentage of the battery available for discharge, relative to the entire capacity.</p>
                            <br></br>

                            <p class="FAQ-Answer"><strong>Budget</strong></p>
                            <p class="FAQ-Answer">Soli recommends an installation size with an initial investment cost that does not exceed your budget.</p>
                        </div>
                    </div>
                    <div id="dataFAQSectionContainer2">
                        <div id="dataFAQIcon2">
                            <img src={faqArrowDown} alt="faq-arrow" id="dataDownFAQArrow2" onClick={() => { openDataSection2(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="dataUpFAQArrow2" onClick={() => { closeDataSection2(); }} />
                        </div>
                        <div id="dataFAQQuestion2">
                            <p class="FAQ-Question" id="results"> How do I select an appropriate budget?</p>
                        </div>
                        <div id="dataFAQAnswer2">
                            <p class="FAQ-Answer">The specified budget for a solar installation will go towards the fixed installation costs and the variable cost, dependent on the size of the system.</p><br></br>
                            <p class="FAQ-Answer">The fixed installation cost is approximately $2,000 - $3,000. The variable cost is approximately $2.80 per watt installed. Most residential solar panels are 250 - 400 watts, making the cost of each solar panel within the range of $700 - $1,120.</p><br></br>
                            <p class="FAQ-Answer">For reference, with a monthly usage of 722 kWh, the average cost of a residential solar installation is $15,000 - $20,000.</p>
                        </div>
                    </div>
                    <div id="dataFAQSectionContainer3">
                        <div id="dataFAQIcon3">
                            <img src={faqArrowDown} alt="faq-arrow" id="dataDownFAQArrow3" onClick={() => { openDataSection3(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="dataUpFAQArrow3" onClick={() => { closeDataSection3(); }} />
                        </div>
                        <div id="dataFAQQuestion3">
                            <p class="FAQ-Question"> Can I trust Soli with my data?</p>
                        </div>
                        <div id="dataFAQAnswer3">
                            <p class="FAQ-Answer">Absolutely! Soli only uses your data to generate your custom analysis. None of the information you provide will be stored or used elsewhere.</p>
                        </div>
                    </div>

                    <p id="myResults"> My Results </p>
                    <div id="resultsFAQSectionContainer1">
                        <div id="resultsFAQIcon1">
                            <img src={faqArrowDown} alt="faq-arrow" id="resultsDownFAQArrow1" onClick={() => { openResultsSection1(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="resultsUpFAQArrow1" onClick={() => { closeResultsSection1(); }} />
                        </div>
                        <div id="resultsFAQQuestion1">
                            <p class="FAQ-Question"> What do each of the results sections mean?</p>
                        </div>
                        <div id="resultsFAQAnswer1">
                            <p class="FAQ-Answer"><strong>Recommended System Specifications:</strong></p>
                            <p class="FAQ-Answer" style={{marginBottom: '0.5rem' }}>The data you provide is run through an optimization model that seeks to minimize cost spent on electricity over 25 years. The model outputs the optimal size of installation, and Soli calculates the following information.</p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Installation Size</strong> → The model outputs the optimal size of installation which takes the optimal number of solar panels and multiplies it by the capacity of one solar panel.</p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Initial Investment</strong> → Soli calculates the resulting initial investment by multiplying the installation size by the cost per kW of solar panels plus an additional fixed cost of installation. </p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Payback Period</strong> → The payback period represents the estimated number of years it will take for you to recover the cost of the initial investment through savings generated by solar.</p>
                            <br></br>
                            <p class="FAQ-Answer"><strong>Savings:</strong></p>
                            <p class="FAQ-Answer" style={{marginBottom: '0.5rem' }} >Soli calculates the difference between your projected cost of electricity overtime, with and without solar.</p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Total Savings</strong> → This is the sum of the calculated differences between your project cost of electricity overtime, with and without solar.</p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Seasonal Savings Breakdown</strong> → Your potential savings are also broken down by season to give you an idea of the fluctuations in cost savings by season over 25 years. These values are calculated by taking the average savings by season over the 25 year time frame. </p>
                            <br></br>
                            <p class="FAQ-Answer"><strong>Environmental Impact:</strong></p>
                            <p class="FAQ-Answer" style={{marginBottom: '0.5rem' }}>Using solar energy in place of electricity from the grid will reduce your carbon emissions overtime. Soli quantifies this in terms of metric tonnes of carbon, and the equivalent in tree plantings.</p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Carbon Reduction</strong> → To calculate the estimated amount of carbon reduced, the difference in electricity usage from the grid with and without solar panels is calculated and multiplied by a factor that represents the amount of emissions in CO2/kWh from grid electricity. Please note that Soli does not consider emissions from the total lifecycle of solar panels.</p>
                            <p class="FAQ-Answer" style={{marginLeft: '2.5rem', marginBottom: '0.5rem' }}><strong> Tree Plantings</strong> → The equivalency of the carbon reduction in tree plantings is calculated by multiplying the estimated amount of carbon reduction by a factor that represents the number of trees needed to offset 1 tonne of CO2. </p>
                        </div>
                    </div>
                    <div id="resultsFAQSectionContainer2">
                        <div id="resultsFAQIcon2">
                            <img src={faqArrowDown} alt="faq-arrow" id="resultsDownFAQArrow2" onClick={() => { openResultsSection2(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="resultsUpFAQArrow2" onClick={() => { closeResultsSection2(); }} />
                        </div>
                        <div id="resultsFAQQuestion2">
                            <p class="FAQ-Question"> How accurate are my results?</p>
                        </div>
                        <div id="resultsFAQAnswer2">
                            <p class="FAQ-Answer">Soli’s Solar and Solar + Battery models are formulated based on up to date statistics and research available for the solar energy industry in Ontario. Results will be most accurate and custom to you when your specific data is inputted, instead of Soli’s default values. Soli intends to provide homeowners with a starting point in terms of solar energy investment.</p>
                        </div>
                    </div>
                    <div id="resultsFAQSectionContainer3">
                        <div id="resultsFAQIcon3">
                            <img src={faqArrowDown} alt="faq-arrow" id="resultsDownFAQArrow3" onClick={() => { openResultsSection3(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="resultsUpFAQArrow3" onClick={() => { closeResultsSection3(); }} />
                        </div>
                        <div id="resultsFAQQuestion3">
                            <p class="FAQ-Question"> What data sources does Soli use? </p>
                        </div>
                        <div id="resultsFAQAnswer3">
                            <ul class="FAQ-Answer">
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Electricity rates to forecast the cost of electricity overtime from the <a href="https://www.oeb.ca/" target="_blank">Ontario Energy Board</a></li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Forecasted seasonal fluctuations in energy demand calculated using data from <a href="https://www.ieso.ca/en/" target="_blank">Independent Electricity System Operator</a> and <a href="https://energyusecalculator.com/electricity_furnace.htm" target="_blank">Energy Use Calculator</a></li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Location based capacity factors to distinguish between the solar irradiation  patterns from the <a href="https://www.nrel.gov/" target="_blank">National Renewable Energy Laboratory’s (NREL), System Advisor Model (SAM)</a></li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Nominal capacity, deterioration rate, cost and surface area of solar panels from <a href="https://hespv.ca/?SID=d81se886l39eei0l2io124jkj4" target="_blank">HESPV</a></li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Fixed cost of installation to incorporate into the initial investment from <a href="https://hespv.ca/?SID=d81se886l39eei0l2io124jkj4" target="_blank">HESPV</a></li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Panel maintenance costs to incorporate into the cost of electricity with solar energy from <a href="https://www.homeadvisor.com/cost/cleaning-services/solar-panel-maintenance/" target="_blank">HomeAdvisor</a></li>
                                <li style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>Canadian inflation rates from Knoema</li>
                            </ul>
                        </div>
                    </div>
                    <div id="resultsFAQSectionContainer4">
                        <div id="resultsFAQIcon4">
                            <img src={faqArrowDown} alt="faq-arrow" id="resultsDownFAQArrow4" onClick={() => { openResultsSection4(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="resultsUpFAQArrow4" onClick={() => { closeResultsSection4(); }} />
                        </div>
                        <div id="resultsFAQQuestion4">
                            <p class="FAQ-Question"> Why are the results from Soli different from other quotes I’ve received? </p>
                        </div>
                        <div id="resultsFAQAnswer4">
                            <p class="FAQ-Answer"> Soli takes a customized approach to your results, which are optimized to meet your unique specifications, while focusing on reducing your electricity costs overtime. The requirements of your solar system are dependent on a number of factors, and while Soli uses reliable sources for measures and approximations, other providers may use different data. In addition, energy patterns and availability of government incentive programs may change overtime, and would impact results.</p>
                        </div>
                    </div>
                    <div id="resultsFAQSectionContainer5">
                        <div id="resultsFAQIcon5">
                            <img src={faqArrowDown} alt="faq-arrow" id="resultsDownFAQArrow5" onClick={() => { openResultsSection5(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="resultsUpFAQArrow5" onClick={() => { closeResultsSection5(); }} />
                        </div>
                        <div id="resultsFAQQuestion5">
                            <p class="FAQ-Question"> Are there any additional costs I can expect? </p>
                        </div>
                        <div id="resultsFAQAnswer5">
                            <p class="FAQ-Answer"> Panel maintenance averages from $3-$10/panel/year and is dependent on the weather, the build-up of dust and debris and the angle of your roof. Soli incorporates the projected maintenance cost over 25 years into your cost savings results over time.</p>
                        </div>
                    </div>

                    <p id="nextSteps"> Next Steps</p>
                    <div id="nextFAQSectionContainer1">
                        <div id="nextFAQIcon1">
                            <img src={faqArrowDown} alt="faq-arrow" id="nextDownFAQArrow1" onClick={() => { openNextSection1(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="nextUpFAQArrow1" onClick={() => { closeNextSection1(); }} />
                        </div>
                        <div id="nextFAQQuestion1">
                            <p class="FAQ-Question"> Where can I find an installer and how much would it cost?</p>
                        </div>
                        <div id="nextFAQAnswer1">
                            <p class="FAQ-Answer"> Soli is not affiliated with any solar installation companies in Ontario, however a quick Google search will point you to installation companies servicing your region. A recent NREL report revealed that homeowners who receive multiple quotes can save 10% or more, so make sure to consider a few installation options. </p>
                        </div>
                    </div>
                    <div id="nextFAQSectionContainer2">
                        <div id="nextFAQIcon2">
                            <img src={faqArrowDown} alt="faq-arrow" id="nextDownFAQArrow2" onClick={() => { openNextSection2(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="nextUpFAQArrow2" onClick={() => { closeNextSection2(); }} />
                        </div>
                        <div id="nextFAQQuestion2">
                            <p class="FAQ-Question"> Which side of the roof do I install the solar panels?</p>
                        </div>
                        <div id="nextFAQAnswer2">
                            <p class="FAQ-Answer">If you’ve decided you want solar panels, installers will help determine the best placement for them based on the specifics of your home. Orientation, shading and roof-structure are all things to consider. </p>
                            <br></br>
                            <p class="FAQ-Answer" style={{ marginLeft: '2.5rem', marginBottom: '0.8rem' }}><strong>Orientation:</strong> East/west facing roofs provide more space for panels, in comparison to north/south roofs, where panels can only be installed on the south side.</p>
                            <p class="FAQ-Answer" style={{ marginLeft: '2.5rem', marginBottom: '0.8rem' }}><strong>Shading:</strong> For optimal sunlight, panels should be placed on unshared parts of the roof.</p>
                            <p class="FAQ-Answer" style={{ marginLeft: '2.5rem', marginBottom: '0.8rem' }}><strong>Roof Structure:</strong> While panels can be installed on angled roofs, a flat, open roof is ideal.</p>
                        </div>
                    </div>
                    <div id="nextFAQSectionContainer3">
                        <div id="nextFAQIcon3">
                            <img src={faqArrowDown} alt="faq-arrow" id="nextDownFAQArrow3" onClick={() => { openNextSection3(); }} />
                            <img src={faqArrowUp} alt="faq-arrow" id="nextUpFAQArrow3" onClick={() => { closeNextSection3(); }} />
                        </div>
                        <div id="nextFAQQuestion3">
                            <p class="FAQ-Question"> Can I install solar panels myself?</p>
                        </div>
                        <div id="nextFAQAnswer3">
                            <p class="FAQ-Answer"> A DIY installation is an option homeowners can consider, and usually reduces the cost of installation. Following a DIY guide will provide guidance as to how the components fit together, but the process requires heavy lifting, working at heights, and a significant time investment. Further, the electrical hookup at the end requires the expertise of an electrician, so many DIYers opt to hire a professional for this part. Check out this <a href="https://www.youtube.com/watch?v=BMt6qZV4QZ0&feature=emb_title" target="_blank">video</a> to see if a DIY installation is right for you. </p>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <p id="FAQFooter">
                        <div class="footer">
                            <p class="footer-left">
                                <a>SoliⒸ2021</a> &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                <a>Management Engineering Capstone Design Project</a>
                            </p>
                        </div>
                    </p>
                    <p id="footerbuffer"> buffer space </p>
                </div>
            </div>
        )
    }
}

export default SolarFAQ

