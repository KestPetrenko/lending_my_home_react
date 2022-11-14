import React from "react";
import ClickCounter from "./ClickCounter/ClickCounter";
import './Article.css'
import Color from "./Colors/Color";

const Article = () => {
    return (
        <div id="article-5_2">
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti laudantium nemo odio?
            </h3>

            <div>
                <div id="clr-div">Select color</div>
                <Color/>
            </div>

            <div>
                <div id="number">Select  number of items</div>
                <ClickCounter/>
            </div>

            <div id="sbm-btn">Submit</div>
        </div>
    )
}

export default Article


