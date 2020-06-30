import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class map extends Component {
    constructor(props){
        super(props);
        this.mapElement = React.createRef();
    }
    state = {
        country:'',
        position: [51.505, -0.09]
    }
    componentWillReceiveProps(nextProps){
        let {result} = nextProps;
        this.setState({ 
            country: result[0].country,
            position:[result[0].lat,result[0].long]})
    }
    render() {
        let marker;
        marker = this.props.result.map((el,index)=>{
            let positionMark = [el.lat,el.long];
            return(
            <Marker key={index} position={positionMark}>
                <Popup>{el.country}</Popup>
            </Marker>)
        })
        return (
            <div className="mapContainer">
            <Map center={this.state.position} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {marker}
            </Map>
            </div>
        );
    }
}

export default map;