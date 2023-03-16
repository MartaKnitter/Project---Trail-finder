import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header/index";
import Filters from "./components/Filters/index";
import FiltersLength from "./components/FilterLength/index";
import Navigation from "./components/Navigation/index";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import TrailsList from "./components/TrailsList";

class App extends Component {
  state = {
    trails: [],
    difficultyTrails: [],
    originalTrails: [],
  };

  // fetchTrails = () => {
  //     const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=100&key=200643499-44644bc81e56ad05e301faa96c26db54';
  //     fetch(URL)
  //         .then(response => response.json())
  //         .then(data => this.setState({ trails: data.trails }))
  //         .catch(function(error) {
  //             console.log(error)
  //         });
  // };

  componentDidMount() {
    this.fetchTrails();
  }

  // filtrowanie dla wyboru dlugosci szlaku
  handleSelectChangeLength = (event) => {
    event.persist();
    const { value } = event.target;
    this.setState(
      {
        result: value,
      },
      () => {
        this.filterTrailLength(value, this.state.difficultyTrails);
      }
    );
  };

  filterTrailLength = (value, items) => {
    let resultLength;

    switch (value) {
      case "0": {
        resultLength = items.filter((el) => el.length <= 2);
        break;
      }
      case "1": {
        resultLength = items.filter((el) => el.length > 2 && el.length <= 4);
        break;
      }

      case "2": {
        resultLength = items.filter((el) => el.length > 4 && el.length <= 8);
        break;
      }

      case "3": {
        resultLength = items.filter((el) => el.length >= 8);
        break;
      }

      default:
        resultLength = items;
    }

    this.setState({
      trails: resultLength,
    });
  };

  ///////

  handleSelectChange = (event) => {
    event.persist();
    console.log(event.target.value);
    this.setState(
      {
        result: event.target.value,
      },
      () => {
        this.filterTrail(this.state.originalTrails);
      }
    );
  };

  filterTrail = (items) => {
    console.log(items);
    const wynik = items.filter((el) => {
      console.log(el);
      if (el.difficulty === this.state.result) {
        return el;
      }
    });
    this.setState({
      trails: wynik,
      difficultyTrails: wynik,
    });
  };

  fetchTrails = () => {
    const mockData = [
      {
        id: 123,
        name: "Bear Peak Out and Back",
        summary: "A must-do hike for Boulder locals and visitors alike!",
        stars: "4.6",
        difficulty: "blueBlack",
        location: "Colorado",
        length: 5,
        conditionStatus: "Snowy Ice",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7000884_large_1554159787.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7000884_large_1554159787.jpg",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7000884_large_1554159787.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7000884_large_1554159787.jpg",
      },
      {
        id: 1234,
        name: "Alluvial Fan",
        summary:
          "This alluvial fan was created during the great Lawn Lake floods of 1982. ",
        stars: "2",
        difficulty: "blue",
        location: "Rocky Mountain National Park",
        length: 3,
        conditionStatus: "Muddy",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7000370_large_1554159324.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7000370_large_1554159324.jpg",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7000370_large_1554159324.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7000370_large_1554159324.jpg",
      },
      {
        id: 12345,
        name: "Ouzel Falls",
        summary:
          "This awesome natural feature is formed where Ouzel Creek cascades over a 40-foot cliff on its way towards the North Saint Vrain. Y",
        stars: "3",
        difficulty: "black",
        location: "Wild Basin",
        length: 3,
        conditionStatus: "Muddy, Snowy",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7000669_large_1554159506.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7000669_large_1554159506.jpg",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7000669_large_1554159506.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7000669_large_1554159506.jpg",
      },
      {
        id: 123456,
        name: "Bear Lake",
        summary:
          "Bear lake is an exceedingly popular attraction in RMNP due to it's easy access and stunning natural beauty. ",
        stars: "2",
        difficulty: "greenBlue",
        location: "Bear Lake",
        length: 1,
        conditionStatus: "Muddy",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7010566_large_1554398769.jpg?",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7010566_large_1554398769.jpg?",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7010566_large_1554398769.jpg?",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7010566_large_1554398769.jpg?",
      },
      {
        id: 1234567,
        name: "Kissing Camels",
        summary: "This is the signature rock formation of Garden of the Gods. ",
        stars: "4.5",
        difficulty: "black",
        location: "Colorado Springs",
        length: 13,
        conditionStatus: "Rocks",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7049505_large_1555541538.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7049505_large_1555541538.jpg",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7049505_large_1555541538.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7049505_large_1555541538.jpg",
      },
      {
        id: 12345678,
        name: "Barr Trail",
        summary: "The Barr Trail is the most popular way to climb Pikes Peak.",
        stars: "3.6",
        difficulty: "blue",
        location: "Colorado Springs",
        length: 8,
        conditionStatus: "Rocks, Snowy",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7037746_large_1555086693.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7037746_large_1555086693.jpg",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7037746_large_1555086693.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7037746_large_1555086693.jpg",
      },
      {
        id: 123456789,
        name: "Bighorn Sheep Viewing - Sheep Lakes",
        summary:
          "At particular times during the summer, the bighorn sheep come down to Sheep Lakes. ",
        stars: "4.3",
        difficulty: "blueBlack",
        location: "Rocky Mountain National Park",
        length: 3,
        conditionStatus: "Rocks, Icy",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7006584_large_1554321052.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7006584_large_1554321052.jpg",
        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7006584_large_1554321052.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7006584_large_1554321052.jpg",
      },
      {
        id: 12345678910,
        name: "Monument Valley Park Loop",
        summary:
          "Jogging path that passes Colorado College, sports fields, tennis courts, and public swimming pool. ",
        stars: "5",
        difficulty: "greenBlue",
        location: "Black Forest",
        length: 7,
        conditionStatus: "Muddy",
        imgMedium:
          "https://hikingproject.com/assets/photos/hike/7000724_large_1554159590.jpg",
        imgSmall:
          "https://hikingproject.com/assets/photos/hike/7000724_large_1554159590.jpg",

        imgSqSmall:
          "https://hikingproject.com/assets/photos/hike/7000724_large_1554159590.jpg",
        imgSmallMed:
          "https://hikingproject.com/assets/photos/hike/7000724_large_1554159590.jpg",
      },
    ];

    this.setState({
      originalTrails: mockData,
      trails: mockData,
      difficultyTrails: mockData,
    });
    // const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=40&key=200643499-44644bc81e56ad05e301faa96c26db54';
    // fetch(URL)
    //     .then(response => response.json())
    //     .then(data => this.setState({ originalTrails: data.trails,trails: data.trails }))
    //     .catch(function(error) {
    //         console.log(error)
    //     });
  };

  render() {
    return (
      <>
        <Navigation />
        <Header />
        <AboutUs />
        <div className="mybox">
          <Filters handleSelectChange={this.handleSelectChange} />
          <FiltersLength handleSelectChange={this.handleSelectChangeLength} />
        </div>
        <TrailsList items={this.state.trails} />
        <ContactForm />
      </>
    );
  }
}

export default App;
