import React, { Component } from 'react'
import graphic from '../question_img.png'
import warning from '../warning.png'
import Footer from '../components/Footer';

class startSaving extends Component {

    render() {

        // switching between tabs
        var tabs = document.getElementsByClassName('Tab');
        window.addEventListener('load', function () {
            // switching tab if returning from battery results page
            var whichForm = localStorage.getItem("whichForm")
            var solarTab = document.getElementById("tabs1");
            var batteryTab = document.getElementById("tabs2");

            console.log(whichForm);
            if (whichForm == "battery") {
                solarTab.classList.remove("active");
                batteryTab.classList.add("active");
                document.getElementById('tabs-1').style.display = 'none';
                document.getElementById('tabs1').style.fontWeight = 400;
                document.getElementById('tabs-2').style.display = 'block';
                document.getElementById('tabs2').style.fontWeight = 600;
            }

            Array.prototype.forEach.call(tabs, function (tab) {
                tab.addEventListener('click', setActiveClass);
            });
        });
        function setActiveClass(evt) {
            Array.prototype.forEach.call(tabs, function (tab) {
                tab.classList.remove('active');
            });

            evt.currentTarget.classList.add('active');
        }
        function showTab(selected, total) {
            var i;
            for (i = 1; i <= total; i += 1) {
                document.getElementById('tabs-' + i).style.display = 'none';
                document.getElementById('tabs' + i).style.fontWeight = 400;
            }
            document.getElementById('tabs-' + selected).style.display = 'block';
            document.getElementById('tabs' + selected).style.fontWeight = 600;
        }

        // buttons for increasing and decreasing budget input on Solar form
        function increaseValue() {
            var value = parseInt(document.getElementById('budget1').value, 10);
            value = isNaN(value) ? 0 : value;
            value = value + 500;
            document.getElementById('budget1').value = value;
        }
        function decreaseValue() {
            var value = parseInt(document.getElementById('budget1').value, 10);
            value = isNaN(value) ? 0 : value;
            if (value >= 500) {
                value = value - 500;
            }
            document.getElementById('budget1').value = value;
        }
        // buttons for increasing and decreasing budget input on Solar+Battery form
        function increaseValue2() {
            var value = parseInt(document.getElementById('budget2').value, 10);
            value = isNaN(value) ? 0 : value;
            value = value + 500;
            document.getElementById('budget2').value = value;
        }
        function decreaseValue2() {
            var value = parseInt(document.getElementById('budget2').value, 10);
            value = isNaN(value) ? 0 : value;
            if (value >= 500) {
                value = value - 500;
            }
            document.getElementById('budget2').value = value;
        }

        // check values for Solar form and alert user of default values being used
        function checkSolarValues() {
            var modal = document.getElementById("solarModal");
            var update = document.getElementById("solar-update");

            var postalCode = document.forms["solar"]["postal_code"].value;
            var roofSize = document.forms["solar"]["roof_size"].value;
            var elecUsage = document.forms["solar"]["elec-usage"].value;
            var month = document.forms["solar"]["month"].value;
            var heating = document.forms["solar"]["heating-type"].value;
            var budget = document.forms["solar"]["budget"].value;


            if (postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") {
                modal.style.display = "block";
                update.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }
        // check values for Solar form and alert user of default values being used
        function checkBatteryValues() {
            var modal = document.getElementById("batteryModal");
            var update = document.getElementById("battery-update");

            var postalCode = document.forms["battery"]["postal_code"].value;
            var roofSize = document.forms["battery"]["roof_size"].value;
            var elecUsage = document.forms["battery"]["elec-usage"].value;
            var month = document.forms["battery"]["month"].value;
            var heating = document.forms["battery"]["heating-type"].value;
            var batteryCap = document.forms["battery"]["storage_capacity"].value;
            var dod = document.forms["battery"]["dod"].value;
            var budget = document.forms["battery"]["budget"].value;


            if (postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || batteryCap == "" || dod == "" || budget == "") {
                modal.style.display = "block";
                update.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }

        return (
            <div class="Panel">
                <nav>
                    <ul class="Tabs">
                        <li class="Tabs__tab active Tab" id="tabs1" onClick={() => { showTab(1, 2); }}><a href="javascript:;">Solar</a></li>
                        <li class="Tabs__tab Tab" id="tabs2" onClick={() => { showTab(2, 2); }}><a href="javascript:;">Solar + Battery</a></li>
                        <hr id="tab-underline"></hr>
                        <li class="Tabs__presentation-slider" role="presentation"></li>
                    </ul>
                </nav>


                <p id="solar-subtext"> I don’t own a home battery </p>
                <p id="battery-subtext"> I own a home battery </p>
                <p id="form-desc"> The information you provide will help determine the best solar system specifications for your home.</p>
                <p id="form-desc2"> In the case where you are not able to retrieve a field, we will use a default value for the analysis.</p>

                {/* {/* Solar Form */}

                <div class="Panel__body tabContent" id="tabs-1">

                    <p class="formSectionTitles" id="home-specs" >Home Specs</p>
                    <p class="formSectionTitles" id="energy-usage" >Energy Usage</p>
                    <p class="formSectionTitles" id="initial-inv1" >Initial Investment</p>
                    <p id="postal-text">We only need the first 3 digits</p>
                    <div class="help-tip" id="q1">
                        <p><b>Tip:</b> estimate your roof size by dividing sqaure footage of your home by the number of storeys.</p>
                    </div>
                    <div class="help-tip" id="q2">
                        <p>Select the month your electricity bill is from.</p>
                    </div>
                    <div class="help-tip" id="q3">
                        <p>Input the amount of your total monthly usage as displayed on your electrcity bill for the month.</p>
                    </div>

                    <form action="/solar-results" name="solar" method="POST" class="userform">
                        <label>
                            <p class="field-titles" id="postal-code" > Postal Code:  </p>
                            <input class="field-inputs" id="postal-code-input1" type="text" name="postal_code" placeholder="M3N" />
                        </label>

                        <label>
                            <p class="field-titles" id="roof-size" > Roof Size (Sqft):  </p>
                            <input class="field-inputs" id="roof-size-input1" type="text" name="roof_size" placeholder="2000" />
                        </label>

                        <label>
                            <p class="field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>
                            <input class="field-inputs" id="elec-usage-input1" type="text" name="elec-usage" placeholder="750" />
                        </label>



                        <label>
                            <p class="field-titles" id="month-title" > Month:</p>
                            <select name="month" id="month-input1" class="dropdown-inputs" required >
                                <option value="" disabled hidden selected>Select month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </label>

                        <label>
                            <p class="field-titles" id="heating-type-title" > Type of Heating:</p>
                            <select name="heating-type" id="heating-input1" class="dropdown-inputs" required>
                                <option value="" disabled selected hidden>Select heating</option>
                                <option value="1">Electric</option>
                                <option value="2">Natural Gas</option>
                            </select>
                        </label>

                        <label>
                            <p class="field-titles" id="budget1title" > Budget (CAD):</p>
                            <input class="field-inputs-budget" id="budget1" type="text" name="budget" placeholder="10000" />
                        </label>

                        <input type="submit" class="resultsButton" id="results-button1" value="Generate Results" onMouseOver={() => { checkSolarValues(); }} />

                        <form>
                            <div class="value-button" id="decrease" onClick={() => { decreaseValue(); }} value="Decrease Value">-</div>
                            <div class="value-button" id="increase" onClick={() => { increaseValue(); }} value="Increase Value">+</div>
                            <p id="dollar-sign1">$</p>
                        </form>
                    </form>
                </div> 

                {/* {/* Solar + Battery Form */}
                <div class="Panel__body tabContent" id="tabs-2">

                    <p class="formSectionTitles" id="home-specs" >Home Specs</p>
                    <p class="formSectionTitles" id="energy-usage" >Energy Usage</p>
                    <p class="formSectionTitles" id="initial-inv2" >Initial Investment</p>
                    <p class="formSectionTitles" id="battery-specs" >Battery Specs</p>
                    <p id="postal-text">We only need the first 3 digits</p>

                    <div class="help-tip" id="q1">
                        <p><b>Tip:</b> estimate your roof size by dividing sqaure footage of your home by the number of storeys.</p>
                    </div>
                    <div class="help-tip" id="q2">
                        <p>Select the month your electricity bill is from.</p>
                    </div>
                    <div class="help-tip" id="q3">
                        <p>Input the amount of your total monthly usage as displayed on your electrcity bill for the month.</p>
                    </div>
                    <div class="help-tip" id="q4">
                        <p>What is the nameplate storage capacity of your home battery?</p>
                    </div>
                    <div class="help-tip" id="q5">
                        <p>The DoD should be listed under your battery specifications.</p>
                    </div>

                    <form action="/solarbattery-results" method="POST" name="battery" class="userform">
                        <label>
                            <p class="field-titles" id="postal-code" > Postal Code:  </p>
                            <input class="field-inputs" id="postal-code-input2" type="text" name="postal_code" placeholder="M3N" />
                        </label>

                        <label>
                            <p class="field-titles" id="roof-size" > Roof Size (Sqft):  </p>
                            <input class="field-inputs" id="roof-size-input2" type="text" name="roof_size" placeholder="2000" />
                        </label>

                        <label>
                            <p class="field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>
                            <input class="field-inputs" id="elec-usage-input2" type="text" name="elec-usage" placeholder="750" />
                        </label>


                        <label>
                            <p class="field-titles" id="month-title" > Month:</p>
                            <select name="month" id="month-input1" class="dropdown-inputs" required>
                                <option value="" disabled hidden selected>Select month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </label>


                        <label>
                            <p class="field-titles" id="heating-type-title" > Type of Heating:</p>
                            <select name="heating-type" id="heating-input1" class="dropdown-inputs" required>
                                <option value="" disabled selected hidden>Select heating</option>
                                <option value="1">Electric</option>
                                <option value="2">Natural Gas</option>
                            </select>
                        </label>

                        <label>
                            <p class="field-titles" id="storage-capacity" > Storage Capacity (kWh):</p>
                            <input class="field-inputs" id="storage-capacity-input" type="text" name="storage_capacity" placeholder="13" />
                        </label>

                        <label>
                            <p class="field-titles" id="dod" > Depth of Discharge:</p>
                            <input class="field-input-dod" id="dod-input" type="text" name="dod" placeholder="80" />
                        </label>

                        <label>
                            <p class="field-titles" id="budget2title" > Budget (CAD):</p>
                            <input class="field-inputs-budget" id="budget2" type="text" name="budget" placeholder="10000" />
                        </label>


                        <input type="submit" class="resultsButton" id="results-button2" value="Generate Results" onMouseOver={() => { checkBatteryValues(); }} />
                        <div class="whitesquare"></div>

                        <form>
                            <div class="value-button" id="decrease2" onClick={() => { decreaseValue2(); }} value="Decrease Value">-</div>
                            <div class="value-button" id="increase2" onClick={() => { increaseValue2(); }} value="Increase Value">+</div>
                            <p id="percentage">%</p>
                            <p id="dollar-sign2">$</p>

                        </form>
                    </form>
                </div>

                <div id="solarModal" class="modal">
                    <div class="modal-content">
                        <div id="modal-top-border"></div>
                        <img src={warning} id="warning" alt="warning"></img>
                        <p id="modal-title"> Incomplete fields </p>
                        <p id="modal-text"> You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.</p>
                        <div id="buttondiv"></div>
                        <form action="/solar-results" method="POST">
                            <button id="continue"> Continue</button>
                        </form>
                        <button class="modalSubmit" id="solar-update"> Update fields </button>
                    </div>
                </div>
                <div id="batteryModal" class="modal">
                    <div class="modal-content">
                        <div id="modal-top-border"></div>
                        <img src={warning} id="warning" alt="warning"></img>
                        <p id="modal-title"> Incomplete fields </p>
                        <p id="modal-text"> You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.</p>
                        <div id="buttondiv"></div>
                        <form action="/solarbattery-results" method="POST">
                            <button id="continue"> Continue</button>
                        </form>
                        <button class="modalSubmit" id="battery-update"> Update fields </button>
                    </div>
                </div>
               
                <div class="footer-ss">
                <Footer />

                </div> 

            </div>

         
        )
        
        
    }  
    
}







export default startSaving;