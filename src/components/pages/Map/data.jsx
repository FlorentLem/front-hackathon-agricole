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
      filters: [
            {type: "ble", label: 'Blé', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b47e69daf_blé tous-01.jpg"},
            {type: "avoine", label: 'Avoine', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b918e922a_avoine blanche-01.jpg"},
            {type: "triticale", label: 'Triticale', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5c24d7b7cf8f1_triticalegrain.jpg"},
            {type: "orge", label: 'Orge', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b7cced4cf_orge graine-01.jpg"},
            {type: "mais", label: 'Maïs', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87a4eae5c90_maïs-01.jpg"},
            {type: "pois", label: 'Pois', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87c659b29a0_Pois graines-01.jpg"},
            {type: "colza", label: 'Colza', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b1d263bd2_colza oleoproteagineux-01.jpg"},
            {type: "tournesol", label: 'Tournesol', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87c740ec873_tournesol graines-01.jpg"},
            {type: "feverol", label: 'Féveroles', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87db864936b_féveroles graines-01.jpg"},
        ],
      capital: [],
      drawMarker: [],
      mapGenetate: true,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
    this.setCheck = this.setCheck.bind(this);
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

  setCheck (i) {
    const temp = JSON.parse(JSON.stringify(this.state.filters));
    temp[i].checked = !temp[i].checked;
    this.setState({
      filters: temp
    });
}

  setMapGenetate = () => {
    this.setState({mapGenetate: false});
  }

  setSelectedCapital = (cap) => {
    if (this.state.drawMarker.length === 0) {
      return this.setState({drawMarker: this.state.markers.filter(el => Math.floor(el.zipcode / 1000) === cap.dep )})
    };
    this.setState({drawMarker: []});
  }

  render() {
    const { drawMarker, selectedMarker, capital, mapGenetate, filters } = this.state;
    const {setCheck} = this;
    console.log(filters[0]);
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
          filters={filters}
        />
        <CategoryMap filters={filters} setCheck={setCheck} />
      </div>
    );
  }
}

export default Data;
