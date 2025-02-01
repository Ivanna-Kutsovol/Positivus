import React from "react";
import stl from "./workingProcess.module.scss";
import Accordion from "@/components/UI/accordion";

const content = [{
    number: "01",
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
},
{
    number: "02",
    title: 'Research and Strategy Development',
    description: 'During the research and strategy development phase, we will analyze market trends, competitor strategies, and customer insights to create a data-driven plan. This process ensures that our approach is tailored to your business objectives and sets a strong foundation for success.'
},
{
    number: "03",
    title: 'Implementation',
    description: 'With a solid strategy in place, we move into the implementation phase, where plans turn into action. Our team will execute campaigns, optimize performance, and ensure all elements are seamlessly integrated to achieve your business goals.'
},
{
    number: "04",
    title: 'Monitoring and Optimization',
    description: 'After implementation, we continuously monitor performance and analyze key metrics to identify areas for improvement. Through ongoing optimization, we refine strategies to maximize efficiency and drive better results over time.'
},
{
    number: "05",
    title: 'Reporting and Communication',
    description: 'Clear and consistent communication is key to success. We provide detailed reports on performance metrics, insights, and progress, ensuring transparency and alignment with your business objectives.'
},
{
    number: "06",
    title: 'Continual Improvement',
    description: 'We believe in the power of continuous growth. By regularly reviewing outcomes, gathering feedback, and staying agile, we refine strategies to ensure sustained success and adapt to evolving market conditions.'
}
]

const WorkingProcess = () => {
    return( 
    <section className={stl.section}>
        <section className={stl.main}>
            <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Working Process</h2>
                <p className={stl.main__descriptionText}>Step-by-Step Guide to Achieving Your Business Goals</p>
            </section>
        <section className={stl.main__containerContent}>
            {content.map((cartContent, index) => (
                <Accordion key={index} 
                classNameOpen={stl.open}
                className={stl.main__content}
                classNameContainerTitleAndButton={stl.main__contentPrev}
                classNameContainerTitle={stl.main__containerText}
                number={cartContent.number}  classNameNumber={stl.main__number}
                title={cartContent.title} classNameTitle={stl.main__title}
                description={cartContent.description} classNameDescription={stl.open__description}
                classNameIcon={stl.main__icon}
                />
            ))}
            </section>  
        </section>
    </section>
    );
};

export default WorkingProcess;