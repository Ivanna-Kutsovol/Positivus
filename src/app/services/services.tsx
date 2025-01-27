import React from "react";
import stl from "./services.module.scss";
import Image from "next/image";
import first from "/public/services/cardIllustrationFirst.webp";
import fifth from "/public/services/cardIllustrationFifth.webp";
import second from "/public/services/cardIllustrationSecond.webp";
import third from "/public/services/cardIllustrationThird.webp";
import fourth from "/public/services/cardIllustrationFourth.webp";
import sixth from "/public/services/cardIllustrationSixth.webp";
import Link from "next/link";
import { Card } from "@/components/cards/service";

const cards = [{
    image:  first,
    title: `Search engine\nnoptimization`,
    descriptionButton: `Lean more`
},
{
    image:  second,
    title: `Pay-per-click\nadvertising`,
    descriptionButton: `Lean more`
},
{
    image:  third,
    title: `Social Media\nManagement`,
    descriptionButton: `Lean more`
},
{
    image:  fourth,
    title: `Email\nMarketing`,
    descriptionButton: `Lean more`
},
{
    image:  fifth,
    title: `Content\nCreation`,
    descriptionButton: `Lean more`
},
{   
    image:  sixth,
    title: `Website\nDevelopment`,
    descriptionButton: `Lean more`
}];
const Services = () => {
    return (
        <section className={stl.main}>
            <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Services</h2>
                <p className={stl.main__description}>At our digital marketing agency, we offer a range of services to help 
                    businesses grow and succeed online. These services include:</p>
            </section>
            <section className={stl.main__section}>
                {cards.map((cardsContent, index) => (
                    <Card key={`card-${index}`} className={`${stl[`main__container-${index}`]} ${stl.main__container}`}
                    contentClassName={stl.main__content}
                    titleContentClassName={stl.main__titleContent}
                    title={cardsContent.title} titleClassName={stl[`main__title-${index}`]}
                    descriptionButton={cardsContent.descriptionButton} classNameButton={`${stl[`main__button-${index}`]} ${stl.main__button}`} href='/'
                    image={cardsContent.image} classNameIlustration={stl.main__illustration} width={210} height={170}
                    />
                ))}
            </section>
        </section>              
    );
}

export default Services;