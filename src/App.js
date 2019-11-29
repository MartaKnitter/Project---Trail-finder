import React, {Component} from "react";

import './App.css';
import Header from "./components/Header/index";
import Filters from "./components/Filters/index";
import FiltersLenght from "./components/FilterLenght/index";
import Navigation from "./components/Navigation/index";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import TrailsList from "./components/TrailsList";


class App extends Component {
    state = {
        trails: [],
        difficultyTrails: [],
        originalTrails: []
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

    // filtrowanie dla wyboru dlugosci szlaku
    handleSelectChangeLength = (event) => {
        const {value} = event.target;
        this.setState({
            result: value
        }, () => {
            this.filterTrailLength(value, this.state.difficultyTrails);
        });

    };

    filterTrailLength = (value, items) => {
        let resultLength;

        switch(value){
            case '0':{
                resultLength = items.filter( el => el.length <= 2);
                break;
            }
            case '1':{
                resultLength = items.filter( el => el.length > 2 && el.length <= 4);
                break;
            }

            case '2':{
                resultLength = items.filter( el => el.length > 4 && el.length <= 8);
                break;
            }

            case '3':{
                resultLength = items.filter( el => el.length >= 8);
                break;
            }

            default:
                resultLength = items;
        }


        this.setState({
            trails: resultLength
        })
    };

    ///////

    handleSelectChange = (event) => {
        this.setState({
            result: event.target.value
        }, () => {
            this.filterTrail(this.state.originalTrails);
        });
    };

    filterTrail = items => {
        const wynik = items.filter( el => {
            if(el.difficulty === this.state.result ) {
                return el
            }
        });
        this.setState({
            trails: wynik,
            difficultyTrails: wynik
        })
    };


    fetchTrails = () => {
        const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=40&key=200643499-44644bc81e56ad05e301faa96c26db54';
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ originalTrails: data.trails,trails: data.trails }))
            .catch(function(error) {
                console.log(error)
            });
    };

    render() {
        return (
            <>
                <Navigation />
                <Header />
                <AboutUs />
                <div className="mybox">
                    <Filters handleSelectChange={this.handleSelectChange}/>
                    <FiltersLenght handleSelectChange={this.handleSelectChangeLength}/>
                </div>
                <TrailsList items={this.state.trails} />
                <ContactForm />
            </>
        )
    }
}

export default App;
