import React from "react";
import stl from "./searchEngine.module.scss";
import Image from "next/image";
import Star from "../../../../public/aboutUs/ourJourneyIllustration/star.png";
import Button from "@/components/UI/button/button";
import starMobile from "../../../../public/aboutUs/ourJourneyIllustration/starMobile.webp";

const searchEngine = () =>{
    return(
        <section className={stl.main}>
            <div className={stl.main__start}>
                <Image className={stl.main__star} src={Star} width={35} height={35} alt="star"/>
                <Image className={stl.main__starMobile} src={starMobile} width={18} height={18} alt="starMobile"/>
                <div>
                    <h3 className={stl.main__topicMobile}>FEATURED</h3>
                    <h3 className={stl.main__topic}>Search engine</h3>
                    <h3 className={stl.main__topic}>optimization</h3>
                </div>
            </div>
            
            <div className={stl.main__content}>
                <p>SEO is the process of improving your website’s visibility on search engines like Google. 
                    By optimizing your content and site structure, 
                    we help your business rank higher in search results, driving more organic traffic and potential customers.</p>
                <Button type="submit" className={stl.main__button}>Boost My Rankings</Button>
            </div>
        </section>
    )
}

export default searchEngine;