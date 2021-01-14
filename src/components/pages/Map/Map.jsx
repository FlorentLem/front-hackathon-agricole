import React, { Component } from "react";
import "./Map.scss";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxvcmVudGxlbSIsImEiOiJja2hveDNuYzcxNWY5MndteDM2djE3NnlxIn0.UuP-JCIEimNyvaSefaRr9A";

let map;
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.941807,
      lng: 2.003303,
      zoom: 5.4,
      attributionControl: false,
    };
  }

  componentDidMount() {
    // console.log( this.props.markers .filter((item) => {return item.type !== undefined}));
  }

  componentDidUpdate(prevProps) {
    const {
      setSelectedMarker,
      setSelectedCapital,
      setMapGenetate,
    } = this.props;
    if (this.props.mapGenetate) {
      map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/florentlem/ckjvfba3q07a517parv0h15ln",
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        attributionControl: false,
      });
      setMapGenetate();
      map.on("load", function () {
        // aaa
      });
    }
    if (this.props.drawMarker.length !== prevProps.drawMarker.length) {
      this.props.drawMarker
        .filter((item) => item.type !== undefined)
        .map((point, index) => {
          const marker = document.createElement("div");
          marker.className = "markerMap";
          marker.addEventListener("click", function () {
            map.flyTo({
              center: [point.longitude, point.latitude],
              zoom: 10.5,
              speed: 1.1,
            });
            setSelectedMarker(index);
          });
          new mapboxgl.Marker({ element: marker })
            .setLngLat([point.longitude, point.latitude])
            .addTo(map);
        });
    }
    if (this.props.capital.length !== prevProps.capital.length) {
      this.props.capital.map((point, index) => {
        const markerWrapper = document.createElement("div");
        const marker = document.createElement("div");
        const p = document.createElement('p');
        p.className = "markerMap2Text";
        p.innerText = "112";
        markerWrapper.appendChild(marker);
        markerWrapper.appendChild(p);
        marker.className = "markerMap2";
        marker.addEventListener("click", function () {
          map.flyTo({
            center: [point.longitude, point.latitude],
            zoom: 8.0,
            speed: 0.9,
          });
          setSelectedCapital(point);
        });

        new mapboxgl.Marker({ element: markerWrapper })
          .setLngLat([point.longitude, point.latitude])
          .addTo(map);
      });
    }
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
          ref={(el) => (this.mapContainer = el)}
          className="map__globalContainer"
        />
      </>
    );
  }
}

export default Map;
