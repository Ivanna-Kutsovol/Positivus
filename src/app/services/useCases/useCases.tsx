import React from 'react';
import stl from './useCases.module.scss'
import Case from '@/components/cards/case/case';

const cases = [
    {
        title: 'E-commerce Fashion Brand',
        description: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.'
    },
    {
        title: 'Local Restaurant Chain',
        description: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.'
    },
    {
        title: 'Healthcare Provider',
        description: 'Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.'
    }
]

const UseCases = () => {
    return (
        <section className={stl.section}>
            <section className={stl.main}>
            <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Use Cases</h2>
                    <p className={stl.main__descriptionText}>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                </section>
            </section>
            <section className={stl.mainCards}>
                {cases.map((content, index) => (
                    <Case
                        key={index}
                        classNameMain={stl.mainCards__container}                    
                        classNameDescription={stl.mainCards__description}
                        title={content.title}
                        classNameTitle={stl.mainCards__title}
                        description={content.description}
                        className={stl[`main__line-${index}`]}
                    />
                ))}
            </section>
        </section>
    )
}

export default UseCases;