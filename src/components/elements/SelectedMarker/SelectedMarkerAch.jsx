import React, { useState, useEffect } from "react";
import axios from "axios";
import ach from "./assets/acheteur.svg";
import cross from "./assets/cross.png";
import "./SelectedMarker.scss";

const SelectedMarkerAch = ({ marker, closedLocation }) => {
  const [achTab, setAchTab] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/acheteurs/profile/${marker.object.id}`)
      .then((res) => res.data)
      .then((data) => {
        setAchTab(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="selectedMarker__container">
      {isLoading ? (
        <div className="containerLoader">
          <div className="LoaderBalls">
            <div className="LoaderBalls__item"></div>
            <div className="LoaderBalls__item"></div>
            <div className="LoaderBalls__item"></div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="selectedMarker__headAch"
          >
            <div
              onClick={closedLocation}
              className="selectedMarker__closeMenu"
              type="button"
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
                  <p>{marker.object.name}</p>
                  <p>{achTab.profil.type}</p>
                </>
              </div>
            </div>
            <div
              className="selectedMarker__about"
              style={{
                color: "#565656",
              }}
            >
              <h3 style={{
                fontSize: "25px",
                marginBottom: "10px",
              }}>À propos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea
                quia laborum nostrum? Consectetur fugiat sed ut. Nemo quia
                cupiditate, odit optio.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedMarkerAch;
