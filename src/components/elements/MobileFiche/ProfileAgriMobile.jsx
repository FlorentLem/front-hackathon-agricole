import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./ProfileMobile.scss";
import logoCA from "./assets/logoCA.png";

const ProfileAgriMobile = () => {
  const [agri, setAgri] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profil/2")
      .then((res) => res.data)
      .then((data) => {
        setAgri(data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  }, []);

  return (
    <div className="full-box">
      {isLoading ? <p>En cours de chargement</p> : <div></div>}
    </div>
  );
};

export default ProfileAgriMobile;
