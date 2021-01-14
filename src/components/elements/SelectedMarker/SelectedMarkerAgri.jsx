import React, { useState, useEffect } from "react";
import axios from "axios";
import agri from "../SelectedMarker/assets/agriculteur.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import cross from "./assets/cross.png";
import "./SelectedMarker.scss";

const SelectedMarkerAgri = ({ marker, closedLocation }) => {
  const [agriTab, setAgriTab] = useState({});
  const [somme, setSomme] = useState("");
  const [transSomme, setTransSomme] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profil/17")
      .then((res) => res.data)
      .then((data) => {
        setAgriTab(data);
        setIsLoading(false);
        setSomme(data.profil.somme);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="selectedMarker__container">
      {console.log(agriTab)}
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="selectedMarker__head">
            <button
              onClick={closedLocation}
              className="selectedMarker__closeMenu"
              type="button"
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
                <div className="selectedMarker__rateDesktop">
                  <div className="selectedMarker__blockTop">
                    <h3 className="selectedMarker__titleRate">{marker.rate}</h3>
                    <p className="selectedMarker__inscription">
                      Inscrit depuis {marker.object.registered_at}
                    </p>
                  </div>
                  <div className="selectedMarker__stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>Taille de la ferme: {marker.object.farmsize} hectars</p>
                </div>
                <div className="selectedMarker__rateMobile">
                  <div className="selectedMarker__stars">
                    <span className="fa fa-star checked"></span>
                    <span>3.5/4</span>
                  </div>
                </div>
              </div>
              <div className="selectedMarker__dateMobile">
                <p className="selectedMarker__inscription">
                  Inscrit depuis {marker.object.registered_at}
                </p>
              </div>
            </div>
            <div
              className="selectedMarker__about"
              style={{
                color: "#5a9449",
              }}
            >
              <h4 className="selectedMarker__titleCereales">Céréales</h4>
              <div>
                {agriTab.trans.map((a) => (
                  <div className="selectedMarker__cereales">
                    <p>{a.category}</p>
                    <ProgressBar
                      pourcentage={(a.somme * 100) / somme}
                      tonnage={a.somme}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedMarkerAgri;
