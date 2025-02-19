import React from "react";
import stl from "./allSuccessStories.module.scss";
import Case from "@/components/cards/case";

const content = [{
    title: 'E-commerce Fashion Brand',
    description: "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
},
{
    title: 'Local Restaurant Chain',
    description: "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic."
},
{
    title: 'Healthcare Provider',
    description: 'Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.'
},
{
    title : 'E-commerce Fashion Brand',
    description: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.'
},
{
    title : 'Local Restaurant Chain',
    description: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.'
},
{
    title : 'Healthcare Provider',
    description: 'Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.'
}
]

const AllSuccessStories = () => {
    return (
        <section className={stl.section}>
            <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Our Other Services</h2>
                <p className={stl.main__descriptionText}>At our digital marketing agency, we offer a range of services to 
                    help businesses grow and succeed online. These services include:</p>
            </section>
            <section className={stl.mainCards}>
            <div className={stl.mainCards__line}/>
            {content.map((cartContent, index) => (
                <Case key={index} 
                    classNameMain={stl.mainCards__container}   
                    title={cartContent.title}   
                    classNameTitle={stl.mainCards__title}              
                    classNameDescription={stl.mainCards__description}
                    description={cartContent.description} 
                    classNameButton={stl.mainCards__leanMore}
                    classNameTextMore={stl.mainCards__text}/>
            ))}
            </section>
        </section>
    )
};

export default AllSuccessStories;