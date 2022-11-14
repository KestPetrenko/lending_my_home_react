import React from "react";
import './Section9.css';
import LeftSection from "../leftSection/leftSection";
import Center_Section from "../centrSection/centrSection";
import RightSection from "../rightSection/rightSection";


const Section9 = () => {
    return (
        <section className="section9">
            <LeftSection/>
            <Center_Section/>
            <RightSection/>
        </section>
    );
}

export default Section9;