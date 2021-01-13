import React from "react";
import "./ProfileMobile.scss";
import logoCA from "./assets/logoCA.png";

const ProfileAgriMobile = () => {
    return (
        <div>
            <div className="avatar-bg"></div>

            <div className="box-agriculteur">
                <div className="box-header">
                    <h1>Agriculteur</h1>
                    <img src={logoCA} alt="logo Comparateur Agricole" />
                </div>
                <div className="box-info">
                    <h2>Expert</h2>
                    <h2>Inscrit depuis 2020</h2>
                </div> 
                <div className="box-farmsize">
                    <h2>Taille de la ferme</h2>
                    <p>xx hectares</p>
                </div>
            </div>

            <div className="box-céréales">
                <h1>Céréales</h1> 
            </div>
        </div>
    );
}

export default ProfileAgriMobile;