import React, { Component } from 'react'
import {Link} from 'react-scroll'
import graphic from '../homepageGraphic2.png'
import carbonFootprint from '../carbonFootprintIcon2.png'
import customAnalysis from '../customAnalysisIcon.png'
import longTermSavings from '../longTermSavingsIcon.png'
import integrateStorage from '../integrateStorageIcon.png'
import scrollArrow from '../ScrollArrow.png';
import Footer from '../../../src/components/Footer';

console.log(graphic)
console.log(carbonFootprint)
console.log(customAnalysis)
console.log(longTermSavings)

class mainHomepage extends Component {
    render() {
        var defaultForm = "solar";
        localStorage.setItem("whichForm", defaultForm);
    }
}

export default mainHomepage;