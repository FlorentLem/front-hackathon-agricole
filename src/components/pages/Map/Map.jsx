import React, { Component } from 'react';
import './Map.scss';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoiZmxvcmVudGxlbSIsImEiOiJja2hveDNuYzcxNWY5MndteDM2djE3NnlxIn0.UuP-JCIEimNyvaSefaRr9A';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.941807,
      lng: 2.003303,
      zoom: 5.4,
      attributionControl: false
    };
  }

  componentDidMount() {
    
    // console.log( this.props.markers .filter((item) => {return item.type !== undefined}));
  };

  componentDidUpdate(prevProps) {
    if (this.props.markers.length === prevProps.markers.length) {
      return;
    }
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
      .filter(el => Math.floor(el.zipcode / 1000) === 42)
      .filter((item) => (item.type !== undefined))
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
      console.log("finish")
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
