import React, {Component} from "react";
// import ReactDOM from "react-dom";

// import Trail from "../Trail/index";
import './data.css';
import Trail from "../Trail";

//funkcyjny
const Filters = ({handleSelectChange}) =>  (
            <select name="difficulty" onChange={handleSelectChange} className="select-difficulty-button" id="navigationfilter">
                <option>Choose trail difficulty</option>
                <option value="blue">Blue</option>
                <option value="blueBlack">Blueblack</option>
                <option value="black">Black</option>
                <option value="greenBlue">Greenblue</option>
            </select>
        );


export default Filters;

