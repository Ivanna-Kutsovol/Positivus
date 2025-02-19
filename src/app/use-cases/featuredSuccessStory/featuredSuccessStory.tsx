import React from "react";
import stl from "./featuredSuccessStory.module.scss";
import Link from "next/link";
import AnimatedCounter from "@/components/UI/AnimatedCounter";
import Image from "next/image";
import Star from "../../../../public/aboutUs/ourJourneyIllustration/starMobile.webp"

const FeaturedSuccessStory = () => {
    const reduceMotion = false;
    return (
        <section className={stl.section}>
            <Image src={Star} alt="Star" className={stl.section__starMobile} width={18} height={18} priority />
            <div className={stl.section__content}>
                <h2 className={stl.section__title}>Featured Success Story</h2>
                <h3 className={stl.section__titleMobile}>Featured</h3>
                <h3 className={stl.section__description}>Scaling Success for a Leading E-Commerce Brand</h3>
                <p className={stl.section__text}>Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, 
                drive traffic, and boost sales.</p>
                <Link href="#" className={stl.section__link}>Read</Link>
            </div>
            <div className={stl.section__block}>
                <div className={stl.section__blockContent}>
                    <h2 className={stl.section__blockTitle}>{reduceMotion ? "200" : <AnimatedCounter from={0} to={200}/>} %</h2>
                    <p className={stl.section__blockDescription}>increase in organic traffic</p>
                </div>
                <div className={stl.section__blockContent}>
                    <h2 className={stl.section__blockTitle}>{reduceMotion ? "150" : <AnimatedCounter from={0} to={150}/>}%</h2>
                    <p className={stl.section__blockDescription}>rise in online sales</p>
                </div>
                <div className={stl.section__blockContent}>
                    <h2 className={stl.section__blockTitle}>{reduceMotion ? "75" : <AnimatedCounter from={0} to={75}/>}%</h2>
                    <p className={stl.section__blockDescription}>reduction in cost-per-click (CPC)</p>
                </div>
                <div className={stl.section__blockContent}>
                    <h2 className={stl.section__blockTitle}>{reduceMotion ? "300" : <AnimatedCounter from={0} to={300}/>}%</h2>
                    <p className={stl.section__blockDescription}>improvement in conversion rate</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSuccessStory;