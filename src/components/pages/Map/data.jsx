import React, { Component } from 'react';
import axios from 'axios';
import CategoryMap from '../../elements/CategoryMap/CategoryMap';

import Map from './Map';

class Data extends Component {
  constructor() {
    super();
    this.state = {
      selectedMarker: null,
      markers: [],
      capital: [],
      drawMarker: [],
      mapGenetate: true,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.openLocation = this.openLocation.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8000/api/agri');
      this.setState({ markers: res.data });
      this.setState({capital: [{ latitude: 47.941807, longitude: 2.003303}]})
  }

  setSelectedMarker(index) {
    this.setState({
      selectedMarker: {
        object: this.state.markers[index],
        id: index
      }
    });
  }

  closedLocation() {
    this.setState({
      selectedMarker: null
    });
  }

  openLocation() {
    const { selectedMarker, markers } = this.state;
    const array = markers;
    array[selectedMarker.id] = {
      name: markers.name,
      ressources: markers.ressources
    };

    this.setState({
      markes: array,
      selectedMarker: null
    });
  }

  setMapGenetate = () => {
    this.setState({mapGenetate: false});
  }

  setSelectedCapital = () => {
    if (this.state.drawMarker.length === 0) {
      return this.setState({drawMarker: this.state.markers.filter(el => Math.floor(el.zipcode / 1000) === 28 )})
    };
    this.setState({drawMarker: []});
  }

  render() {
    const { drawMarker, selectedMarker, capital, mapGenetate } = this.state;
    return (
      <div>
        <Map
          drawMarker={drawMarker}
          mapGenetate={mapGenetate}
          capital={capital}
          selectedMarker={selectedMarker}
          setMapGenetate = {this.setMapGenetate}
          setSelectedMarker={this.setSelectedMarker}
          setSelectedCapital={this.setSelectedCapital}
          closedLocation={this.closedLocation}
        />
        <CategoryMap />
      </div>
    );
  }
}

export default Data;
