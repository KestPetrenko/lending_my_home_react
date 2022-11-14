import React from "react";
import './Gallery.css';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';

const Gallery = () => {
    return (
        <div id="gallery-5">
            <div id="first-col">
                <div id="line"></div>
                <div id="img-1">
                    <img src={img1} alt="img1"/>
                    <div>decor</div>
                </div>
            </div>
            <div id="second-col">
                <div id="img-2">
                    <img src={img2} alt="img2"/>
                    <div>bedroom</div>
                </div>
                <div id="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque?</div>
            </div>
            <div id="third-col">
                <img src={img3} alt="img3"/>
            </div>

        </div>
    );
}

export default Gallery;
