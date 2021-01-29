import React from 'react';

const Form = () => {

    var tabs = document.getElementsByClassName('Tab');

    Array.prototype.forEach.call(tabs, function(tab) {
        tab.addEventListener('click', setActiveClass);
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
      }
      document.getElementById('tabs-' + selected).style.display = 'block';
    }

    return (
       <div class="Panel">
            <nav>
                <ul class="Tabs">
                    <li class="Tabs__tab active Tab" id="tabs1" onClick={() => { showTab(1,2);}}><a href="#">Solar</a></li>
                    <li class="Tabs__tab Tab" id="tabs2" onClick={() => { showTab(2,2);}}><a href="#">Solar + Battery</a></li>
                    <li class="Tabs__presentation-slider" role="presentation"></li>
                </ul>
            </nav>

            <p class="Panel__body tabContent" id="tabs-1"> Toni</p>
		    <p class="Panel__body tabContent" id="tabs-2"> is the best!! </p>

       </div>
    );
}
 
export default Form;