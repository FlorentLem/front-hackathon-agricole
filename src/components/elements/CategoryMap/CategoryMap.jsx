import React, { useState } from "react";
import "./CategoryMap.scss";
// import maleLogo from "./assets/male.svg";
import agri from "./assets/tracteur.png";
import ach from "./assets/usine2.png";
import agriBlanc from "./assets/tracteur_blanc.png";
import achBlanc from "./assets/usine2_blanc.png";

const CategoryMap = ({ filters, setCheck, setFilterAgri, setFilterAch, drawAgri, drawAch }) => {
  const [clickAgri, setClickAgri] = useState(drawAgri);
  const [clickAch, setClickAch] = useState(drawAch);

  return (
    <div className="catmap__wrapper">
      <h3 className="catmap__titleDesktop">Filtrer par produits vendus sur notre site :</h3>
      <h3 className="catmap__titleMobile">Agriculteurs/Acheteurs:</h3>
      <div className="catmap__catWrapper">
        {filters.map((item, i) => (
          <div key={`categorie${i}`} onClick={() => setCheck(i)}>
            <img
              className={
                !item.checked ? "catmap__img" : "catmap__img catmap__imgChecked"
              }
              src={item.img}
              alt={item.label}
            ></img>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="catmap__imgWrapper">
        <div
          onClick={() => {
            setClickAgri(!clickAgri);
            setFilterAgri(!clickAgri);
          }}
          style={{
            backgroundImage: clickAgri ? `url(${agriBlanc})` : `url(${agri})`,
            backgroundColor: clickAgri ? "#5A9449" : "#E9E9E9",
          }}
        />
        <div
          onClick={() => {
            setClickAch(!clickAch);
            setFilterAch(!clickAch);
          }}
          style={{
            backgroundImage: clickAch ? `url(${achBlanc})` : `url(${ach})`,
            backgroundColor: clickAch ? "#5A9449" : "#E9E9E9",
          }}
        />
      </div>
    </div>
  );
};

export default CategoryMap;
