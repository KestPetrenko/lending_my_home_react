import React from "react";
import img1 from "../img/image1.png";
import img2 from "../img/image2.png";
import "./divImg.css"

const DivImg6 = () => {
    return (
        <div className="divImg6">
            <img src={img1} className="img1"/>
            <img src={img2} className="img2"/>
        </div>
    )
}

export default DivImg6;