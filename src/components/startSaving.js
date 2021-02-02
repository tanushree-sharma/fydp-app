import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import Select from "react-dropdown-select";
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import graphic from '../question_img.png'
import Footer from '../components/Footer';

class startSaving extends Component {
    render() {
        
        var tabs = document.getElementsByClassName('Tab');
        window.addEventListener('load',function(){
            Array.prototype.forEach.call(tabs, function(tab) {
                tab.addEventListener('click', setActiveClass);
            });
        });
    
        function setActiveClass(evt) {
            Array.prototype.forEach.call(tabs, function(tab) {
                tab.classList.remove('active');
            });
            
            evt.currentTarget.classList.add('active');
        }
    
        function showTab(selected, total)
        {
            var i;
          for(i = 1; i <= total; i += 1)
          {
            document.getElementById('tabs-' + i).style.display = 'none';
            document.getElementById('tabs' + i).style.fontWeight = 400; 
          }
          document.getElementById('tabs-' + selected).style.display = 'block';
          document.getElementById('tabs' + selected).style.fontWeight = 600;
        }
        
        // fix back button error by keeping track of how many tab toggles there have been
        // and then go back that number of pages to get back to home
        //https://stackoverflow.com/questions/22641154/javascript-going-back-multiple-times-in-history

            
       

        return (
            <div class="Panel">
                <nav>
                    <ul class="Tabs">
                        <li class="Tabs__tab active Tab" id="tabs1" onClick={() => { showTab(1,2);}}><a href="javascript:;">Solar</a></li>
                        <li class="Tabs__tab Tab" id="tabs2" onClick={() => { showTab(2,2);}}><a href="javascript:;">Solar + Battery</a></li>
                        <hr id="tab-underline"></hr>
                        <li class="Tabs__presentation-slider" role="presentation"></li>
                    </ul>
                </nav>

            
                <p id="solar-subtext"> I don’t own a home battery </p>
                <p id="battery-subtext"> I own a home battery </p>
                <p id="form-desc"> The information you provide will help determine the best solar system specifications for your home.</p>
                <p id="form-desc2"> In the case where you are not able to retrieve a field, we will use a default value for the analysis.</p>
        
        {/* {/* Solar Form */}
               
               <div class ="Panel__body tabContent" id ="tabs-1">

                    <p class = "formSectionTitles" id ="home-sepcs" >Home Specs</p>
                    <p class = "formSectionTitles" id ="energy-usage" >Energy Usage</p>
                    <p class = "formSectionTitles" id ="initial-inv1" >Initial Investment</p>
                    <p id="postal-text">We only need the first 3 digits</p>
               
                    <img src={graphic} alt ="graphic" class ="qGraphic" id="q1"/>
                    <img src={graphic} alt ="graphic" class ="qGraphic" id="q2"/>
                    <img src={graphic} alt ="graphic" class ="qGraphic" id="q3"/>

                    <form>
                        <label> 
                           <p class = "field-titles" id="postal-code" > Postal Code:  </p>  
                              <input class = "field-inputs" id="postal-code"type="text" name="postal_code" placeholder="M3N"/>
                        </label>

                        <label> 
                            <p class = "field-titles" id="roof-size" > Roof Size (Sqft):  </p>   
                             <input class = "field-inputs" id="roof-size"type="text" name="roof_size" placeholder="2000"/>
                        </label>

                        <label> 
                            <p class = "field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>   
                                <input class = "field-inputs" id="elec-usage"type="text" name="elec-usage" placeholder="2000"/>
                            </label>

                        <label> 
                            <p class = "field-titles" id="month" > Month:</p>   
                            <input class = "field-inputs" id="month"type="text" name="month" placeholder="change"/>
                        </label>

                        <label> 
                            <p class = "field-titles" id="heating-type" > Type of Heating:</p>   
                            <input class = "field-inputs" id="heating-type"type="text" name="month" placeholder="change"/>
                        </label>

                        <label> 
                            <p class = "field-titles" id="budget1" > Budget (CAD):</p>   
                            <input class = "field-inputs" id="budget1"type="text" name="budget" placeholder="10000"/>
                        </label>

                        </form>

                        <form action="/results">
                             <button type="submit" class="resultsButton" id="results-button1"> Generate Results </button>
                        </form>


                </div>

    {/* {/* Solar + Battery Form */}

                <div class ="Panel__body tabContent" id ="tabs-2">

                        <p class = "formSectionTitles" id ="home-sepcs" >Home Specs</p>
                        <p class = "formSectionTitles" id ="energy-usage" >Energy Usage</p>
                        <p class = "formSectionTitles" id ="initial-inv2" >Initial Investment</p>
                        <p class = "formSectionTitles" id ="battery-specs" >Battery Specs</p>
                        <p id="postal-text">We only need the first 3 digits</p>

                        <img src={graphic} alt ="graphic" class ="qGraphic" id="q1"/>
                        <img src={graphic} alt ="graphic" class ="qGraphic" id="q2"/>
                        <img src={graphic} alt ="graphic" class ="qGraphic" id="q3"/>
                        <img src={graphic} alt ="graphic" class ="qGraphic" id="q4"/>
                        <img src={graphic} alt ="graphic" class ="qGraphic" id="q5"/>
                        <form>
                            <label> 
                            <p class = "field-titles" id="postal-code" > Postal Code:  </p>  
                                <input class = "field-inputs" id="postal-code"type="text" name="postal_code" placeholder="M3N"/>
                            </label>

                            <label> 
                            <p class = "field-titles" id="roof-size" > Roof Size (Sqft):  </p>   
                            <input class = "field-inputs" id="roof-size"type="text" name="roof_size" placeholder="2000"/>
                            </label>
                            
                            <label> 
                            <p class = "field-titles" id="elec-usage" > Electricity Usage (kWh):  </p>   
                            <input class = "field-inputs" id="elec-usage"type="text" name="elec-usage" placeholder="2000"/>
                            </label>


                            <label> 
                            <p class = "field-titles" id="month" > Month:</p>   
                            <input class = "field-inputs" id="month"type="text" name="month" placeholder="change"/>
                            </label>

                            <label> 
                            <p class = "field-titles" id="heating-type" > Type of Heating:</p>   
                            <input class = "field-inputs" id="heating-type"type="text" name="heating_type" placeholder="change"/>
                            </label>

                
                            <label> 
                            <p class = "field-titles" id="storage-capacity" > Storage Capacity (kWh):</p>   
                            <input class = "field-inputs" id="storage-capacity"type="text" name="storage_capacity" placeholder="2000"/>
                            </label>

                            <label> 
                            <p class = "field-titles" id="dod" > Depth of Discharge:</p>   
                            <input class = "field-inputs" id="dod" type="text" name="dod" placeholder="95"/>
                            </label>

                            <label> 
                            <p class = "field-titles" id="budget2" > Budget (CAD):</p>   
                            <input class = "field-inputs" id="budget2"type="text" name="budget" placeholder="10000"/>
                            </label>
                            </form>

                            <form action="/results">
                             <button type="submit" class="resultsButton"id="results-button2"> Generate Results </button>
                        </form>
                        
                        </div>

                     
            </div>
        )
    }
}

export default startSaving