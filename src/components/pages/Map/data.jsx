import React, { Component } from 'react';
import axios from 'axios';

import Map from './Map';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarker: null,
      markers: []
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.openLocation = this.openLocation.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8000/api/agri');
      this.setState({ markers: res.data });
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

  render() {
    const { markers, selectedMarker } = this.state;
    return (
      <div>
        <Map
          markers={markers}
          selectedMarker={selectedMarker}
          setSelectedMarker={this.setSelectedMarker}
          closedLocation={this.closedLocation}
        />
      </div>
    );
  }
}

export default Data;
