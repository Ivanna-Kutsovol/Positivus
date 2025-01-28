import React from 'react';
import stl from './caseStudies.module.scss';
import Case from '../../components/cards/case/case';

const content = [{
    description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
},{
    description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
}, {
    description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
}
]
const caseStudies = () => {
    return(
        <section style={{paddingBottom: '140px'}}>
            <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Case Studies</h2>
                <p className={stl.main__description}>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </section>
        <section className={stl.main}>
            {content.map((cartContent, index) => (
                <Case key={index}
                        description={cartContent.description} className={stl[`main__line-${index}`]} />
            ))}
        </section>
    </section>

    )
}

export default caseStudies;