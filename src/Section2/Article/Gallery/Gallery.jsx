import React from 'react';
import './Gallery.css'
import img_1 from '../../img/1.png';
import img_2 from '../../img/2.png';
import img_3 from '../../img/3.png';
import img_4 from '../../img/4.png';
import img_5 from '../../img/5.png';
import img_6 from '../../img/6.png';
import img_7 from '../../img/7.png';
import img_9 from '../../img/9.png';
import arrow from '../../img/arrow.png'

const Gallery = () => {
    return(
        <div>
            <div id="gallery">
                <div className="frst-row">
                    <div className='txt-img'>A wonderful serenity has taken possession of my entire soul</div>
                    <img src={img_1} alt="img_1"/>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="frst-row">
                    <div className='txt-img'>A wonderful serenity has taken possession of my entire soul</div>
                    <img src={img_2} alt="img_2"/>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="frst-row">
                    <div className='txt-img'>A wonderful serenity has taken possession of my entire soul</div>
                    <img src={img_3} alt="img_3"/>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="frst-row">
                    <div className='txt-img'>A wonderful serenity has taken possession of my entire soul</div>
                    <img src={img_4} alt="img_4"/>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div><img src={img_5} alt="img_5"/></div>
                <div><img src={img_6} alt="img_6"/></div>
                <div><img src={img_7} alt="img_7"/></div>
                <div><img src={img_9} alt="img_8"/></div>
            </div>
        </div>
    );
}

export default Gallery;