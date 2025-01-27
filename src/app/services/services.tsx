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
        <main className={stl.main}>
            <section className={stl.main__section}>
                {cards.map((cardsContent, index) => (
                    <div key={`card-${index}`} className={`${stl.main__container} ${stl[`main__container-${index}`]}`}>
                        <span className={stl.main__content}>
                        <span className={stl.main__titleContainer}>
                            {cardsContent.title.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                        <h3 className={stl[`main__title-${index}`]} key={i}>
                                            {line}
                                        </h3>
                                </React.Fragment>
                            ))}
                            </span>
                            <Link href="/" className={stl[`main__button-${index}`]}>
                                    {cardsContent.descriptionButton}
                            </Link>
                        </span>

                        <div className={stl.main__illustration}>
                            <Image src={cardsContent.image} alt={`illustration ${index + 1}`} width={210} height={170} priority />
                        </div>
                    </div>
                ))}
                </section>
        </main>
    );
};

export default Services;