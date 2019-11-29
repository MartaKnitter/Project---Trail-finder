import React, {Component} from "react";
import './aboutus.css';

import aboutUsImg from './person-on-a-bridge-near-a-lake-747964.jpg';


class AboutUs extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="container box" id="navigationabout">
                        <div className="img-size"><img src={aboutUsImg} alt="" className="image-lake"/></div>
                        <div className="text">
                            <h1 className="title">100,000+ trails. 10 million explorers. Endless memories.</h1>
                            <p className="aboutus-paragraph"> The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</p>
                            <h1 className="subtitle">Select a trail option:</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default AboutUs;