import React from 'react';
import Image from 'next/image';
import stl from "./otherServices.module.scss";
import sixth from "../../../../public/services/cardIllustrationFirst.webp";
import fourth from "../../../../public/services/cardIllustrationFifth.webp";
import first from "../../../../public/services/cardIllustrationSecond.webp";
import second from "../../../../public/services/cardIllustrationThird.webp";
import third from "../../../../public/services/cardIllustrationFourth.webp";
import fifth from "../../../../public/services/cardIllustrationSixth.webp";
import { Card } from "@/components/cards/service";

const cards = [
    {
        image:  first,
        title: `Pay-per-click\nadvertising`,
        descriptionButton: `Lean more`
    },
    {
        image:  second,
        title: `Social Media\nManagement`,
        descriptionButton: `Lean more`
    },
    {
        image:  third,
        title: `Email\nMarketing`,
        descriptionButton: `Lean more`
    },
    {
        image:  fourth,
        title: `Content\nCreation`,
        descriptionButton: `Lean more`
    },
    {   
        image:  fifth,
        title: `Analytics and\nTracking`,
        descriptionButton: `Lean more`
    },
    {
        image:  sixth,
        title: `Search engine\noptimization`,
        descriptionButton: `Lean more`
    }
]

const OtherServices = () => {
    return (
        <section className={stl.main}>
            <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Our Other Services</h2>
                <p className={stl.main__descriptionText}>At our digital marketing agency, we offer a range of services to 
                    help businesses grow and succeed online. These services include:</p>
            </section>
            <section className={stl.main__section}>
                {cards.map((cardsContent, index) => (
                    <Card key={`card-${index}`} className={`${stl[`main__container-${index}`]} ${stl.main__container}`}
                    contentClassName={stl.main__content}
                    titleContentClassName={stl.main__titleContent}
                    title={cardsContent.title} titleClassName={`${stl[`main__title-${index}`]} ${stl.main__title}`}
                    descriptionButton={cardsContent.descriptionButton} classNameButton={`${stl[`main__button-${index}`]} ${stl.main__button}`} href='/'
                    image={cardsContent.image} classNameIlustration={stl.main__illustration} width={210} height={170}
                    />
                ))}
            </section>
        </section>
    )
}

export default OtherServices;