
import React from 'react';
import './CategoryMap.scss';
import maleLogo from "./assets/male.svg";


const CategoryMap = ({filters, setCheck}) => {
    return (
        <div className="catmap__wrapper">
            <h3>Filtrer par produits vendus sur notre site :</h3>
            <div className="catmap__catWrapper">
                {filters.map((item, i) => (
                    <div key={`categorie${i}`} onClick={() => setCheck(i)}>
                        <img className={!item.checked ? "catmap__img": "catmap__img catmap__imgChecked"} src={item.img} alt={item.label}></img>
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


