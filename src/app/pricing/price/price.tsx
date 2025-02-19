import React from "react";
import stl from "./price.module.scss";
import Button from "@/components/UI/button/button";

const card = [
    {
        plan: "Basic Plan",
        price: '$500',
        in: '/month',
        buttonFirst: 'Get Started',
        buttonSecond: 'Request a quote',
        descriptionFirst: 'Website optimization',
        descriptionSecond: 'Social media setup and management (1 platform)',
        descriptionThird: 'Monthly progress report',
        descriptionFourth: 'Email support',
        descriptionFifth: 'Basic competitor analysis',
        descriptionSixth: 'Initial SEO audit',
    },
    {
        plan: "Pro Plan",
        active: "Popular",
        price: '$1000',
        in: '/month',
        buttonFirst: 'Get Started',
        buttonSecond: 'Request a quote',
        descriptionFirst: 'Includes all from the Basic Plan',
        descriptionSecond: 'Social media setup and management (up to 3 platforms)',
        descriptionThird: 'PPC ad campaign management',
        descriptionFourth: 'Email and phone support',
        descriptionFifth: 'On-page SEO improvements',
        descriptionSixth: 'Monthly content recommendations',
    },
    {
        plan: "Elite Plan",
        price: '$2000',
        in: '/month',
        buttonFirst: 'Get Started',
        buttonSecond: 'Request a quote',
        descriptionFirst: 'Includes all from the Pro Plan',
        descriptionSecond: 'Website design and development',
        descriptionThird: 'Comprehensive SEO strategy',
        descriptionFourth: 'Social media setup and management (up to 5 platforms)',
        descriptionFifth: 'Content marketing strategy and implementation',
        descriptionSixth: 'In-depth analytics and reporting',
    }
]

const Price = () => {
    return (
        <section className={stl.main}>
            <div className={stl.main__text}>
                <h1 className={stl.main__title}>Pricing</h1>
                <h4 className={stl.main__subtitle}>Elevate Your Online Presence: Competitive Pricing for Exceptional Results</h4>
            </div>
            <section className={stl.main__cards}>
                {card.map((content, index) => (
                    <div key={`card-${index}`} className={`${stl[`main__container-${index}`]} ${stl.main__container}`}>
                        <div className={stl.main__planActive}>
                            <h3 className={stl.main__plan}>{content.plan}</h3>
                            {content.active && <p className={stl.main__active}>{content.active}</p>}
                        </div>
                        
                        <div className={stl.main__price}>
                            <span className={stl.main__price__number}>{content.price}</span>
                            <span className={stl.main__price__in}>{content.in}</span>
                        </div>

                        <div className={stl.main__button}>
                            <Button type="submit" className={`${stl[`main__buttonFirst-${index}`]} ${stl.main__buttonFirst}`}>{content.buttonFirst}</Button>
                            <Button type="submit" className={`${stl[`main__buttonSecond-${index}`]} ${stl.main__buttonSecond}`}>{content.buttonSecond}</Button>
                        </div>

                        <span className={`${stl[`main__line-${index}`]} ${stl.main__line}`}/>

                        <ul className={stl.main__list}> 
                            <li className={stl.main__item}>{content.descriptionFirst}</li>
                            <li className={stl.main__item}>{content.descriptionSecond}</li>
                            <li className={stl.main__item}>{content.descriptionThird}</li>
                            <li className={stl.main__item}>{content.descriptionFourth}</li>
                            <li className={stl.main__item}>{content.descriptionFifth}</li>
                            <li className={stl.main__item}>{content.descriptionSixth}</li>
                        </ul>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Price;