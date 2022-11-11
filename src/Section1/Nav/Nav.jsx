import React from 'react';
import './Nav.css'

function Nav(props){
    console.log(props)
    return (
        <div className="Nav">
            <nav>
                <a href="">{props.forNav.link1}</a>
                <a href="">{props.forNav.link2}</a>
                <a href="">{props.forNav.link3}</a>
                <a href="">{props.forNav.link4}</a>
                <a href="">{props.forNav.link5}</a>
                <span>|</span>
                <a href="">{props.forNav.link6}</a>
                <a href="">{props.forNav.link7}</a>
                <a href="">{props.forNav.link8}</a>
                <input type="text" placeholder="SEARCH"/>
            </nav>
        </div>
    );
}

export default Nav;