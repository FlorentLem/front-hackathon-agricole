import React, {useState} from "react";
import "./Home.scss";

function ProgressBar(props) {
    const [style, setStyle] = useState({});
    const {done} = props

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 200);

    return(
        <div className="progress">
            <div className="progressDone" style={style}>
                {done}%
            </div>
        </div>
    )
}

export default ProgressBar;