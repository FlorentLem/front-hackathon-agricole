import React from "react";
import "./Home.scss";
import ProgressBar from "./ProgressBar";

const Home = () => {
    const pourcentage = 50
    return(
        <div>
            <ProgressBar done={pourcentage} />
        </div>
    );
};

export default Home;