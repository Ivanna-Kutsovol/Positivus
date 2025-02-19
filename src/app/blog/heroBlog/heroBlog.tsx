import React from "react";
import Illustration from "../../../../public/hero.webp";
import stl from "./heroBlog.module.scss"
import Image from "next/image";

const heroBlog = () => {
    return (
        <section className={stl.main}>
            <Image 
            className={stl.main__ilustration} 
            src={Illustration} 
            alt="Ilustration hero" 
            width={470} height={430} 
            priority/>
            <div className={stl.main__content}>
                <p className={stl.main__strategies}>Marketing Strategies</p>
                <h2 className={stl.main__title}>PPC vs. Organic Marketing: Which One Is Right for Your Business?</h2>
                <h4 className={stl.main__description}>PPC and organic marketing each offer unique benefits for driving traffic 
                    and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance.</h4>
            </div>
        </section>
    )
}

export default heroBlog;