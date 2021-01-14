
import React, { useState } from 'react';
import './CategoryMap.scss';
import maleLogo from "./assets/male.svg";


const CategoryMap = ({filters, setCheck}) => {
    // const [data, setData] = useState([
    //     {label: 'Blé', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b47e69daf_blé tous-01.jpg"},
    //     {label: 'Avoine', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b918e922a_avoine blanche-01.jpg"},
    //     {label: 'Triticale', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5c24d7b7cf8f1_triticalegrain.jpg"},
    //     {label: 'Orge', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b7cced4cf_orge graine-01.jpg"},
    //     {label: 'Maïs', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87a4eae5c90_maïs-01.jpg"},
    //     {label: 'Pois', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87c659b29a0_Pois graines-01.jpg"},
    //     {label: 'Colza', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87b1d263bd2_colza oleoproteagineux-01.jpg"},
    //     {label: 'Tournesol', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87c740ec873_tournesol graines-01.jpg"},
    //     {label: 'Féveroles', checked: true, img:"https://api.comparateuragricole.com/media/images/cache/thumbnail_xs/5b87db864936b_féveroles graines-01.jpg"},
    // ])

    return (
        <div className="catmap__wrapper">
            <h3>Filtrer par cérérales:</h3>
            <div className="catmap__catWrapper">
                {filters.map((item, i) => (
                    <div key={`categorie${i}`} onClick={() => setCheck(i)}>
                        <img className={item.checked ? "catmap__img": "catmap__img catmap__imgChecked"} src={item.img} alt={item.label}></img>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
            <div className="catmap__imgWrapper">
                <img src={maleLogo} alt="Logo Homme"></img>
                <img src={maleLogo} alt="Logo Homme"></img>
                <img src={maleLogo} alt="Logo Homme"></img>
            </div>
        </div>
    )
}

export default CategoryMap


