import './App.css';
import Sec1 from "./Section1/Home page/Home";
import Sec2 from "./Section2/Sec2/Sec2";
import Sec3 from "./Section3/Sec3/Sec3";
import Sec4 from "./Section4/Sec4/Sec4";
import Sec5 from "./Section5/Sec5/Sec5";
import Section6 from "./Section6/Section6/Section6";
import Section7 from "./Section7/Section7/Section7";
import Section8 from "./Section8/Section8/Section8";
import Section9 from "./Section9/Section9/Section9";
import React from "react";
import Sec5_2 from "./Section5.2/Sec5.2/Sec5.2";

function App(props) {
    console.log(props)
    return (
        <div>
            <Sec1 forHeader={props.state.header}/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
            <Sec5_2/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
        </div>
    );
}

export default App;
