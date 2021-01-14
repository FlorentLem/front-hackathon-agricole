import React from "react";
import agri from "./assets/agriculteur.svg";
import cross from "./assets/cross.png";
import logo from "./assets/logo.svg";
import "./SelectedMarker.scss";


const SelectedMarkerAgri = ({marker}) => {
  return (
    <div className="selectedMarker__container">
      <div
        className="selectedMarker__head"
        style={{
          backgroundColor: "#5a9449",
        }}
      >
        <div
          className="selectedMarker__closeMenu"
          style={{
            backgroundImage: `url(${cross})`,
            boxShadow: "3px 3px 7px #635555, -3px -3px 5px #7dad6e85",
          }}
        />
        <h2>Agriculteur</h2>
        <div
          className="selectedMarker__img"
          style={{
            backgroundImage: `url(${agri})`,
          }}
        />
      </div>
      <div className="selectedMarker__main">
        <div
          className="selectedMarker__mainFirst"
          style={{
            color: "#5a9449",
          }}
        >
          <div className="selectedMarker__rate">
            <>
              <h3>{marker.rate}</h3>
              <div className="selectedMarker__stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <p>Taille de la ferme: {marker.farmsize} hectars</p>
            </>
          </div>
          <div
            className="selectedMarker__date"
            style={{
              color: "#5a9449",
            }}
          >
            <>
              <div
                className="selectedMarker__logo"
                style={{
                  backgroundImage: `url(${logo})`,
                }}
              />
              <p>Inscrit depuis {marker.date}</p>
            </>
          </div>
        </div>
        <div
          className="selectedMarker__about"
          style={{
            color: "#5a9449",
          }}
        >
          <h3>À propos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea
            quia laborum nostrum? Consectetur fugiat sed ut. Nemo quia
            cupiditate, odit optio.
          </p>
        </div>
        <button
          className="selectedMarker__buttonAccess"
          style={{
            backgroundColor: "#5a9449",
          }}
        >
          En savoir plus <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedMarkerAgri;
