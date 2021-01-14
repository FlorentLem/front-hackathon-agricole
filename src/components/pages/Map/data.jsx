import React, { Component } from 'react';
import axios from 'axios';
import CategoryMap from '../../elements/CategoryMap/CategoryMap';

import Map from './Map';

class Data extends Component {
  constructor() {
    super();
    this.state = {
      selectedMarker: null,
      markers: []
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8000/api/agri');
      this.setState({ markers: res.data.res });
  }

  setSelectedMarker(index) {
    this.setState({
      selectedMarker: {
        object: this.state.markers[index],
        id: index,
        rate: "Expert"
      }
    });
  }

  closedLocation () {
    this.setState({
      selectedMarker: null
    });
  }

  render() {
    const { markers, selectedMarker } = this.state;
    console.log(selectedMarker);
    return (
      <div>
        <Map
          markers={markers}
          selectedMarker={selectedMarker}
          setSelectedMarker={this.setSelectedMarker}
          closedLocation={this.closedLocation}
        />
        <CategoryMap />
      </div>
    );
  }
}

export default Data;
