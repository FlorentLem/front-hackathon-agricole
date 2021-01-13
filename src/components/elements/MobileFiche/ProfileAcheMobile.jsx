import React from "react";
import "./ProfileMobile.scss";
import logoCA from "./assets/logoCA.png";

const ProfileAcheMobile = () => {
    return (
        <div>
            <div className="avatar-acheteur"></div>

            <div className="box-agriculteur">
                <div className="box-header-ach">
                    <h1>Acheteur</h1>
                    <img src={logoCA} alt="logo Comparateur Agricole" />
                </div>
                <div className="type-acheteur">
                    <h2>Type acheteur</h2>
                    <p>Nom de l'acheteur</p>
                </div>
                    
                <div className="box-info">
                </div> 
            </div>

            <div className="box-céréales-ach">
                <h1>Céréales</h1> 
            </div>
        </div>
    );
}

export default ProfileAcheMobile;