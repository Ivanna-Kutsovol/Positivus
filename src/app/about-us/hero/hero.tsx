import React from "react";
import stl from "./hero.module.scss";
import Image from "next/image";
import Illustration from "../../../../public/aboutUs/hero.png";

const Hero =() => {
    return (
        <section className={stl.main}>
            <Image className={stl.main__ilustration} src={Illustration} alt="Ilustration hero" width={480} height={440} priority/>
            <div className={stl.main__content}>
                <h1 className={stl.main__title}>Together for Success</h1>
                <h4 className={stl.main__description}>At Positivus, we help businesses grow by combining creativity, innovation, 
                    and data-driven strategies. Together, we build a future of shared success.</h4>
            </div>
        </section>
    );
}

export default Hero;