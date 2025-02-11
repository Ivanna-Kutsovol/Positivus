import React from "react";
import stl from "./ourJourney.module.scss";
import Image from "next/image";
import Circles from "../../../../public/aboutUs/ourJourney/circlesOurJourney.png";
import Star from "../../../../public/aboutUs/ourJourney/star.png";
import LIne from "../../../../public/aboutUs/ourJourney/line.webp";

const OurJourney = () => {
    return(
        <section className={stl.section}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Our Journey</h2>
                    <p className={stl.main__descriptionText}>From humble beginnings to industry leaders, discover how Positivus has evolved 
                        to drive success for businesses worldwide.</p>
                </section>
            </section>
            <section className={stl.main__containerContent}>
                <Image src={LIne} alt="Line" className={stl.main__line} width={450} height={890} priority />
                <Image src={Circles} alt="Circles" className={stl.main__circles} width={420} height={150} priority />
                <div className={stl.main__content}>
                    <h1 className={stl.main__year}>2019</h1>
                    <div className={stl.main__container}>
                        <Image className={stl.main__star} src={Star} alt="Star" width={35} height={35} priority />
                        <div className={stl.main__info}>
                            <h3>The Beginning</h3>
                            <p>Positivus was founded to help businesses navigate the digital world and achieve online success.</p>
                        </div>
                    </div>
                </div>
                <div className={stl.main__contentLeft}>
                    <h1 className={stl.main__year}>2021</h1>
                    <div className={stl.main__container}>
                        <Image className={stl.main__star} src={Star} alt="Star" width={35} height={35} priority />
                        <div className={stl.main__info}>
                            <h3>Industry Recognition</h3>
                            <p>Positivus was named among the top 50 global digital agencies, affirming our leadership.</p>
                        </div>
                    </div>
                </div>
                <div className= {stl.main__content}>
                    <h1 className={stl.main__year}>2023</h1>
                    <div className={stl.main__container}>
                        <Image className={stl.main__star} src={Star} alt="Star" width={35} height={35} priority />
                        <div className={stl.main__info}>
                            <h3>Innovation and Growth</h3>
                            <p>With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.</p>
                        </div>
                    </div>
                </div>
                <div className={stl.main__contentLeft}>
                    <h1 className={stl.main__year}>2024</h1>
                    <div className={stl.main__container}>
                        <Image className={stl.main__star} src={Star} alt="Star" width={35} height={35} priority />
                        <div className={stl.main__info}>
                            <h3>Leading the Future</h3>
                            <p>This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, 
                                data-driven strategies and setting new standards in digital marketing.</p>
                        </div>
                    </div>
                </div>
                <Image src={Circles} alt="Circles" className={stl.main__circles2} width={420} height={150} priority />
            </section>
        </section>
    )
}

export default OurJourney;