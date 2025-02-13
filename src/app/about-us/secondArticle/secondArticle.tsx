import React from "react";
import Image from "next/image";
import stl from "./secondArticle.module.scss";
import Button from "@/components/UI/button/button";
import Illustration from "../../../../public/aboutUs/articleSecond.webp";

const secondArticle = () =>{
    return (
        <article className={stl.main}>
            <section className={stl.main__content}>
                <h3>Join Our Team</h3>
                <p>At Positivus, we thrive on innovation and collaboration. We're always looking for 
                    passionate individuals to join our team and help businesses grow. Ready to make an impact?</p>
                    <Button type="submit" className={stl.main__submit}>Explore Careers</Button>
            </section>
            <Image src={Illustration} className={stl.image} alt="illustration" width={330} height={330}/>
        </article>
    );
}

export default secondArticle;