import React from 'react';
import './Aside.css';
import girl from '../img/girl.png';
import green from '../img/green.png';

const Aside = () => {
    return (
        <div id='aside'>
            <img src={girl} alt="girl"/>
            <img src={green} alt="green"/>
        </div>
    );
}

export default Aside;