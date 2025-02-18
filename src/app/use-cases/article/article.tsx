import React from "react";
import Image from "next/image";
import stl from "./article.module.scss";
import Button from "@/components/UI/button/button";
import Illustration from "../../../../public/IllustrationArticleUseCase.webp";

const Article = () => {
    return(
        <article className={stl.main}>
            <section className={stl.main__content}>
                <h3 className={stl.main__title}>Let’s Create Your Next Success Story</h3>
                <p className={stl.main__description}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <Button type="submit" className={stl.main__button}>Get your free proposal</Button>
            </section>
            <Image className={stl.main__image} src={Illustration} alt="illustration" width={360} height={400} />
        </article>
    );
}

export default Article;