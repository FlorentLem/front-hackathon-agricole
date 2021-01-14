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
      dep: 0,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8000/api/agri');
    this.setState({ markers: res.data.res });
    const capital = [];
    console.log(res.data.villes)
    res.data.villes.map((item) => {
      const dep = Math.floor(item.zipcode / 1000);
      if (!capital.find(el => el.dep === dep)) {
        capital.push({dep: dep, latitude: item.latitude, longitude: item.longitude})
      }
      return item;
    })
    this.setState({ capital: capital })
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

  setSelectedCapital = (cap) => {
    if (this.state.drawMarker.length === 0 || Math.floor(this.state.drawMarker[0].zipcode / 1000) !== cap.dep) {
      this.setState({drawMarker: this.state.markers.filter(el => Math.floor(el.zipcode / 1000) === cap.dep )})
      return this.setState({dep: cap.dep})
    };
    console.log("clear");
    this.setState({drawMarker: []});
    return this.setState({dep: 0});
  }

  render() {
    const { drawMarker, selectedMarker, capital, mapGenetate, markers, dep } = this.state;
    return (
      <div>
        <Map
          drawMarker={drawMarker}
          markers={markers}
          mapGenetate={mapGenetate}
          capital={capital}
          dep={dep}
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
