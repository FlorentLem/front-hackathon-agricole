import React from "react";
import "./Home.scss";
import CategoryMap from "../../elements/CategoryMap/CategoryMap";

const Home = () => {
    return(
        <div>
            <p className="homeText">Oui</p>
            <CategoryMap />
        </div>
    );
};

export default Home;