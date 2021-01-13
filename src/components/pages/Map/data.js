import React, { Component } from 'react';

import Map from './Map';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarker: null,
      markers: [
        {
          name: 'Winterton',
          position: [-0.59, 53],
          ressources: {
            farmsize: 13,
            date: '11/67/45'
          }
        }
      ]
    };
  }

  setSelectedMarker(index) {
    this.setState({
      selectedMarker: {
        object: this.state.markers[index],
        id: index
      }
    });
  }

  render() {
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
