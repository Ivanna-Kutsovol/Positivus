import React from "react";
import Illustration from "../../../../public/aboutUs/hero.png";
import Hero from "@/components/UI/hero/hero";

const HeroAbout = () => {
    return (
        <Hero
            image = {Illustration}
            title="Together for Success"
            description="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        />
    );
}

export default HeroAbout;