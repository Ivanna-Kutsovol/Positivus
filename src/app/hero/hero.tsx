import React from "react";
import stl from "./hero.module.scss";
import Ilustration from "/public/hero.webp";
import Image from "next/image";

const hero = () => {
    return (
        <section className={stl.main}>
            <h1 className={stl.main__title}>Navigating the digital landscape for success</h1>
            <div className={stl.main__ilustration}>
                <Image src={Ilustration} alt="Ilustration hero" width={600} height={515} priority/>
            </div>
            <section className={stl.main__content}>
            <p className={stl.main__text}>Our digital marketing agency helps businesses grow and 
                succeed online through a range of services including SEO, 
                PPC, social media marketing, and content creation.
            </p>
            <button className={stl.main__button}>Book a consultation</button>
            </section>
        </section>
    )
}

export default hero;