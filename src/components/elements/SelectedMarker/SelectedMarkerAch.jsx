import React, { useState, useEffect } from "react";
import axios from "axios";
import ach from "./assets/acheteur.svg";
import cross from "./assets/cross.png";
import logo from "./assets/logo.svg";
import "./SelectedMarker.scss";

const SelectedMarkerAch = ({ marker, closedLocation }) => {
  const [achTab, setAchTab] = useState({});
  const [somme, setSomme] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRated, setIsRated] = useState([
    { name: "", valeur: 0, star: "", mobile: "" },
  ]);

  const rate = [
    {
      name: "Inscrit",
      valeur: 0,
      star: "☆☆☆☆",
      mobile: "0/4 ⭐️",
    },
    {
      name: "Novice",
      valeur: 60,
      star: "⭐️☆☆☆",
      mobile: "1/4 ⭐️",
    },
    {
      name: "Intermédiaire",
      valeur: 120,
      star: "⭐️⭐️☆☆",
      mobile: "2/4 ⭐️",
    },
    {
      name: "Confirmé",
      valeur: 180,
      star: "⭐️⭐️⭐️☆",
      mobile: "3/4 ⭐️",
    },
    {
      name: "Expert",
      valeur: 240,
      star: "⭐️⭐️⭐️⭐️",
      mobile: "4/4 ⭐️",
    },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/acheteurs/profile/${marker.object.id}`)
      .then((res) => res.data)
      .then((data) => {
        setAchTab(data);
        rating(data);
        setIsLoading(false);
        setSomme(data.profil.somme);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const rating = (data) => {
    console.log(ach);
    for (let i = 0; i <= rate.length - 1; i++) {
      if (data.profil.somme >= rate[i].valeur) {
        setIsRated({
          name: rate[i].name,
          valeur: rate[i].valeur,
          star: rate[i].star,
          mobile: rate[i].mobile,
        });
      }
    }
  };

  return (
    <div className="selectedMarker__container">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <div
            className="selectedMarker__head"
            style={{
              backgroundColor: "#565656",
            }}
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
                  <h3>Acheteur</h3>
                  <p>{marker.object.type}</p>
                  <span>{marker.object.name}</span>
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
              En savoir plus{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedMarkerAch;
