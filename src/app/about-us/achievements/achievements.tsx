import React from "react";
import stl from "./achievements.module.scss";
import Image from "next/image";
import imageFour from "../../../../public/aboutUs/imageFour.webp";

const content = [ 
    {
        image: imageFour,
        title: "Best Small Business Digital Marketing Agency of the Year",
        description: "Celebrating our success in delivering innovative strategies and measurable results for small business clients."
    },
    {
        image: imageFour,
        title: "Innovative Website Design",
        description: "Honoring our expertise in developing visually stunning, user-friendly websites that capture a brand’s essence and boost conversions."
    },
    {
        image: imageFour,
        title: "Top Performing PPC Campaign of the Year",
        description: "Acknowledging our ability to design and execute a high-impact pay-per-click campaign that drove exceptional client results."
    },
    {
        image: imageFour,
        title: "Expertise in Social Media Marketing",
        description: "Recognizing our exceptional skills in crafting effective social media strategies, managing accounts, and creating engaging content."
    },
]

const Achievements = () => {
    return (
        <section className={stl.achievements}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Awards & Recognition</h2>
                    <p className={stl.main__descriptionText}>At Positivus, our commitment to excellence 
                        has been recognized by industry leaders. Here are some of our proudest achievements:
                    </p>
                </section>
            </section>
            <div className={stl.container}>
                {content.map((cart, index) => (
                    <div key={index} className={stl.container__content}>
                        <Image className={stl.container__image} src={cart.image} alt="image" width={220} height={230} />
                        <div className={stl.container__text}>
                            <p className={stl.container__title}> {cart.title} </p>
                            <p className={stl.container__description}> {cart.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Achievements;