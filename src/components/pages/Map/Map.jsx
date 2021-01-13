import React, { Component } from 'react';
import './Map.scss';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoiZmxvcmVudGxlbSIsImEiOiJja2hveDNuYzcxNWY5MndteDM2djE3NnlxIn0.UuP-JCIEimNyvaSefaRr9A';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      lat: 47.941807,
      lng: 2.003303,
      zoom: 5.4,
      attributionControl: false
    };
  }

  componentDidMount() {
    const { setSelectedMarker } = this.props;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/florentlem/ckjvfba3q07a517parv0h15ln',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      attributionControl: false
    });

    this.props.markers
      // .filter(el => el.zipcode % 1000 === 0)
      .map((point, index) => {
        let marker = document.createElement('div');
        marker.className = 'markerMap';
        marker.addEventListener('click', function() {
          map.flyTo({
            center: [point.longitude, point.latitude],
            zoom: 7.5,
            speed: 1
          });
          setSelectedMarker(index);
        });

        new mapboxgl.Marker({ element: marker })
          .setLngLat([point.longitude, point.latitude])
          .addTo(map);
      });
  }
  render() {
    const { selectedMarker, closedLocation } = this.props;
    return (
      <>
        {selectedMarker && (
          <div>
            <h1>hello</h1>
          </div>
        )}
        <div
          ref={el => (this.mapContainer = el)}
          className='map__globalContainer'
        />
      </>
    );
  }
}

export default Map;
