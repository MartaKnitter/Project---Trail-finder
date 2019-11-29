import React, {Component} from "react";
// import ReactDOM from "react-dom";

// import Trail from "../Trail/index";
import './data.css';
import Trail from "../Trail";

//funkcyjny
const FiltersLenght = ({handleSelectChange}) => (
    <select name="lenght" onChange={handleSelectChange} className="select-difficulty-button">
        <option>Choose trail lenhgt</option>
        <option value="0">to 2 km</option>
        <option value="1">from 2 to 4 km</option>
        <option value="2">from 4 to 8 km</option>
        <option value="3">above 8 km</option>
    </select>
);


export default FiltersLenght;

