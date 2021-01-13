import React from "react";
import agri from "./assets/agriculteur.svg";
import "./SelectedMarker.scss";

const SelectedMarker = ({ role }) => {
  return (
    <div className="selectedMarker__container">
      <div className="selectedMarker__head">
        <div className="selectedMarker__closeMenu" />
        <h2>{role ? "Agriculteur" : "Acheteur"}</h2>
        <div
          className="selectedMarker__img"
          style={{
            backgroundImage: `url(${agri})`,
          }}
        />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SelectedMarker;
