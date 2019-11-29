import React from "react";


const Stars = ({stars}) => (
    <span>{
        Array.from({length: stars}).map((el,index) =>
            <span key={index} className="star"><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/FA_star.svg" alt=""/></span>)
    }
    </span>);


export default Stars;