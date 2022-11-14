import React from "react";
import first_optn from '../../img/1.jpeg'
import second_optn from '../../img/2.jpeg'
import third_optn from '../../img/3.jpeg'
import './Gallery.css'

const Gallery = () => {
    return (
        <div id="gallery5_2">
            <div id="images">
                <div id="first-col-5_2">
                    <div>
                        <input type="radio" id="first-option" name="img"/>
                        <label htmlFor="first-option">
                            <img src={first_optn} alt="first-pic"/>
                            <div className="below">Lorem ipsum.</div>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="third-option" name="img"/>
                        <label htmlFor="third-option">
                            <img src={third_optn} alt="third-pic"/>
                            <div className="below">Lorem.</div>
                        </label>
                    </div>
                </div>

                <div id="second-col-5_2">
                    <div id="second-opt">
                        <input type="radio" id="second-option" name="img"/>
                        <label htmlFor="second-option">
                            <img src={second_optn} alt="second-pic"/>
                            <div className="below">Lorem ipsum dolor.</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery