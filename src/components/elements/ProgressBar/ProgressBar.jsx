import React, {useState} from "react";
import "./ProgressBar.scss";

function ProgressBar(props) {
    const [styleBar, setStyleBar] = useState({});
    const [styleInfo, setStyleInfo] = useState({});
    const {pourcentage, tonnage} = props

    setTimeout(() => {
        const newTonnage = pourcentage - 15
        const newStyleBar = {
            opacity: 1,
            width: `${pourcentage}%`
        }
        const newStyleInfo = {
            opacity: 1,
            paddingLeft: `${newTonnage}%`
        }
        setStyleBar(newStyleBar);
        setStyleInfo(newStyleInfo);
    }, 200);

    return(
        <div className="progress">
            <div className="progressInfo" style={styleInfo}>
                {tonnage}T
            </div>
            <div className="progressDone" style={styleBar}>
            </div>
        </div>
    )
}

export default ProgressBar;