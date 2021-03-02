import React, { Component } from 'react'
import graphic from '../question_img.png'
import warning from '../warning.png'

class startSaving extends Component {
    render() {
        window.onbeforeunload = function() {
            var defaultForm = "solar";
            localStorage.setItem("whichForm", defaultForm);
            var solarTab = document.getElementById("tabs1");
            var batteryTab = document.getElementById("tabs2");

            solarTab.classList.add("active");
            batteryTab.classList.remove("active");
            document.getElementById('tabs-2').style.display = 'none';
            document.getElementById('tabs2').style.fontWeight = 400;
            document.getElementById('tabs-1').style.display = 'block';
            document.getElementById('tabs1').style.fontWeight = 600;
        }

        // switching between tabs
        var tabs = document.getElementsByClassName('Tab');
        window.addEventListener('load', function () {
            // switching tab if returning from battery results page
            var whichForm = localStorage.getItem("whichForm")
            var solarTab = document.getElementById("tabs1");
            var batteryTab = document.getElementById("tabs2");
            window.scrollTo(0, 0);

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
            var nav = document.getElementById("navigation"); 

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
        function isLetter(char) {
            return (/[a-zA-Z]/).test(char);
        }
        function isNumber(char) {
            return (/[0-9]/).test(char);
        }
        function checkingSolarInputs() {
            var postalCodeBox = document.getElementById("postal-code-input1");
            var resultsButton = document.getElementById("results-button1");
            var postalCode = document.forms["solar"]["postal_code"].value;
            var postalError = false;
            var numErrors = 0;

            var split = [];
            var i;
            for (i=0; i<postalCode.length; i++) {
                split[i] = postalCode.charAt([i]);
            }

            // checking if user input is a valid postal code
            if (postalCode.length == 3 && isLetter(split[0]) == true && isNumber(split[1]) == true && isLetter(split[2]) == true) {
                console.log("this is a valid postal code");
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is NOT a valid postal code");
                postalCodeBox.classList.add("invalid");
                postalError = true;
                numErrors++;
            }
            if (postalCode.length == 0) {
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors-1);
            }

            var roofSizeBox = document.getElementById("roof-size-input1");
            var roofSize = document.forms["solar"]["roof_size"].value;
            var roofError = false;

            // checking to see if user inputted a number for solar roof size
            if (Number(roofSize) && Number(roofSize) > 0) {
                console.log("this is a valid roof size");
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid roof size");
                roofSizeBox.classList.add("invalid");
                roofError = true;
                numErrors++;
            }
            if (roofSize.length == 0) {
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors-1);
            }

            var usageBox = document.getElementById("elec-usage-input1");
            var usage = document.forms["solar"]["elec-usage"].value;
            var usageError = false;

            // checking to see if user inputted a number for solar electricy usage
            if (Number(usage) && Number(usage) >= 0) {
                console.log("this is a valid usage amount");
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid usage amount");
                usageBox.classList.add("invalid");
                usageError = true;
                numErrors++;
            }
            if (usage.length == 0) {
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors-1);
            }            

            var budgetBox = document.getElementById("budget1");
            var budget = document.forms["solar"]["budget"].value;
            var budgetError = false;

            // checking to see if user inputted a number greater than the cost of one panel + fixed costs
            if (Number(budget) && Number(budget) >= 0) {
                console.log("this is a valid budget amount");
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid budget amount");
                budgetBox.classList.add("invalid");
                budgetError = true;
                numErrors++;
            }
            if (budget.length == 0) {
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors-1);
            }  

            if (postalError == true || roofError == true || usageError == true || budgetError == true) {
                resultsButton.classList.add("disabled-button");
            } else {
                resultsButton.classList.remove("disabled-button");
            }

            var warning = document.getElementById("error-warning");
            // moving the warning icon down as the size of the div increases
            if (numErrors == 3) {
                warning.classList.remove("other-errors");
                warning.classList.add("three-errors");
                warning.classList.remove("four-errors");
            } else if (numErrors == 4) {
                warning.classList.remove("other-errors");
                warning.classList.remove("three-errors");
                warning.classList.add("four-errors");
            } else {
                warning.classList.add("other-errors");
                warning.classList.remove("three-errors");
                warning.classList.remove("four-errors");
            }
        }

        function finalCheckSolarErrors() {
            console.log("checking errors");
            var errorModal = document.getElementById("errorModal");
            var resultsButton = document.getElementById("results-button1");
            var postalCodeBox = document.getElementById("postal-code-input1");
            var roofSizeBox = document.getElementById("roof-size-input1");
            var usageBox = document.getElementById("elec-usage-input1");
            var budgetBox = document.getElementById("budget1");
            var errorText = document.getElementById("error-text");
            var update = document.getElementById("error-update");

            if (resultsButton.classList.contains("disabled-button")) {
                errorModal.style.display = "block";
                // checking for postal code error
                if (postalCodeBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Postal Code needs to be in the form of 'M3N'. <br><br>"
                }
                // checking for roof size error
                if (roofSizeBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Roof Size needs to be a number greater than 0 Sqft. <br><br>"
                }
                // checking for usage error
                if (usageBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Electricity Usage needs to be a number greater than 0 kWh. <br><br>"
                }
                // checking for budget error
                if (budgetBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Budget needs to be a number greater than $0."
                }
                update.onclick = function () {
                    errorModal.style.display = "none";
                    errorText.innerHTML = "";
                }
                window.onclick = function (event) {
                    if (event.target == errorModal) {
                        errorModal.style.display = "none";
                        errorText.innerHTML = "";
                    }
                }
            }
        }
        // check values for Battery form and alert user of default values being used
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
        function checkingBatteryInputs() {
            var postalCodeBox = document.getElementById("postal-code-input2");
            var resultsButton = document.getElementById("results-button2");
            var postalCode = document.forms["battery"]["postal_code"].value;
            var postalError = false;

            var numErrors = 0;

            var split = [];
            var i;
            for (i=0; i<postalCode.length; i++) {
                split[i] = postalCode.charAt([i]);
            }

            // checking if user input is a valid postal code
            if (postalCode.length == 3 && isLetter(split[0]) == true && isNumber(split[1]) == true && isLetter(split[2]) == true) {
                console.log("this is a valid postal code");
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is NOT a valid postal code");
                postalCodeBox.classList.add("invalid");
                postalError = true;
                numErrors++;
            }
            if (postalCode.length == 0) {
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors-1);
            }

            var roofSizeBox = document.getElementById("roof-size-input2");
            var roofSize = document.forms["battery"]["roof_size"].value;
            var roofError = false;

            // checking to see if user inputted a number for solar roof size and that there is enough space for at least one panel (20sqft)
            if (Number(roofSize) && Number(roofSize) >= 0) {
                console.log("this is a valid roof size");
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid roof size");
                roofSizeBox.classList.add("invalid");
                roofError = true;
                numErrors++;
            }
            if (roofSize.length == 0) {
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors-1);
            }

            var usageBox = document.getElementById("elec-usage-input2");
            var usage = document.forms["battery"]["elec-usage"].value;
            var usageError = false;

            // checking to see if user inputted a number for solar electricy usage is greater than the output of one panel (315w per hour = 0.315 Kw per hour => 0.315 * 5.5 = 1.73KW/Day = 52KW/month)
            if (Number(usage) && Number(usage) >= 0) {
                console.log("this is a valid usage amount");
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid usage amount");
                usageBox.classList.add("invalid");
                usageError = true;
                numErrors++;
            }
            if (usage.length == 0) {
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors-1);
            }            

            var storageBox = document.getElementById("storage-capacity-input");
            var storage = document.forms["battery"]["storage_capacity"].value;
            var storageError = false;

            // checking to see if user inputted a number for battery capacity that is greater or equal to 0
            if (Number(storage) && Number(storage) >= 0) {
                console.log("this is a valid storage amount");
                storageBox.classList.remove("invalid");
                storageError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid usage amount");
                storageBox.classList.add("invalid");
                storageError = true;
                numErrors++;
            }
            if (storage.length == 0) {
                storageBox.classList.remove("invalid");
                storageError = false;
                numErrors = Math.max(0, numErrors-1);
            } 

            var dodBox = document.getElementById("dod-input");
            var dod = document.forms["battery"]["dod"].value;
            var dodError = false;
            // checking to see if user inputted a number for dod that is greater or equal to 0
            if (Number(dod) && Number(dod) >= 0 && Number(dod) <= 100) {
                console.log("this is a valid storage amount");
                dodBox.classList.remove("invalid");
                dodError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid usage amount");
                dodBox.classList.add("invalid");
                dodError = true;
                numErrors++;
            }
            if (dod.length == 0) {
                dodBox.classList.remove("invalid");
                dodError = false;
                numErrors = Math.max(0, numErrors-1);
            } 

            var budgetBox = document.getElementById("budget2");
            var budget = document.forms["battery"]["budget"].value;
            var budgetError = false;

            // checking to see if user inputted a number greater than the cost of one panel + fixed costs
            if (Number(budget) && Number(budget) >= 0) {
                console.log("this is a valid budget amount");
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors-1);
            } else {
                console.log("this is not a valid budget amount");
                budgetBox.classList.add("invalid");
                budgetError = true;
                numErrors++;
            }
            if (budget.length == 0) {
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors-1);
            }  

            if (postalError == true || roofError == true || usageError == true || budgetError == true || storageError == true || dodError == true) {
                resultsButton.classList.add("disabled-button");
            } else {
                resultsButton.classList.remove("disabled-button");
            }

            var warning = document.getElementById("error-warning");
            // moving the warning icon down as the size of the div increases
            if (numErrors == 3) {
                warning.classList.remove("other-errors");
                warning.classList.add("three-errors");
                warning.classList.remove("four-errors");
                warning.classList.remove("five-errors");
                warning.classList.remove("six-errors");
            } else if (numErrors == 4) {
                warning.classList.remove("other-errors");
                warning.classList.remove("three-errors");
                warning.classList.add("four-errors");
                warning.classList.remove("five-errors");
                warning.classList.remove("six-errors");
            } else if (numErrors == 5) {
                warning.classList.remove("other-errors");
                warning.classList.remove("three-errors");
                warning.classList.remove("four-errors");
                warning.classList.add("five-errors");
                warning.classList.remove("six-errors");
            } else if (numErrors == 6) {
                warning.classList.remove("other-errors");
                warning.classList.remove("three-errors");
                warning.classList.remove("four-errors");
                warning.classList.remove("five-errors");
                warning.classList.add("six-errors");
            } else {
                warning.classList.add("other-errors");
                warning.classList.remove("three-errors");
                warning.classList.remove("four-errors");
                warning.classList.remove("five-errors");
                warning.classList.remove("six-errors");
            }
        }

        function finalCheckBatteryErrors() {
            console.log("checking errors");
            var errorModal = document.getElementById("errorModal");
            var resultsButton = document.getElementById("results-button2");
            var postalCodeBox = document.getElementById("postal-code-input2");
            var roofSizeBox = document.getElementById("roof-size-input2");
            var usageBox = document.getElementById("elec-usage-input2");
            var storageBox = document.getElementById("storage-capacity-input");
            var dodBox = document.getElementById("dod-input");
            var budgetBox = document.getElementById("budget2");
            var errorText = document.getElementById("error-text");
            var update = document.getElementById("error-update");

            if (resultsButton.classList.contains("disabled-button")) {
                errorModal.style.display = "block";
                // checking for postal code error
                if (postalCodeBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Postal Code needs to be in the form of 'M3N'. <br><br>"
                }
                // checking for roof size error
                if (roofSizeBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Roof Size needs to be a number greater than 0 Sqft. <br><br>"
                }
                // checking for usage error
                if (usageBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Electricity Usage needs to be a number greater 0 kWh. <br><br>"
                }
                // checking for battery capacity error
                if (storageBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Storage Capacity of the battery must be a number greater than 0 kWh. <br><br>"
                }
                // checking for dod error
                if (dodBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Depth of Discharge of the battery must be a number between 0% and 100%. <br><br>"
                }
                // checking for budget error
                if (budgetBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Budget needs to be a number greated than $0."
                }
                update.onclick = function () {
                    errorModal.style.display = "none";
                    errorText.innerHTML = "";
                }
                window.onclick = function (event) {
                    if (event.target == errorModal) {
                        errorModal.style.display = "none";
                        errorText.innerHTML = "";
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
                        <p>Select the month your electricity <br></br>bill is from.</p>
                    </div>
                    <div class="help-tip" id="q3">
                        <p>Input the amount of your total monthly usage as displayed on your electrcity bill for the month.</p>
                    </div>
                    <div class="help-tip" id="q6">
                        <p> 
                            <b> Tip:</b> The average cost of a residential solar installation is $15,000 - $20,000<sup id="budgetTipNote">*</sup> for a monthly usage of 722 kWh. <br></br>
                            <span id="budgetTipNote"> <sup> * </sup> visit our <a href="/faq">FAQs</a> to learn more about this estimate.</span>
                        </p>
                    </div>

                    

                    <form action="/solar-results" name="solar" method="POST" class="userform">
                        <label>
                            <p class="field-titles" id="postal-code" > Postal Code:  </p>
                            <input class="field-inputs" id="postal-code-input1" type="text" name="postal_code" placeholder="M3N" maxlength="3" onBlur={() => { checkingSolarInputs(); }}/>
                        </label>

                        <label>
                            <p class="field-titles" id="roof-size" > Roof Size (Sqft):  </p>
                            <input class="field-inputs" id="roof-size-input1" type="text" name="roof_size" placeholder="2000" onBlur={() => { checkingSolarInputs(); }}/>
                        </label>

                        <label>
                            <p class="field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>
                            <input class="field-inputs" id="elec-usage-input1" type="text" name="elec-usage" placeholder="750" onBlur={() => { checkingSolarInputs(); }}/>
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
                            <p class="field-titles" id="budget1title" > Budget (CAD):</p>
                            <input class="field-inputs-budget" id="budget1" type="text" name="budget" placeholder="10000" onBlur={() => { checkingSolarInputs(); }}/>
                        </label>


                        <div id="generate-box" onMouseOver={() => { finalCheckSolarErrors(); }}>
                            <input type="submit" class="resultsButton" id="results-button1" value="Generate Results" onMouseOver={() => { checkSolarValues(); }} />
                        </div>
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
                        <p>Select the month your electricity <br></br>bill is from.</p>
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
                    <div class="help-tip" id="q7">
                        <p> 
                        <b> Tip:</b> The average cost of a residential solar installation is $15,000 - $20,000<sup id="budgetTipNote">*</sup> for a monthly usage of 722 kWh. <br></br>
                            <span id="budgetTipNote"> <sup> * </sup> visit our <a href="/faq">FAQs</a> to learn more about this estimate.</span>
                        </p>
                    </div>

                    <form action="/solarbattery-results" method="POST" name="battery" class="userform">
                        <label>
                            <p class="field-titles" id="postal-code" > Postal Code:  </p>
                            <input class="field-inputs" id="postal-code-input2" type="text" name="postal_code" placeholder="M3N" maxlength="3" onBlur={() => { checkingBatteryInputs(); }}/>
                        </label>

                        <label>
                            <p class="field-titles" id="roof-size" > Roof Size (Sqft):  </p>
                            <input class="field-inputs" id="roof-size-input2" type="text" name="roof_size" placeholder="2000" onBlur={() => { checkingBatteryInputs(); }}/>
                        </label>

                        <label>
                            <p class="field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>
                            <input class="field-inputs" id="elec-usage-input2" type="text" name="elec-usage" placeholder="750" onBlur={() => { checkingBatteryInputs(); }}/>
                        </label>


                        <label>
                            <p class="field-titles" id="month-title" > Month:</p>
                            <select name="month" id="month-input2" class="dropdown-inputs" required>
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
                            <select name="heating-type" id="heating-input2" class="dropdown-inputs" required>
                                <option value="" disabled selected hidden>Select heating</option>
                                <option value="1">Electric</option>
                                <option value="2">Natural Gas</option>
                            </select>
                        </label>

                        <label>
                            <p class="field-titles" id="storage-capacity" > Storage Capacity (kWh):</p>
                            <input class="field-inputs" id="storage-capacity-input" type="text" name="storage_capacity" placeholder="13" onBlur={() => { checkingBatteryInputs(); }}/>
                        </label>

                        <label>
                            <p class="field-titles" id="dod" > Depth of Discharge:</p>
                            <input class="field-input-dod" id="dod-input" type="text" name="dod" placeholder="80" maxlength="3" onBlur={() => { checkingBatteryInputs(); }}/>
                        </label>

                        <label>
                            <p class="field-titles" id="budget2title" > Budget (CAD):</p>
                            <input class="field-inputs-budget" id="budget2" type="text" name="budget" placeholder="10000" onBlur={() => { checkingBatteryInputs(); }}/>
                        </label>

                        <div id="generate-box2" onMouseOver={() => { finalCheckBatteryErrors(); }}>
                            <input type="submit" class="resultsButton" id="results-button2" value="Generate Results" onMouseOver={() => { checkBatteryValues(); }} />
                        </div>

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
                        <p id="modal-title"> Incomplete Fields </p>
                        <p id="modal-text"> You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.</p>
                        <div id="buttondiv"></div>
                        <form action="/solarbattery-results" method="POST">
                            <button id="continue"> Continue</button>
                        </form>
                        <button class="modalSubmit" id="battery-update"> Update fields </button>
                    </div>
                </div>
                <div id="errorModal" class="modal">
                    <div class="error-content">
                        <div id="modal-top-border"></div>
                        <p id="error-title"> Invalid Input(s)</p>
                        <div class="error-container">
                            <div id="left">
                                <img src={warning} class="other-errors" id="error-warning" alt="warning"></img>
                            </div>
                            <div id="right">
                                <p id="error-text"></p>
                            </div>
                            <div id="error-buttondiv">
                                <button class="modalSubmit" id="error-update"> Update fields </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default startSaving