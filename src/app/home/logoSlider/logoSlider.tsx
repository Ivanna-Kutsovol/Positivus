import React from 'react';
import stl from "./logoSlider.module.scss";
import Image from "next/image";
import amazon from "/public/logoSlider/logo-amazon.webp";
import drillle from "/public/logoSlider/logo-drillle.webp";
import zoom from "/public/logoSlider/logo-zoom.webp";
import notion from "/public/logoSlider/logo-notion.webp";
import netflix from "/public/logoSlider/logo-netflix.webp";
import hubspot from "/public/logoSlider/logo-hubspot.webp";

const logos = [amazon, drillle, zoom, notion, netflix, hubspot];

const LogoSlider = () => {
    return (
        <section className={stl.logoSlider}>
            <div className={stl.logoSlider__logos1}>
                {logos.map((logo, index) => (
                    <Image key={`logo-${index}`} className={stl.logoSlider__logo} src={logo} alt={`Logo ${index + 1}`} width={100} height={48} priority/>
                ))}
                {logos.map((logo, index) => (
                    <Image key={`logo-duplicate-${index}`} className={stl.logoSlider__logo} src={logo} alt={`Logo duplicate ${index + 1}`} width={100} height={48} priority/>
                ))}
            </div>
            <div className={stl.logoSlider__logos2}>
                {logos.map((logo, index) => (
                    <Image key={`logo2-${index}`} className={stl.logoSlider__logo} src={logo} alt={`Logo ${index + 1}`} width={100} height={48} priority/>
                ))}
                {logos.map((logo, index) => (
                    <Image key={`logo2-duplicate-${index}`} className={stl.logoSlider__logo} src={logo} alt={`Logo duplicate ${index + 1}`} width={100} height={48} priority/>
                ))}
            </div>
        </section>
    )
}

export default LogoSlider;