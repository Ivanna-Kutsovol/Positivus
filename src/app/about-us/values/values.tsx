import React from "react";
import stl from "./values.module.scss";
import innovation from "../../../../public/aboutUs/value/innovation.webp";
import collaboration from "../../../../public/aboutUs/value/collaboration.webp";
import Image from "next/image";

const card = [
    {
        title: "Client Success First",
        description: "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.",
    },
    {
        title: "Innovation",
        description: "We constantly strive to stay ahead of industry trends.",
        image: innovation
    },
    {
        title: "Collaboration",
        description: "We believe in the power of teamwork and partnership.",
        image: collaboration
    },
    {
        title: "Transparency",
        description: "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.", 
    }
]

const Values = () => {
    return (
        <section className={stl.section}>
        <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Core Values</h2>
                <p className={stl.main__descriptionText}>At the heart of everything we do are our core values:</p>
        </section>
        <section>
        <div className={stl.main__section}>
        {card.map((cardsContent, index) => (
            <div>
            <div key={`card-${index}`} className={`${stl[`main__container-${index}`]} ${stl.main__container}`}>
                <div className={stl.main__content}>
                    <h3 className={stl.main__title}>
                        {cardsContent.title}
                    </h3>
                    <span className={stl.line} />
                    <p>
                        {cardsContent.description}
                    </p>
                </div>
                {cardsContent.image && <Image src={cardsContent.image} alt="Innovation" className={stl.main__illustration} width={270} height={210} priority />}
            </div><span />
            </div>
            ))}
            </div>
        </section>
    </section>
    );
}

export default Values;
