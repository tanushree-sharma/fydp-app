import React, { Component } from 'react';
import logo from '../logo.png';

class Navbar extends Component {
    render() {

        window.onload = function() {
            var currentUrl = window.location.pathname;
            var home = "/";
            var form = "/start-saving";
            var faq = "/faq";
            var about = "/about";
            var homeID = document.getElementById("home");
            var formID = document.getElementById("form");
            var faqID = document.getElementById("faq");
            var aboutID = document.getElementById("about");

            console.log(currentUrl);
            if (currentUrl.localeCompare(form) == 0) {
                console.log("form");
                homeID.classList.remove("selected");
                formID.classList.add("selected");
                faqID.classList.remove("selected");
                aboutID.classList.remove("selected");
            } else if (currentUrl.localeCompare(faq) == 0) {
                console.log("faq");
                homeID.classList.remove("selected");
                formID.classList.remove("selected");
                faqID.classList.add("selected");
                aboutID.classList.remove("selected");
            } else if (currentUrl.localeCompare(about) == 0) {
                console.log("about");
                homeID.classList.remove("selected");
                formID.classList.remove("selected");
                faqID.classList.remove("selected");
                aboutID.classList.add("selected");
            } else {
                console.log("home");
                homeID.classList.add("selected");
                formID.classList.remove("selected");
                faqID.classList.remove("selected");
                aboutID.classList.remove("selected");
            }
        }

        return (
            <div class="sticky">
                <div class="navs" id="navigation">
                    <a href="/"> <img src={logo} id="logo" alt="logo"></img> </a>
                    <ul class="nav-right">
                        <li><a href="/" id="home">Home</a></li>
                        <li><a href="/start-saving" id="form">Start Saving</a></li>
                        <li><a href="/faq" id="faq">Solar FAQ</a></li>
                        <li><a href="/about" id="about">About Us</a></li>   
                    </ul>
                </div>
            </div>
        );
    }
}


export default Navbar