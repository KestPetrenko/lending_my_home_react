import React from 'react';
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Body from "../Body/Body";
import './Home.css'

function Home(props) {
    return(
        <div className="home-page">
            <Header/>
            <Nav forNav={props.forHeader}/>
            <Body/>
        </div>
    );
}

export default Home;