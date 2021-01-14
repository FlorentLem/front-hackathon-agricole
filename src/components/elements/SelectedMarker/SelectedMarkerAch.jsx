import React from "react";
import ach from "./assets/acheteur.svg";
import cross from "./assets/cross.png";
import logo from "./assets/logo.svg";
import "./SelectedMarker.scss";

const SelectedMarkerAch = ({marker}) => {
  return (
    <div className="selectedMarker__container">
      <div
        className="selectedMarker__head"
        style={{
          backgroundColor: "#565656",
        }}
      >
        <div
          className="selectedMarker__closeMenu"
          style={{
            backgroundImage: `url(${cross})`,
            boxShadow: "3px 3px 7px #383838, -3px -3px 5px #b1b1b185",
          }}
        />
        <h2>Acheteur</h2>
        <div
          className="selectedMarker__img"
          style={{
            backgroundImage: `url(${ach})`,
          }}
        />
      </div>
      <div className="selectedMarker__main">
        <div
          className="selectedMarker__mainFirst"
          style={{
            color: "#565656",
          }}
        >
          <div className="selectedMarker__rate">
            <>
              <h3>Acheteur</h3>
              <p>{marker.type}</p>
              <span>{marker.name}</span>
            </>
          </div>
          <div
            className="selectedMarker__date"
            style={{
              color: "#565656",
            }}
          >
            <>
              <div
                className="selectedMarker__logo"
                style={{
                  backgroundImage: `url(${logo})`,
                }}
              />
            </>
          </div>
        </div>
        <div
          className="selectedMarker__about"
          style={{
            color: "#565656",
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
            backgroundColor: "#565656",
          }}
        >
          En savoir plus <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedMarkerAch;
