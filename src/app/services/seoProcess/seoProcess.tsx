import React from "react";
import Image from "next/image";
import stl from "./seoProcess.module.scss";
import First from "../../../../public/aboutUs/seoProcess/01.png";
import Second from "../../../../public/aboutUs/seoProcess/02.png";
import Third from "../../../../public/aboutUs/seoProcess/03.png";
import Fourth from "../../../../public/aboutUs/seoProcess/04.png";
import Fifth from "../../../../public/aboutUs/seoProcess/05.png";
import Sixth from "../../../../public/aboutUs/seoProcess/06.png";

const content = [
    {
        img: First,
        title: 'Website Audit & Analysis',
        description: 'We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.'
    },
    {
        img: Second,
        title: 'Keyword Research & Strategy',
        description: 'Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.'
    },
    {
        img: Third,
        title: 'On-Page Optimization',
        description: 'We optimize your website’s structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.'
    },
    {
        img: Fourth,
        title: 'Content Creation & Optimization',
        description: 'High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.'
    },
    {
        img: Fifth,
        title: 'Link Building',
        description: 'We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.'
    },
    {
        img: Sixth,
        title: 'Monitoring & Reporting',
        description: 'We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.'
    },
]

const SeoProcess = () => {
    return(
        <section className={stl.section}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>How We Work: SEO Process</h2>
                    <p className={stl.main__descriptionText}>Our step-by-step SEO process ensures your website ranks higher,
                        attracts more traffic, and drives lasting results.
                    </p>
                </section>
            </section>
            <section className={stl.main__container}>
                {content.map((cart, index) => (
                    <div key={index} className={stl.main__content}>
                        <Image src={cart.img} className={stl.main__image} alt="image" width={140} height={140}/>
                        <div className={stl.main__textContent}>
                            <h3 className={stl.main__title}>{cart.title}</h3>
                            <p className={stl.main__description}>{cart.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
    
}

export default SeoProcess;