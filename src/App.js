import React, {Component} from "react";

import './App.css';
import Header from "./components/Header/index";
import Data from "./components/Data/index";
import Navigation from "./components/Navigation/index";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";


class App extends Component {
    state = {
        trails: [],
    };

    fetchTrails = () => {
        const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=100&key=200643499-44644bc81e56ad05e301faa96c26db54';
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ trails: data.trails }))
            .catch(function(error) {
                console.log(error)
            });
    };

    componentDidMount() {
        this.fetchTrails();
    }

    render() {
        return (
            <>
                <Navigation />
                <Header />
                <AboutUs />
                <Data />
                <ContactForm />
            </>
        )
    }
}

export default App;
