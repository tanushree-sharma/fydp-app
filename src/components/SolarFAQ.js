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
                <div id="faqDiv">
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

                        <div label='What is the average lifespan of a solar energy system?'>
                            <p>Solar panels have an average lifespan of 25-30 years, which is why Soli presents cost-saving results covering a span of a conservative 25 years. It is likely that panels will remain functioning beyond 25 years, however the yearly rate of deterioration will reduce their effectiveness over time.</p>
                        </div>

                        <div label='Are there any government rebates for solar investments?'>
                            <p>As of February 2020, under Ontario’s current provincial government, there are no active rebate programs for homeowners with solar energy systems.</p>
                        </div>

                        <div label='What are pros and cons of solar energy?'>
                            <p>As of February 2020, under Ontario’s current provincial government, there are no active rebate programs for homeowners with solar energy systems.</p>
                        </div>
                    </Accordion>
                    
                    <p id="myData"> My Data </p>
                    <Accordion allowMultipleOpen>
                        <div label='How is the data I input used to complete the solar analysis?'>
                            <p><strong>Postal Code</strong></p>
                            <p>Solar irradiation differs based on location. Your postal code helps Soli determine the expected sun hours in your region each season.</p>
                            <br></br>

                            <p><strong>Roof Size</strong></p>
                            <p>Depending on the size of your home, the optimal size of a solar installation may be  limited by the size of your roof.</p>
                            <br></br>

                            <p><strong>Electricity Usage and Month of Usage</strong></p>
                            <p>The amount of electricity your home uses in a given month is important in determining the size of your system and seasonal fluctuations in your electricity demand. Soli ensures that the amount of energy generated from solar panels does not exceed your electricity demand when it's at its highest. Soli also uses this electricity usage value to forecast the cost of electricity. Based on projections from Ontario’s Financial Accountability Office, yearly electricity costs are expected to increase at a rate of approximately 2% per year.</p>
                            <br></br>

                            <p><strong>Type of Heating</strong></p>
                            <p>The type of heating in your home (electric or natural gas) dictates the seasonal fluctuations in electricity demand. For example, the value of a homeowners electricity demand from a spring or fall month would be inflated to project winter demand if their home runs on electric heating, but would remain consistent if running on natural gas.</p>
                            <br></br>

                            <p><strong>Storage Capacity</strong></p>
                            <p>The battery capacity controls how much space is available to store excess energy generated by the solar panels.</p>
                            <br></br>

                            <p><strong>Battery Depth of Discharge (DoD)</strong></p>
                            <p>The DoD further constrains the storage capacity of the battery, and indicates the percentage of the battery available for discharge, relative to the entire capacity.</p>
                            <br></br>

                            <p><strong>Budget</strong></p>
                            <p>Soli recommends an installation size with an initial investment cost that does not exceed your budget.</p>
                        </div>

                        <div label='Can I trust Soli with my data?'>
                           <p>Absolutely! Soli only uses your data to generate your custom analysis. None of the informaiton you provide will be stored or used elsewhere.</p>
                        </div>
                    </Accordion>

                    <p id="myResults"> My Results </p>
                    <Accordion allowMultipleOpen>
                        <div label='What do each of the results sections mean?'>
                            <p><strong>Recommended System Specification</strong></p>
                            <p>The data you provide is run through an optimization model that seeks to minimize cost spent on electricity over 25 years. The model outputs the optimal size of installation, and Soli calculates the resulting initial investment, and payback period.</p>
                            <br></br>

                            <p><strong>Savings</strong></p>
                            <p>Soli calculates the difference between your projected cost of electricity overtime, with and without solar. The sum of the difference over 25 years amounts to the savings figure over a 25 year time horizon. Your savings/month in each season, averaged over 25 years are also available.</p>
                            <br></br>

                            <p><strong>Environmental Impact</strong></p>
                            <p>Using solar energy in place of electricity from the grid will reduce your carbon emissions overtime. Soli quantifies this in terms of metric tonnes of carbon, and the equivalent in tree plantings.</p>
                            <br></br>
                            </div>

                        <div label='How accurate are my results?'>
                           <p>Soli’s Solar and Solar + Battery models are formulated based on up to date statistics and research available for the solar energy industry in Ontario. Results will be most accurate and custom to you when your specific data is inputted, instead of Soli’s default values. Soli intends to provide homeowners with a starting point in terms of solar energy investment.</p>
                        </div>

                        <div label='What data sources does Soli use?'>
                           <p>text</p>
                        </div>

                        <div label='Why are the results from Soli different from other quotes I’ve received?'>
                           <p>Soli takes a customized approach to your results, which are optimized to meet your unique specifications, while focusing on reducing your electricity costs overtime. The requirements of your solar system are dependent on a number of factors, and while Soli uses reliable sources for measures and approximations, other providers may use different data. In addition, energy patterns and availability of government incentive programs may change overtime, and would impact results.</p>
                        </div>

                        <div label='Are there any additional costs I can expect?'>
                           <p>Panel maintenance averages from $3-$10/panel/year and is dependent on the weather, the build-up of dust and debris and the angle of your roof. Soli incorporates the projected maintenance cost over 25 years into your cost savings results over time.</p>
                        </div>
                    </Accordion>

                    <p id="myResults"> Next Steps </p>
                    <Accordion allowMultipleOpen>
                        <div label='Where can I find an installer and how much would it cost?'>
                            <p>Soli is not affiliated with any solar installation companies in Ontario, however a quick Google search will point you to installation companies servicing your region. A recent NREL report revealed that homeowners who receive multiple quotes can save 10% or more, so make sure to consider a few installation options.</p>
                        </div>

                        <div label='Which side of the roof do I install the solar panels?'>
                           <p>If you’ve decided you want solar panels, installers will help determine the best placement for them based on the specifics of your home. Orientation, shading and roof-structure are all things to consider. </p>
                            <br></br>
                            <p><strong>Orientation:</strong> East/West facing roofs provide more space for panels, in comparison to north/south roofs, where panels can only be installed on the south side.</p>
                            <p><strong>Shading:</strong> For optimal sunlight, panels should be placed on unshared parts of the roof.</p>
                            <p><strong>Roof Structure:</strong> While panels can be installed on angled roofs, a flat, open roof is ideal.</p>
                        </div>

                        <div label='Can I install solar panels myself?'>
                           <p>A DIY installation is an option homeowners can consider, and usually reduces the cost of installation. Following a DIY guide will provide guidance as to how the components fit together, but the process requires heavy lifting, working at heights, and a significant time investment. Further, the electrical hookup at the end requires the expertise of an electrician, so many DIYers opt to hire a professional for this part. Check out this video to see if a DIY installation is right for you.</p>
                        </div>
                    </Accordion>
                </div>

            </div>
        )
    }
}

export default SolarFAQ

