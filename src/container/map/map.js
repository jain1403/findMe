import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class map extends Component {
    state = {
        position: [51.505, -0.09]
    }
    render() {
        return (
            <Map center={this.state.position} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={this.state.position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        );
    }
}

export default map;