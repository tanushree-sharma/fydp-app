import React, { Component } from 'react'
import graphic from '../question_img.png'
import warning from '../warning.png'
import Footer from '../components/Footer'

class startSaving extends Component {
    render() {
        window.onbeforeunload = function () {
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

            if (document.getElementById('checkbox').checked == true){
                document.getElementById('budget1').disabled = true;
            }
            if (document.getElementById('checkbox-battery').checked == true){
                document.getElementById('budget2').disabled = true;
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

        // if no budget checkbox is selected
        function lockBudget (){
            // if checkbox is checked (button is disabled)
            if (document.getElementById('budget1').disabled == true){
                document.getElementById('budget1').disabled = false;
                document.getElementById('budget1').value = "";
            }
            else {
                document.getElementById('budget1').disabled = true;
                document.getElementById('budget1').value = "---";
            }
        }

        // if no budget checkbox is selected
        function lockBudget2 (){
            // if checkbox is checked (button is disabled)
            if (document.getElementById('budget2').disabled == true){
                document.getElementById('budget2').disabled = false;
                document.getElementById('budget2').value = "";
            }
            else {
                document.getElementById('budget2').disabled = true;
                document.getElementById('budget2').value = "---";
            }
        }

        // buttons for increasing and decreasing budget input on Solar form
        function increaseValue() {
            if (document.getElementById('budget1').disabled == true) {
                document.getElementById('budget1').value = "---";
            }
            else {
                var value = parseInt(document.getElementById('budget1').value, 10);
                value = isNaN(value) ? 0 : value;
                value = value + 500;
                document.getElementById('budget1').value = value;
            }
        }
        function decreaseValue() {
            if (document.getElementById('budget1').disabled == true) {
                document.getElementById('budget1').value = "---";
            }
            else {
                var value = parseInt(document.getElementById('budget1').value, 10);
                value = isNaN(value) ? 0 : value;
                if (value >= 500) {
                    value = value - 500;
                }
                document.getElementById('budget1').value = value;
            }
        }
        // buttons for increasing and decreasing budget input on Solar+Battery form
        function increaseValue2() {
            if (document.getElementById('budget2').disabled == true) {
                document.getElementById('budget2').value = "---";
            }
            else {
                var value = parseInt(document.getElementById('budget2').value, 10);
                value = isNaN(value) ? 0 : value;
                value = value + 500;
                document.getElementById('budget2').value = value;
            }
        }
        function decreaseValue2() {
            if (document.getElementById('budget2').disabled == true) {
                document.getElementById('budget2').value = "---";
            }
            else {
                var value = parseInt(document.getElementById('budget2').value, 10);
                value = isNaN(value) ? 0 : value;
                if (value >= 500) {
                    value = value - 500;
                }
                document.getElementById('budget2').value = value;
            }
        }

        // check values for Solar form and alert user of default values being used
        function checkSolarValues() {
            var modal = document.getElementById("solarModal");
            var update = document.getElementById("solar-update");
            var nav = document.getElementById("navigation");

            var postalCode = document.forms["solar"]["postal_code"].value;
            console.log(postalCode)
            var roofSize = document.forms["solar"]["roof_size"].value;
            var elecUsage = document.forms["solar"]["elec-usage"].value;
            var month = document.forms["solar"]["month"].value;
            var heating = document.forms["solar"]["heating-type"].value;
            var budget = document.forms["solar"]["budget"].value;

            // check if postal code is within our database          
            var codes = ['L1S', 'L1T', 'L1Z', 'P0R', 'L9K', 'L9G', 'L4M', 'L4N', 'K8R', 'K8P', 'K8N', 'L1C', 'L1B', 'L6Z', 'L6X', 'L6T', 'L6S', 'L6V', 'L6Y', 'L6R', 'L6P', 'L6W', 'N3P', 'N3S', 'N3T', 'N3V', 'N3R', 'L7P', 'L7T', 'L7N', 'L7S', 'L7L', 'L7R', 'L7M', 'N3E', 'N1S', 'N3H',
                'N3C', 'N1P', 'N1R', 'N1T', 'N7M', 'N7L', 'K6K', 'K6H', 'K6J', 'M3B', 'M3C', 'M3M', 'M3L', 'L0N', 'M4G', 'M4B', 'M4H', 'M4C', 'M9R', 'M9W', 'M8Z', 'M8W', 'M8Y', 'M9B', 'M9V', 'M8X', 'M9A', 'M9P', 'M9C', 'K0H', 'K1B', 'K1X', 'K1C', 'K1W', 'K1T', 'K1J', 'P3B', 'P3E',
                'P3C', 'P3A', 'P3Y', 'P3L', 'P3P', 'P3N', 'P3G', 'N1E', 'N1G', 'N1L', 'N1K', 'N1H', 'N1C', 'L0P', 'L9E', 'L9B', 'L8N', 'L8J', 'L8W', 'L8P', 'L8H', 'L9C', 'L8T', 'L8S', 'L8G', 'L8R', 'L8M', 'L8V', 'L8E', 'L8K', 'L9A', 'L8L', 'K2W', 'K2K', 'K2L', 'K2V', 'K2M', 'K2T',
                'K7K', 'K7L', 'K7P', 'K7M', 'N2B', 'N2P', 'N2G', 'N2A', 'N2H', 'N2R', 'N2K', 'N2E', 'N2C', 'N2M', 'N2N', 'N9H', 'N9J', 'L0L', 'L0K', 'K7K', 'K7L', 'K7P', 'K7M', 'N2B', 'N2P', 'N2G', 'N2A', 'N2H', 'N2R', 'N2K', 'N2E', 'N2C', 'N2M', 'N2N', 'N9H', 'N9J', 'L0L', 'L0K',
                'N6M', 'L6G', 'L6C', 'L3R', 'L6E', 'L3S', 'L6B', 'L3P', 'L5B', 'L4Z', 'L4Y', 'L5A', 'L5H', 'L5R', 'L5E', 'L5J', 'L5T', 'L4T', 'L5M', 'L4V', 'L5C', 'L5V', 'L5W', 'L4X', 'L5S', 'L5P', 'L4W', 'L5G', 'L5K', 'L5L', 'L5N', 'K2G', 'K2R', 'K2E', 'K2H', 'K2J', 'L3X', 'L3Y',
                'L2G', 'L2H', 'L2E', 'L2J', 'P0B', 'P0H', 'P0A', 'P1B', 'P1C', 'P1A', 'M6A', 'M2K', 'M3A', 'M9L', 'M3H', 'M3J', 'M9M', 'M2J', 'M6L', 'M2P', 'M2H', 'M2L', 'M6B', 'M3N', 'L6H', 'L6M', 'L6L', 'L6K', 'L6J', 'L9W', 'L9V', 'L1H', 'L1K', 'L1J', 'L1L', 'L1G', 'K1L', 'K1K',
                'K2A', 'K1R', 'K1Y', 'K1V', 'K1G', 'K2P', 'K1A', 'K1Z', 'K2C', 'K1N', 'K1H', 'K1M', 'K2B', 'K1S', 'K1P', 'P0G', 'P0E', 'P0C', 'K8B', 'K8A', 'K9L', 'K9H', 'K9J', 'K9K', 'K0L', 'L1X', 'L1Y', 'L1V', 'L1W', 'K0J', 'L4S', 'L4B', 'L4E', 'L4C', 'N7W', 'N7T', 'N7X', 'N7S',
                'N7V', 'P6C', 'P6B', 'P6A', 'M1J', 'M1N', 'M1X', 'M1V', 'M1R', 'M1B', 'M1L', 'M1P', 'M1E', 'M1S', 'M1C', 'M1T', 'M1K', 'M1M', 'M1W', 'M1H', 'M1G', 'L2W', 'L2R', 'L2S', 'L2T', 'L2P', 'L2V', 'L2M', 'L2N', 'N5P', 'N5R', 'N8V', 'N8N', 'P7A', 'P7G', 'P7C', 'P7B', 'P7E',
                'P7K', 'P7J', 'P0K', 'P0J', 'P4P', 'P4N', 'P4R', 'M5W', 'M4E', 'M6K', 'M5N', 'M4T', 'M4V', 'M4S', 'M5T', 'M5B', 'M6P', 'M4L', 'M4Y', 'M6S', 'M5X', 'M6G', 'M5J', 'M5C', 'M5S', 'M5A', 'M4K', 'M5L', 'M6R', 'M5K', 'M7Y', 'M6H', 'M5G', 'M5R', 'M6J', 'M4X', 'M4R', 'M4P',
                'M4J', 'M5E', 'M3K', 'M5V', 'M4N', 'M4M', 'M4W', 'M5P', 'M5H', 'M8V', 'N2V', 'N2J', 'N2L', 'N2T', 'L3C', 'L3B', 'L1N', 'L1R', 'L1P', 'L1M', 'M2R', 'M2M', 'M2N', 'N8S', 'N9E', 'N8P', 'N8Y', 'N8W', 'N8X', 'N9B', 'N8R', 'N9G', 'N9C', 'N8T', 'N9A', 'L4H', 'L4L', 'N4T',
                'N4S', 'N4V', 'M6N', 'M6E', 'M6M', 'M6C', 'L7J', 'N9V', 'L4G', 'P0M', 'K7N', 'N5H', 'L9R', 'K7S', 'N3A', 'L9J', 'L9X', 'L7E', 'L7A', 'N0H', 'P1L', 'N0E', 'L3Z', 'K6V', 'L7C', 'K7C', 'L9Y', 'K4C', 'L7K', 'K9A', 'L4K', 'K4B', 'N3W', 'P0L', 'L1E', 'N4B', 'N1A', 'P8N',
                'L9H', 'L0B', 'K6T', 'P5E', 'L0R', 'P5A', 'N0L', 'N3B', 'N0R', 'N8M', 'N1M', 'L2A', 'P9A', 'K7G', 'N0C', 'L7G', 'N7A', 'L3M', 'L0M', 'P1P', 'N4N', 'P1H', 'K6A', 'N0G', 'L9N', 'N5C', 'L9S', 'P5N', 'P0X', 'N2Z', 'P2N', 'K0M', 'N0P', 'L7B', 'P9N', 'L4P', 'N9Y', 'P0Y',
                'K9V', 'N0N', 'N4W', 'N8H', 'P0P', 'N4L', 'L4R', 'K4M', 'N0M', 'L9T', 'L6A', 'K7R', 'L0S', 'K0A', 'L0J', 'P7L', 'M4A', 'M5M', 'P0V', 'L0G', 'L3V', 'K1E', 'K4A', 'N4K', 'N0J', 'N3L', 'K7H', 'N0K', 'K8H', 'L9L', 'P2A', 'L3K', 'N5L', 'L9M', 'L1A', 'K0B', 'M7A', 'K0K',
                'P0W', 'K4K', 'K7V', 'K4R', 'K0G', 'N3Y', 'K0E', 'K2S', 'N5A', 'P2B', 'P8T', 'K0C', 'N4Z', 'K7A', 'N4X', 'L4A', 'N7G', 'N9K', 'N4G', 'L3T', 'P0N', 'L4J', 'K8V', 'L9P', 'N8A', 'N0B', 'L0A', 'L0H', 'L9Z', 'L0C', 'L0V', 'L8B', 'N0A', 'M9N'];
            var defaultPostalUsed = false;
            if (postalCode.length > 0 && !codes.includes(postalCode.toUpperCase())) {
                defaultPostalUsed = true;
            }

            var warning = document.getElementById("default-warning");
            var title = document.getElementById("solarerror-title");
            // case #1: empty inputs and default postal code not used
            if ((postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") && defaultPostalUsed == false) {
                document.getElementById("modal-text").innerHTML = "You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.";
                title.innerHTML = "Incomplete Field(s)";
                warning.classList.add("one-error");
                warning.classList.remove("multiple-errors");

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
            // case #2: no empty inputs, default postal code is used
            if (!(postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") && defaultPostalUsed == true) {
                document.getElementById("modal-text").innerHTML = "The postal code entered cannot be found in Ontario as of 2020. Please update with a neighbouring postal code, or a default postal code from Toronto (M5W) will be used.";
                warning.classList.add("one-error");
                warning.classList.remove("multiple-errors");
                title.innerHTML = "Invalid Postal Code";

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
            // case #3: empty inputs and default postal code is used
            if ((postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") && defaultPostalUsed == true) {
                document.getElementById("modal-text").innerHTML = "The postal code entered cannot be found in Ontario as of 2020. Please update with a neighbouring postal code, or a default postal code from Toronto (M5W) will be used. <br><br> You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.";
                warning.classList.remove("one-error");
                warning.classList.add("multiple-errors");
                title.innerHTML = "Incomplete Field(s)";

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
            for (i = 0; i < postalCode.length; i++) {
                split[i] = postalCode.charAt([i]);
            }

            // checking if user input is a valid postal code
            if (postalCode.length == 3 && isLetter(split[0]) == true && isNumber(split[1]) == true && isLetter(split[2]) == true) {
                console.log("this is a valid postal code");
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is NOT a valid postal code");
                postalCodeBox.classList.add("invalid");
                postalError = true;
                numErrors++;
            }
            if (postalCode.length == 0) {
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var roofSizeBox = document.getElementById("roof-size-input1");
            var roofSize = document.forms["solar"]["roof_size"].value;
            var roofError = false;

            // checking to see if user inputted a number for solar roof size
            if (Number(roofSize) && Number(roofSize) > 0 && !roofSize.includes(".")) {
                console.log("this is a valid roof size");
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid roof size");
                roofSizeBox.classList.add("invalid");
                roofError = true;
                numErrors++;
            }
            if (roofSize.length == 0) {
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var usageBox = document.getElementById("elec-usage-input1");
            var usage = document.forms["solar"]["elec-usage"].value;
            var usageError = false;

            // checking to see if user inputted a number for solar electricy usage
            if (Number(usage) && Number(usage) >= 0 && !usage.includes(".")) {
                console.log("this is a valid usage amount");
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid usage amount");
                usageBox.classList.add("invalid");
                usageError = true;
                numErrors++;
            }
            if (usage.length == 0) {
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var budgetBox = document.getElementById("budget1");
            var budget = document.forms["solar"]["budget"].value;
            var budgetError = false;

            // checking to see if user inputted a number greater than the cost of one panel + fixed costs
            if (budget == "---"){
                budgetError = false;
            }
            else if (Number(budget) && Number(budget) >= 0 && !budget.includes(".")) {
                console.log("this is a valid budget amount");
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid budget amount");
                budgetBox.classList.add("invalid");
                budgetError = true;
                numErrors++;
            }
            if (budget.length == 0) {
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors - 1);
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
                    errorText.innerHTML += "Postal Code needs to be in the form of 'M5W'. <br><br>"
                }
                // checking for roof size error
                if (roofSizeBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Roof Size needs to be a whole number that is greater than 0 Sqft. <br><br>"
                }
                // checking for usage error
                if (usageBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Electricity Usage needs to be a whole number that is greater than 0 kWh. <br><br>"
                }
                // checking for budget error
                if (budgetBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Budget needs to be a whole number that is greater than $0."
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

            // check if postal code is within our database          
            var codes = ['L1S', 'L1T', 'L1Z', 'P0R', 'L9K', 'L9G', 'L4M', 'L4N', 'K8R', 'K8P', 'K8N', 'L1C', 'L1B', 'L6Z', 'L6X', 'L6T', 'L6S', 'L6V', 'L6Y', 'L6R', 'L6P', 'L6W', 'N3P', 'N3S', 'N3T', 'N3V', 'N3R', 'L7P', 'L7T', 'L7N', 'L7S', 'L7L', 'L7R', 'L7M', 'N3E', 'N1S', 'N3H',
                'N3C', 'N1P', 'N1R', 'N1T', 'N7M', 'N7L', 'K6K', 'K6H', 'K6J', 'M3B', 'M3C', 'M3M', 'M3L', 'L0N', 'M4G', 'M4B', 'M4H', 'M4C', 'M9R', 'M9W', 'M8Z', 'M8W', 'M8Y', 'M9B', 'M9V', 'M8X', 'M9A', 'M9P', 'M9C', 'K0H', 'K1B', 'K1X', 'K1C', 'K1W', 'K1T', 'K1J', 'P3B', 'P3E',
                'P3C', 'P3A', 'P3Y', 'P3L', 'P3P', 'P3N', 'P3G', 'N1E', 'N1G', 'N1L', 'N1K', 'N1H', 'N1C', 'L0P', 'L9E', 'L9B', 'L8N', 'L8J', 'L8W', 'L8P', 'L8H', 'L9C', 'L8T', 'L8S', 'L8G', 'L8R', 'L8M', 'L8V', 'L8E', 'L8K', 'L9A', 'L8L', 'K2W', 'K2K', 'K2L', 'K2V', 'K2M', 'K2T',
                'K7K', 'K7L', 'K7P', 'K7M', 'N2B', 'N2P', 'N2G', 'N2A', 'N2H', 'N2R', 'N2K', 'N2E', 'N2C', 'N2M', 'N2N', 'N9H', 'N9J', 'L0L', 'L0K', 'K7K', 'K7L', 'K7P', 'K7M', 'N2B', 'N2P', 'N2G', 'N2A', 'N2H', 'N2R', 'N2K', 'N2E', 'N2C', 'N2M', 'N2N', 'N9H', 'N9J', 'L0L', 'L0K',
                'N6M', 'L6G', 'L6C', 'L3R', 'L6E', 'L3S', 'L6B', 'L3P', 'L5B', 'L4Z', 'L4Y', 'L5A', 'L5H', 'L5R', 'L5E', 'L5J', 'L5T', 'L4T', 'L5M', 'L4V', 'L5C', 'L5V', 'L5W', 'L4X', 'L5S', 'L5P', 'L4W', 'L5G', 'L5K', 'L5L', 'L5N', 'K2G', 'K2R', 'K2E', 'K2H', 'K2J', 'L3X', 'L3Y',
                'L2G', 'L2H', 'L2E', 'L2J', 'P0B', 'P0H', 'P0A', 'P1B', 'P1C', 'P1A', 'M6A', 'M2K', 'M3A', 'M9L', 'M3H', 'M3J', 'M9M', 'M2J', 'M6L', 'M2P', 'M2H', 'M2L', 'M6B', 'M3N', 'L6H', 'L6M', 'L6L', 'L6K', 'L6J', 'L9W', 'L9V', 'L1H', 'L1K', 'L1J', 'L1L', 'L1G', 'K1L', 'K1K',
                'K2A', 'K1R', 'K1Y', 'K1V', 'K1G', 'K2P', 'K1A', 'K1Z', 'K2C', 'K1N', 'K1H', 'K1M', 'K2B', 'K1S', 'K1P', 'P0G', 'P0E', 'P0C', 'K8B', 'K8A', 'K9L', 'K9H', 'K9J', 'K9K', 'K0L', 'L1X', 'L1Y', 'L1V', 'L1W', 'K0J', 'L4S', 'L4B', 'L4E', 'L4C', 'N7W', 'N7T', 'N7X', 'N7S',
                'N7V', 'P6C', 'P6B', 'P6A', 'M1J', 'M1N', 'M1X', 'M1V', 'M1R', 'M1B', 'M1L', 'M1P', 'M1E', 'M1S', 'M1C', 'M1T', 'M1K', 'M1M', 'M1W', 'M1H', 'M1G', 'L2W', 'L2R', 'L2S', 'L2T', 'L2P', 'L2V', 'L2M', 'L2N', 'N5P', 'N5R', 'N8V', 'N8N', 'P7A', 'P7G', 'P7C', 'P7B', 'P7E',
                'P7K', 'P7J', 'P0K', 'P0J', 'P4P', 'P4N', 'P4R', 'M5W', 'M4E', 'M6K', 'M5N', 'M4T', 'M4V', 'M4S', 'M5T', 'M5B', 'M6P', 'M4L', 'M4Y', 'M6S', 'M5X', 'M6G', 'M5J', 'M5C', 'M5S', 'M5A', 'M4K', 'M5L', 'M6R', 'M5K', 'M7Y', 'M6H', 'M5G', 'M5R', 'M6J', 'M4X', 'M4R', 'M4P',
                'M4J', 'M5E', 'M3K', 'M5V', 'M4N', 'M4M', 'M4W', 'M5P', 'M5H', 'M8V', 'N2V', 'N2J', 'N2L', 'N2T', 'L3C', 'L3B', 'L1N', 'L1R', 'L1P', 'L1M', 'M2R', 'M2M', 'M2N', 'N8S', 'N9E', 'N8P', 'N8Y', 'N8W', 'N8X', 'N9B', 'N8R', 'N9G', 'N9C', 'N8T', 'N9A', 'L4H', 'L4L', 'N4T',
                'N4S', 'N4V', 'M6N', 'M6E', 'M6M', 'M6C', 'L7J', 'N9V', 'L4G', 'P0M', 'K7N', 'N5H', 'L9R', 'K7S', 'N3A', 'L9J', 'L9X', 'L7E', 'L7A', 'N0H', 'P1L', 'N0E', 'L3Z', 'K6V', 'L7C', 'K7C', 'L9Y', 'K4C', 'L7K', 'K9A', 'L4K', 'K4B', 'N3W', 'P0L', 'L1E', 'N4B', 'N1A', 'P8N',
                'L9H', 'L0B', 'K6T', 'P5E', 'L0R', 'P5A', 'N0L', 'N3B', 'N0R', 'N8M', 'N1M', 'L2A', 'P9A', 'K7G', 'N0C', 'L7G', 'N7A', 'L3M', 'L0M', 'P1P', 'N4N', 'P1H', 'K6A', 'N0G', 'L9N', 'N5C', 'L9S', 'P5N', 'P0X', 'N2Z', 'P2N', 'K0M', 'N0P', 'L7B', 'P9N', 'L4P', 'N9Y', 'P0Y',
                'K9V', 'N0N', 'N4W', 'N8H', 'P0P', 'N4L', 'L4R', 'K4M', 'N0M', 'L9T', 'L6A', 'K7R', 'L0S', 'K0A', 'L0J', 'P7L', 'M4A', 'M5M', 'P0V', 'L0G', 'L3V', 'K1E', 'K4A', 'N4K', 'N0J', 'N3L', 'K7H', 'N0K', 'K8H', 'L9L', 'P2A', 'L3K', 'N5L', 'L9M', 'L1A', 'K0B', 'M7A', 'K0K',
                'P0W', 'K4K', 'K7V', 'K4R', 'K0G', 'N3Y', 'K0E', 'K2S', 'N5A', 'P2B', 'P8T', 'K0C', 'N4Z', 'K7A', 'N4X', 'L4A', 'N7G', 'N9K', 'N4G', 'L3T', 'P0N', 'L4J', 'K8V', 'L9P', 'N8A', 'N0B', 'L0A', 'L0H', 'L9Z', 'L0C', 'L0V', 'L8B', 'N0A', 'M9N'];
            var defaultPostalUsed = false;
            if (postalCode.length > 0 && !codes.includes(postalCode.toUpperCase())) {
                defaultPostalUsed = true;
            }

            var warning = document.getElementById("defaultbattery-warning");
            var title = document.getElementById("batteryerror-title");
            // case #1: empty inputs and default postal code not used
            if ((postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") && defaultPostalUsed == false) {
                document.getElementById("batterymodal-text").innerHTML = "You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.";
                title.innerHTML = "Incomplete Field(s)";
                warning.classList.add("one-error");
                warning.classList.remove("multiple-errors");

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
            // case #2: no empty inputs, default postal code is used
            if (!(postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") && defaultPostalUsed == true) {
                document.getElementById("batterymodal-text").innerHTML = "The postal code entered cannot be found in Ontario as of 2020. Please update with a neighbouring postal code, or a default postal code from Toronto (M5W) will be used.";
                title.innerHTML = "Invalid Postal Code";
                warning.classList.add("one-error");
                warning.classList.remove("multiple-errors");

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
            // case #3: empty inputs and default postal code is used
            if ((postalCode == "" || roofSize == "" || elecUsage == "" || month == "" || heating == "" || budget == "") && defaultPostalUsed == true) {
                document.getElementById("batterymodal-text").innerHTML = "The postal code entered cannot be found in Ontario as of 2020. Please update with a neighbouring postal code, or a default postal code from Toronto (M5W) will be used. <br><br> You have left one or more fields blank. For best results, please update all fields with your information. Click continue if you are comfortable with the default value(s) being used.";
                title.innerHTML = "Incomplete Field(s)";
                warning.classList.remove("one-error");
                warning.classList.add("multiple-errors");

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
        // clicking continue triggers generate button
        // this is done so form fields pass to backend
        function triggerGenerate1(){
            document.getElementById('results-button1').click()
        }

        function triggerGenerate2(){
            document.getElementById('results-button2').click()
        }

        function checkingBatteryInputs() {
            var postalCodeBox = document.getElementById("postal-code-input2");
            var resultsButton = document.getElementById("results-button2");
            var postalCode = document.forms["battery"]["postal_code"].value;
            var postalError = false;

            var numErrors = 0;

            var split = [];
            var i;
            for (i = 0; i < postalCode.length; i++) {
                split[i] = postalCode.charAt([i]);
            }

            // checking if user input is a valid postal code
            if (postalCode.length == 3 && isLetter(split[0]) == true && isNumber(split[1]) == true && isLetter(split[2]) == true) {
                console.log("this is a valid postal code");
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is NOT a valid postal code");
                postalCodeBox.classList.add("invalid");
                postalError = true;
                numErrors++;
            }
            if (postalCode.length == 0) {
                postalCodeBox.classList.remove("invalid");
                postalError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var roofSizeBox = document.getElementById("roof-size-input2");
            var roofSize = document.forms["battery"]["roof_size"].value;
            var roofError = false;

            // checking to see if user inputted a number for solar roof size and that there is enough space for at least one panel (20sqft)
            if (Number(roofSize) && Number(roofSize) >= 0 && !roofSize.includes(".")) {
                console.log("this is a valid roof size");
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid roof size");
                roofSizeBox.classList.add("invalid");
                roofError = true;
                numErrors++;
            }
            if (roofSize.length == 0) {
                roofSizeBox.classList.remove("invalid");
                roofError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var usageBox = document.getElementById("elec-usage-input2");
            var usage = document.forms["battery"]["elec-usage"].value;
            var usageError = false;

            // checking to see if user inputted a number for solar electricy usage is greater than the output of one panel (315w per hour = 0.315 Kw per hour => 0.315 * 5.5 = 1.73KW/Day = 52KW/month)
            if (Number(usage) && Number(usage) >= 0 && !usage.includes(".")) {
                console.log("this is a valid usage amount");
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid usage amount");
                usageBox.classList.add("invalid");
                usageError = true;
                numErrors++;
            }
            if (usage.length == 0) {
                usageBox.classList.remove("invalid");
                usageError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var storageBox = document.getElementById("storage-capacity-input");
            var storage = document.forms["battery"]["storage_capacity"].value;
            var storageError = false;

            // checking to see if user inputted a number for battery capacity that is greater or equal to 0
            if (Number(storage) && Number(storage) >= 0) {
                console.log("this is a valid storage amount");
                storageBox.classList.remove("invalid");
                storageError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid usage amount");
                storageBox.classList.add("invalid");
                storageError = true;
                numErrors++;
            }
            if (storage.length == 0) {
                storageBox.classList.remove("invalid");
                storageError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var dodBox = document.getElementById("dod-input");
            var dod = document.forms["battery"]["dod"].value;
            var dodError = false;
            // checking to see if user inputted a number for dod that is greater or equal to 0
            if (Number(dod) && Number(dod) >= 0 && Number(dod) <= 100) {
                console.log("this is a valid storage amount");
                dodBox.classList.remove("invalid");
                dodError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid usage amount");
                dodBox.classList.add("invalid");
                dodError = true;
                numErrors++;
            }
            if (dod.length == 0) {
                dodBox.classList.remove("invalid");
                dodError = false;
                numErrors = Math.max(0, numErrors - 1);
            }

            var budgetBox = document.getElementById("budget2");
            var budget = document.forms["battery"]["budget"].value;
            var budgetError = false;

            // checking to see if user inputted a number greater than the cost of one panel + fixed costs
            if (budget == "---"){
                budgetError = false;
            }
            else if (Number(budget) && Number(budget) >= 0 && !budget.includes(".")) {
                console.log("this is a valid budget amount");
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors - 1);
            } else {
                console.log("this is not a valid budget amount");
                budgetBox.classList.add("invalid");
                budgetError = true;
                numErrors++;
            }
            if (budget.length == 0) {
                budgetBox.classList.remove("invalid");
                budgetError = false;
                numErrors = Math.max(0, numErrors - 1);
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
                    errorText.innerHTML += "Postal Code needs to be in the form of 'M5W'. <br><br>"
                }
                // checking for roof size error
                if (roofSizeBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Roof Size needs to be a whole number that is greater than 0 Sqft. <br><br>"
                }
                // checking for usage error
                if (usageBox.classList.contains("invalid")) {
                    errorText.innerHTML += "Electricity Usage needs to be a whole number that is greater than 0 kWh. <br><br>"
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
                    errorText.innerHTML += "Budget needs to be a whole number that is greater than $0."
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

        function changeSolarMonthBlack() {
            var dropdown = document.getElementById("month-input1");
            dropdown.style.color = "black";
        }
        function changeSolarHeatingBlack() {
            var dropdown = document.getElementById("heating-input1");
            dropdown.style.color = "black";
        }
        function changeBatteryMonthBlack() {
            var dropdown = document.getElementById("month-input2");
            dropdown.style.color = "black";
        }
        function changeBatteryHeatingBlack() {
            var dropdown = document.getElementById("heating-input2");
            dropdown.style.color = "black";
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
                        <p><b>Tip:</b> estimate your roof size by dividing square footage of your home by the number of storeys.</p>
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
                            <input class="field-inputs" id="postal-code-input1" type="text" name="postal_code" placeholder="M5W" maxlength="3" onBlur={() => { checkingSolarInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="roof-size" > Roof Size (Sqft):  </p>
                            <input class="field-inputs" id="roof-size-input1" type="text" name="roof_size" placeholder="1000" onBlur={() => { checkingSolarInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>
                            <input class="field-inputs" id="elec-usage-input1" type="text" name="elec-usage" placeholder="750" onBlur={() => { checkingSolarInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="month-title" > Month:</p>
                            <select name="month" id="month-input1" class="dropdown-inputs" onChange={() => { changeSolarMonthBlack(); }} >
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
                            <select name="heating-type" id="heating-input1" class="dropdown-inputs" onChange={() => { changeSolarHeatingBlack(); }}>
                                <option value="" disabled selected hidden>Select heating</option>
                                <option value="1">Electric</option>
                                <option value="2">Natural Gas</option>
                            </select>
                        </label>

                        <label>
                            <p class="field-titles" id="budget1title" > Budget (CAD):</p>
                            <input class="field-inputs-budget" id="budget1" type="text" name="budget" placeholder="15000" onBlur={() => { checkingSolarInputs(); }} />
                        </label>

                        <label class="no-budget"> No budget <input type="checkbox" name="checkbox" id="checkbox" value="notchecked" onClick={() => { lockBudget(); }}/> <label for="checkbox"></label><span class="checkbox" ></span> </label>

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
                        <p><b>Tip:</b> estimate your roof size by dividing square footage of your home by the number of storeys.</p>
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
                            <input class="field-inputs" id="postal-code-input2" type="text" name="postal_code" placeholder="M5W" maxlength="3" onBlur={() => { checkingBatteryInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="roof-size" > Roof Size (Sqft):  </p>
                            <input class="field-inputs" id="roof-size-input2" type="text" name="roof_size" placeholder="1000" onBlur={() => { checkingBatteryInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>
                            <input class="field-inputs" id="elec-usage-input2" type="text" name="elec-usage" placeholder="750" onBlur={() => { checkingBatteryInputs(); }} />
                        </label>


                        <label>
                            <p class="field-titles" id="month-title" > Month:</p>
                            <select name="month" id="month-input2" class="dropdown-inputs" onChange={() => { changeBatteryMonthBlack(); }}>
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
                            <select name="heating-type" id="heating-input2" class="dropdown-inputs" onChange={() => { changeBatteryHeatingBlack(); }}> 
                                <option value="" disabled selected hidden>Select heating</option>
                                <option value="1">Electric</option>
                                <option value="2">Natural Gas</option>
                            </select>
                        </label>

                        <label>
                            <p class="field-titles" id="storage-capacity" > Storage Capacity (kWh):</p>
                            <input class="field-inputs" id="storage-capacity-input" type="text" name="storage_capacity" placeholder="13" onBlur={() => { checkingBatteryInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="dod" > Depth of Discharge:</p>
                            <input class="field-input-dod" id="dod-input" type="text" name="dod" placeholder="80" maxlength="3" onBlur={() => { checkingBatteryInputs(); }} />
                        </label>

                        <label>
                            <p class="field-titles" id="budget2title" > Budget (CAD):</p>
                            <input class="field-inputs-budget" id="budget2" type="text" name="budget" placeholder="15000" onBlur={() => { checkingBatteryInputs(); }} />
                        </label>

                        <label class="no-budget-battery"> No budget <input type="checkbox" name="checkbox-battery" id="checkbox-battery" value="notchecked" onClick={() => { lockBudget2(); }}/> <label for="checkbox"></label><span class="checkbox" ></span> </label>

                        <div id="generate-box2" onMouseOver={() => { finalCheckBatteryErrors(); }}>
                            <input type="submit" class="resultsButton" id="results-button2" value="Generate Results" onMouseOver={() => { checkBatteryValues(); }} />
                        </div>
                        <div class="whitesquare"></div>

                        <form>
                            <div class="value-button" id="decrease2" onClick={() => { decreaseValue2(); }} value="Decrease Value">-</div>
                            <div class="value-button" id="increase2" onClick={() => { increaseValue2(); }} value="Increase Value">+</div>
                            <p id="percentage">%</p>
                            <p id="dollar-sign2">$</p>

                        </form>
                    </form>
                </div>

                <div class="footer-ss">
                    <Footer />
                </div>

                <p id="footerspace"> buffer space </p>

                <div id="solarModal" class="modal">
                    <div class="error-content">
                        <div id="modal-top-border"></div>
                        <p id="solarerror-title"> </p>
                        <div class="error-container">
                            <div id="left">
                                <img src={warning} class="one-error" id="default-warning" alt="warning"></img>
                            </div>
                            <div id="right">
                                <p id="modal-text"></p>
                            </div>
                            <div id="error-buttondiv">
                                <button class="modalSubmit" id="solar-update"> Update fields </button>
                                    <button id="continue"  onClick={() => { triggerGenerate1(); }}> Continue</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div id="batteryModal" class="modal">
                    <div class="error-content">
                        <div id="modal-top-border"></div>
                        <p id="batteryerror-title">  </p>
                        <div class="error-container">
                            <div id="left">
                                <img src={warning} class="one-error" id="defaultbattery-warning" alt="warning"></img>
                            </div>
                            <div id="right">
                                <p id="batterymodal-text"></p>
                            </div>
                            <div id="error-buttondiv">
                                <button class="modalSubmit" id="battery-update"> Update fields </button>
                                   <button id="continue" onClick={() => { triggerGenerate2(); }}> Continue</button>
                           </div>
                        </div>
                    </div>
                </div>

                {/* default values modal */}
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