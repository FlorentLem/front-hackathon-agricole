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
            {label: 'Blé', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b47e69daf_blé tous-01.jpg"},
            {label: 'Avoine', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b918e922a_avoine blanche-01.jpg"},
            {label: 'Triticale', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5c24d7b7cf8f1_triticalegrain.jpg"},
            {label: 'Orge', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b7cced4cf_orge graine-01.jpg"},
            {label: 'Maïs', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87a4eae5c90_maïs-01.jpg"},
            {label: 'Pois', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87c659b29a0_Pois graines-01.jpg"},
            {label: 'Colza', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b1d263bd2_colza oleoproteagineux-01.jpg"},
            {label: 'Tournesol', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87c740ec873_tournesol graines-01.jpg"},
            {label: 'Féveroles', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87db864936b_féveroles graines-01.jpg"},
        ]
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
    this.setCheck = this.setCheck.bind(this);
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

  setCheck (i) {
    const temp = JSON.parse(JSON.stringify(this.state.filters));
    temp[i].checked = !temp[i].checked;
    this.setState({
      filters: temp
    });
}

  render() {
    const { markers, selectedMarker, filters } = this.state;
    const { setCheck, setSelectedMarker, closedLocation } = this;
    console.log(selectedMarker);
    return (
      <div>
        <Map
          filters={filters}
          markers={markers}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
          closedLocation={closedLocation}
        />
        <CategoryMap filters={filters} setCheck={setCheck} />
      </div>
    );
  }
}

export default Data;
