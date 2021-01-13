import React from "react";
import agri from "./assets/agriculteur.svg";
import ach from "./assets/acheteur.svg";
import cross from "./assets/cross.png";
import logo from "./assets/logo.svg";
import "./SelectedMarker.scss";

const SelectedMarker = ({ role }) => {
  return (
    <div className="selectedMarker__container">
      <div
        className="selectedMarker__head"
        style={{
          backgroundColor: role ? "#5a9449" : "#565656",
        }}
      >
        <div
          className="selectedMarker__closeMenu"
          style={{
            backgroundImage: `url(${cross})`,
            boxShadow: role
              ? "3px 3px 7px #635555, -3px -3px 5px #7dad6e85"
              : "3px 3px 7px #383838, -3px -3px 5px #b1b1b185",
          }}
        />
        <h2>{role ? "Agriculteur" : "Acheteur"}</h2>
        <div
          className="selectedMarker__img"
          style={{
            backgroundImage: role ? `url(${agri})` : `url(${ach})`,
          }}
        />
      </div>
      <div className="selectedMarker__main">
        <div
          className="selectedMarker__mainFirst"
          style={{
            color: role ? "#5a9449" : "#565656",
          }}
        >
          <div className="selectedMarker__rate">
            {role ? (
              <>
                <h3>Expert</h3>
                <div className="selectedMarker__stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p>Taille de la ferme: 1000 hectars</p>
              </>
            ) : (
              <>
                <h3>Acheteur</h3>
                <p>Type Acheteur</p>
                <span>Nom Acheteur</span>
              </>
            )}
          </div>
          <div
            className="selectedMarker__date"
            style={{
              color: role ? "#5a9449" : "#565656",
            }}
          >
            {role ? (
              <>
                <div
                  className="selectedMarker__logo"
                  style={{
                    backgroundImage: `url(${logo})`,
                  }}
                />
                <p>Inscrit depuis 2021</p>
              </>
            ) : (
              <>
                <div
                  className="selectedMarker__logo"
                  style={{
                    backgroundImage: `url(${logo})`,
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div
          className="selectedMarker__about"
          style={{
            color: role ? "#5a9449" : "#565656",
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
            backgroundColor: role ? "#5a9449" : "#565656",
          }}
        >
          En savoir plus <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedMarker;
