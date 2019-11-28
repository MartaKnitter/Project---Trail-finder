import React, {Component} from "react";
// import ReactDOM from "react-dom";

import Trail from "../Trail/index";
import './data.css';


class Data extends Component {
    state = {
        trails: [],
        result: '',
        filteredT: []
    };

    componentDidMount() {
        this.fetchTrails();
        this.filterTrail(this.state.trails)
    }

    fetchTrails = () => {
        const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=100&key=200643499-44644bc81e56ad05e301faa96c26db54';
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ trails: data.trails }))
            .catch(function(error) {
                console.log(error)
            });
    };

    handleSelectChange = (event) => {
        this.setState({
            result: event.target.value
        }, () => {
            this.filterTrail(this.state.trails);
        });

    };

    filterTrail = items => {
        const wynik = items.filter( el => {
            if(el.difficulty === this.state.result ) {
                return el
            }
        });

        this.setState({
            filteredT: wynik
        })
    };

    render() {
        const { trails, result, filteredT} = this.state;

        console.log(this.state.filteredT);

        return (
            <>
                <select name="difficulty" onChange={this.handleSelectChange} className="select-difficulty-button">
                    <option selected >Wybierz szlak</option>
                    <option value="blue">Blue</option>
                    <option value="blueBlack">Blueblack</option>
                    <option value="black">Black</option>
                    <option value="greenBlue">Greenblue</option>
                </select>
                <div className="flex flex-wrap">
                {filteredT.map( item => <Trail key={item.id} trail={item} /> )}
                </div>
            </>

        )
    }
}


export default Data;


// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
// class Data extends Component {
//     state = {
//         trails: [],
//         result: '',
//         filteredT: []
//     };
//
//     componentDidMount() {
//         this.fetchTrails();
//         this.filterTrail(this.state.trails)
//     }
//
//     fetchTrails = () => {
//         const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200643499-44644bc81e56ad05e301faa96c26db54';
//         fetch(URL)
//             .then(response => response.json())
//             .then(data => this.setState({ trails: data.trails }))
//             .catch(function(error) {
//                 console.log(error)
//             });
//     };
//
//     handleSelectChange = (event) => {
//         this.setState({
//             result: event.target.value
//         }, () => {
//             this.filterTrail(this.state.trails);
//         });
//
//     }
//
//     filterTrail = items => {
//         const wynik = items.filter( el => {
//             if(el.difficulty === this.state.result ) {
//                 return el
//             }
//         });
//         this.setState({
//             filteredT: wynik
//         })
//     }
//
//     render() {
//         const { trails, result, filteredT} = this.state;
//
//         console.log(this.state.filteredT);
//
//         return (
//             <>
//                 <div>
//                     <select name="difficulty" id="" onChange={this.handleSelectChange}>
//                         <option>Wybierz szlak</option>
//                         <option value="blue">Blue</option>
//                         <option value="blueBlack">Blueblack</option>
//                         <option value="black">Black</option>
//                         <option value="greenBlue">Greenblue</option>
//                     </select>
//                     {filteredT.map( item => {
//                         return <p>{item.name}</p>
//                     })}
//                 </div>
//             </>
//
//         )
//     }
// }
//
//
// export default Data;

//
//
//
// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
// class Data extends Component {
//     state = {
//         trails: []
//     };
//
//     componentDidMount() {
//         this.fetchTrails();
//     }
//
//     fetchTrails = () => {
//         const URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200643499-44644bc81e56ad05e301faa96c26db54';
//         fetch(URL)
//             .then(response => response.json())
//             .then(data => this.setState({ trails: data.trails }))
//             .catch(function(error) {
//                 console.log(error)
//             });
//     };
//
//     render() {
//         const { trails } = this.state;
//         const wynik = trails.filter( el => el.difficulty === this.state.result)
//         return (
//             <ul>
//                 {trails.map(trail => (
//                     <li key={trail.id}>
//                         <div>{trail.type}</div>
//                         <div>{trail.name}</div>
//                         <img src={trail.imgSqSmall} alt=""/>
//                     </li>
//                 ))}
//             </ul>
//         )
//     }
// }
//
// export default Data;