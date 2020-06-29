import React, { Component } from 'react';
import Service from '../../services/getLocations';
import DotLoader from "react-spinners/DotLoader";
import './find-me.css';
import MapLoader from '../map/map';


class findMe extends Component {

    state = {
        locations: [],
        isLoaded: false
    }

    componentDidMount() {
        Service.getLocations().then((res) => {
            this.setState({ locations: res, isLoaded: true })
        })
    }


    render() {
        let tbody;
        if (this.state.locations.length > 0) {
            tbody = this.state.locations.map((element, index) => {
                return (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{element.country}</td>
                        <td>{element.lat}</td>
                        <td>{element.long}</td>
                        <td>{element.zip}</td>
                    </tr>)
            });
        }
        return (
            <div className="containerMain">
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>SNo.</th>
                                <th>Country</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Zip</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tbody}
                        </tbody>
                    </table>
                </div>
                <MapLoader></MapLoader>
            </div>
        );
    }
}

export default findMe;