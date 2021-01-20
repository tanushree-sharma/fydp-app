import React, { Component } from 'react'
import graphic from '../homePageGraphic.png'

console.log(graphic)

class mainHomepage extends Component {
    render() {
        return (
        <div id="main">
            {/* Your Html/JSX code goes here */}
            <h1 id="mainText">Unlock your potential </h1>
            <h1 id="mainText"> solar savings</h1>
            <p id="mainSubText"> Streamlining the decision making process for </p>
            <p id="mainSubText"> residential solar energy investement </p>
            
            <form action="/form">
                <button type="submit" id="startButton"> Start Saving </button>
            </form>

            <img src={graphic} alt ="graphic" id="mainGraphic"/>
        </div>
        )
    }
}

export default mainHomepage