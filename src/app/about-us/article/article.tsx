import React from "react";
import stl from "./article.module.scss";
import Image from "next/image";
import Illustration from "../../../../public/aboutUs/illustration.webp";
import IllustrationMobile from "../../../../public/aboutUs/illustrationMobile.webp";

const Article = () => {
    return (
        <article className={stl.article}>
            <Image src={Illustration} alt="illustration" className={stl.article__illustration} width={505} height={595}/>
            <div className={stl.container}>
                <p className={stl.container__text}>
                “At Positivus, we believe that success is built on innovation, collaboration, and a relentless 
                focus on delivering results.”
                </p>
                <p className={stl.container__author}>— John Smith, Founder of Positivus</p>
            </div>
            <Image src={IllustrationMobile} alt="illustration" className={stl.article__illustrationMobile} width={240} height={240} />
        </article>
    );
}

export default Article;

