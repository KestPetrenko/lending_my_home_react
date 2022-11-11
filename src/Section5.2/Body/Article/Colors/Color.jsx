import React from "react";
import './Color.css'

const Color = () => {
    return (
        <div id="colors">
            <div>
                <input type="radio" id="color1" name="color"/>
                <label htmlFor="color1">Moss Green</label>
            </div>

            <div>
                <input type="radio" id="color2" name="color"/>
                <label htmlFor="color2">Akaroa</label>
            </div>

            <div>
                <input type="radio" id="color3" name="color"/>
                <label htmlFor="color3">Sandrift</label>
            </div>

            <div>
                <input type="radio" id="color4" name="color"/>
                <label htmlFor="color4">Apache</label>
            </div>

            <div>
                <input type="radio" id="color5" name="color"/>
                <label htmlFor="color5">Silver</label>
            </div>
        </div>
    )
}

export default Color