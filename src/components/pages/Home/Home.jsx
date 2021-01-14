import React from "react";
import "./Home.scss";
import CategoryMap from "../../elements/CategoryMap/CategoryMap";
import ProfileAcheMobile from "../../elements/MobileFiche/ProfileAcheMobile";
import ProfileAgriMobile from "../../elements/MobileFiche/ProfileAgriMobile";

const Home = () => {
    return(
        <div>
            <p className="homeText">Oui</p>
            {/* <CategoryMap /> */}
            <ProfileAcheMobile />
            <ProfileAgriMobile />
        </div>
    );
};

export default Home;