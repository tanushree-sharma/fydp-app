import React, { Component } from 'react'
import { browserHistory } from 'react-router';

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

                <p class="Panel__body tabContent" id="tabs-1"> Solar Form </p>
                <p class="Panel__body tabContent" id="tabs-2"> Solar + Battery Form </p>

            </div>
        )
    }
}

export default startSaving