import React from 'react';
import './Body.css'
import img from '../img/sec_1.jpeg'

function Body() {
    return(
        <div className="Body">
            <div id="container">
                <div>free shipping over $80</div>
                <div>discount in all our online store</div>
            </div>
            <div>
                <img src={img} alt="sec_1" className="sec_1"/>
                <div id="sign-up">
                    <input type="text" placeholder="EMAIL"/>
                    <div>SIGN UP</div>
                </div>
            </div>

        </div>
    );


}

export default Body;
