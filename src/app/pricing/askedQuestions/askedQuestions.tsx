import React from "react";
import stl from "./askedQuestions.module.scss";
import Accordion from "@/components/UI/accordion";

const content = [{
    title: 'What is the cost of PPC advertising on Google and Bing?',
    description: 'Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.'
},
{
    title: 'Can I change or cancel my plan at any time?',
    description: 'Yes, you can change or cancel your plan at any time. We offer flexible subscription options that allow you to upgrade, downgrade, or cancel your plan based on your business needs. Our team is always available to assist you in finding the best solution for your marketing goals.'
},
{
    title: 'Do you offer a free trial or consultation?',
    description: 'Yes, we offer a free trial and consultation to help you explore our digital marketing services. During the consultation, our experts will assess your business needs and recommend the best strategies to achieve your goals. Get in touch with us today to get started!'
},
{
    title: 'How do you bill and invoice your clients?',
    description: 'We offer flexible billing options to suit your business needs. Clients can choose between monthly, quarterly, or annual billing cycles. Invoices are generated automatically and sent via email, with secure online payment options available. If you require a custom billing arrangement or have specific invoicing preferences, our team is happy to accommodate your request.'
},
{
    title: 'Are your services guaranteed to deliver results?',
    description: 'While we cannot guarantee specific results, we are committed to delivering high-quality digital marketing strategies tailored to your business goals. Our team uses data-driven approaches, industry best practices, and continuous optimization to maximize your success. We work closely with you to track progress, adjust strategies, and ensure the best possible outcomes.'
},
{
    title: 'Do you offer contract-based or monthly retainer-based pricing?',
    description: 'We offer both contract-based and monthly retainer-based pricing to provide flexibility for our clients. Our contract-based plans are ideal for long-term projects with defined goals, while our retainer-based pricing allows for ongoing support and adaptability. Whether you need a one-time campaign or continuous marketing services, we can customize a plan that fits your business needs.'
},
]

const AskedQuestions = () => {
    return (
        <div className={stl.main}>
            <div className={stl.main__text}>
                <h2 className={stl.main__topic}>Frequently Asked Questions</h2>
                <p className={stl.main__descriptionText}>Have a question? We're here to help.</p>
            </div>
            
            <section className={stl.main__containerContent}>
            {content.map((cartContent, index) => (
                <Accordion key={index} 
                    classNameOpen={stl.open}
                    className={stl.main__content}
                    classNameContainerTitleAndButton={stl.main__contentPrev}
                    classNameContainerTitle={stl.main__containerText}
                    title={cartContent.title} classNameTitle={stl.main__title}
                    description={cartContent.description} classNameDescription={stl.open__description}
                    classNameIcon={stl.main__icon}
                />
                ))}
            </section>  
        </div>
    );
};

export default AskedQuestions;