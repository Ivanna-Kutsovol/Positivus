import React from "react";
import stl from "./article.module.scss";
import Image from "next/image";
import Ilustration from "/public/articleImgFirst.webp";
import Button from "@/components/UI/button/button";

const ArticleFirst = () => {
    return (
        <article className={stl.main}>
            <section className={stl.main__content}>
                <h3 className={stl.main__topic}>Let`s make things happen</h3>
                <p className={stl.main__description}>
                Contact us today to learn more about how our digital marketing services can help your business 
                grow and succeed online.
                </p>
                <Button className={stl.main__button}>Get your proposal</Button>
            </section>
            <Image src={Ilustration} alt="Ilustration article" className={stl.main__ilustration} width={495} height={395} priority />
        </article>
    );
}

export default ArticleFirst;