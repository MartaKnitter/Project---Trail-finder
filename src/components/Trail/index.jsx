import React, {Component} from "react";
// import img from './altitude-clouds-cold-daylight-417173.jpg';
import './trail.css';
import Stars from '../Stars';
import icon1 from './distance.png'
import icon2 from './thumb.png'
import icon3 from './weather.png'

//funkcyjny
class Trail extends Component {
    render() {
        const {trail} = this.props;
        return (
            <div className="container-elements width-33">
                    <img src={trail.imgSmallMed} alt="" className="image"/>
                    <h1 className="name-header">{trail.name}</h1>
                    <h2 className="summary-header">{trail.summary}</h2>
                <div className="icons">
                    <div className="rate">
                        <img src={icon2} alt=""/>
                        <p><Stars stars={parseInt(trail.stars,10)}/></p>
                    </div>
                    <div className="lenght">
                        <img src={icon1} alt=""/>
                        <p>{trail.length} km</p>
                    </div>
                    <div className="weather">
                        <img src={icon3} alt=""/>
                        <p>{trail.conditionStatus}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trail;