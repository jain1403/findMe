import React, { Component } from 'react';
import Service from '../../services/getLocations';
import DotLoader from "react-spinners/DotLoader";
import './find-me.css';
import MapLoader from '../map/map';


class findMe extends Component {

    constructor(props) {
        super(props);
        this.mapElement = React.createRef();
    }
    state = {
        locations: [],
        isLoaded: false,
        lat: '',
        long: '',
        currentCountry: '',
        selected: '',
        searchResult: []
    }

    componentDidMount() {
        Service.getLocations().then((res) => {
            this.setState({ locations: res, isLoaded: true, searchResult: res })
        })
    }
    handleChange = (e) => {
        const result = this.search(this.state.locations, { zip: e.target.value });
        if (result.length > 0) {
            this.setState({ searchResult: result });
        }
    }
    search = (items, filter) => {
        if (!filter) {
            return items;
        }

        if (!Array.isArray(items)) {
            return items;
        }

        if (filter && Array.isArray(items)) {
            let pipeData;
            const filterKeys = Object.keys(filter);
            pipeData = items.filter(item => {
                return filterKeys.some((keyName) => {
                    return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
                });
            });
            return pipeData;

        }
    }

    render() {
        let tbody;
        if (this.state.searchResult.length > 0) {
            tbody = this.state.searchResult.map((element, index) => {
                return (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{element.country}</td>
                        <td>{element.zip}</td>
                        <td>{element.lat}</td>
                        <td>{element.long}</td>
                    </tr>)
            });
        }
        return (
            <div className="container">
                <div className="tableContainer">
                    <input className="topPanel searchBar" type="text" placeholder="Search ZipCode" onChange={this.handleChange}></input>
                    <div className="tableStyle">
                        <table>
                            <thead>
                                <tr>
                                    <th>SNo.</th>
                                    <th>Country</th>
                                    <th>Zip</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tbody}
                            </tbody>
                        </table>
                    </div>
                </div>
                <MapLoader result={this.state.searchResult}></MapLoader>
            </div>
        );
    }
}

export default findMe;