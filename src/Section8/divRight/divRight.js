import img3 from "../img/image2.png";
import img4 from "../img/image3.png";
import React from "react";
import "./divRight.css"

const DivRight = () => {
    return (
        <div className="divRight">
            <img src={img3} className="img3"/>
            <img src={img4} className="img4"/>
            <h2>HOURS <br/>
                <span> of extraordinary discounts </span>
            </h2>
        </div>
    )
}

export default DivRight;