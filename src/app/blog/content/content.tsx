"use client"

import React, {useState} from "react";
import stl from "./content.module.scss";
import Image from "next/image";
import Star from "../../../../public/aboutUs/ourJourneyIllustration/star.png"
import Facts from "../facts/facts";
import StarButton from "../../../../public/starBlog.png";

const Content = () => {
    const[fontSize, setFontSize] = useState(18);
    const[activeSize, setActiveSize] = useState(18);
    const handleFontSizeChange = (size: number) => {
        setFontSize(size);
        setActiveSize(size);
      };
    return (
        <section className={stl.section}>
            <div className={stl.section__head}>
            <div className={stl.section__headContent}>
                <Image src={Star} alt="Star" className={stl.star} width={66} height={66} priority />
                <div className={stl.section__headText}>
                    <h4 className={stl.section__name}>Sarah Kim</h4>
                    <p className={stl.section__position}>Content Creator</p>
                </div>
            </div>
                <div className={stl.section__date}>
                    <button onClick={() => handleFontSizeChange(24)} 
                    className={`${stl.section__dateBig} ${activeSize === 24 ? stl.active : ""}`}>A</button>
                    <button onClick={() => handleFontSizeChange(18)} 
                    className={`${stl.section__dateMiddle} ${activeSize === 18 ? stl.active : ""}`}>A</button>
                    <button onClick={() => handleFontSizeChange(14)} 
                    className={`${stl.section__dateSmall} ${activeSize === 14 ? stl.active : ""}`}>A</button>
                </div>
            </div>
            <span className={stl.section__line} />

            <div className={stl.section__content}>
                <p className={stl.section__introduction}>
                    In the ever-evolving digital landscape, businesses are faced with an important question: 
                    What should they invest in pay-per-click (PPC) advertising or focus on organic marketing strategies? 
                    While both approaches have their merits, choosing the right one depends on your goals, budget, and timeline. 
                    Let’s dive into the strengths, challenges, 
                    and real-world applications of PPC and organic marketing to help you make an informed decision.
                </p>
                <div className={stl.section__block}>
                    <h2 className={stl.section__title}>The Challenge of Standing Out Online</h2>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>Every day, millions of businesses compete for visibility online, making it increasingly 
                        difficult to capture the attention of potential customers. Organic search results are highly sought after, 
                        but earning a top spot on Google takes time and consistent effort. Meanwhile, 
                        PPC ads promise instant visibility but can quickly drain your budget if not executed effectively.
                    </p> 
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>
                        For small businesses with limited resources, this dilemma can feel like an impossible balancing act. 
                        Do you play the long game with organic strategies or opt for quick wins with PPC?
                    </p> 
                </div>
                <div className={stl.section__block}>
                    <h2 className={stl.section__title}>Comparing PPC and Organic Marketing</h2>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>
                        Pay-per-click (PPC) and organic marketing each offer distinct advantages and challenges, making them
                        effective for different business needs. PPC is designed to deliver immediate results by securing top
                        placements on search engines or social media platforms, providing businesses with instant visibility. 
                        It allows for precise targeting based on factors like demographics, behavior, and location, offering 
                        flexibility to start small and scale as needed. However, PPC can become expensive quickly, particularly 
                        in competitive industries, and its results are short-lived since traffic stops when the campaign ends.
                    </p>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>
                        In contrast, organic marketing focuses on building a strong, sustainable presence through strategies 
                        like search engine optimization (SEO) and content creation. This approach builds trust and credibility 
                        over time, delivering consistent traffic without the need for ongoing ad spend. While the results can take 
                        longer to materialize and are less immediate than PPC, organic marketing provides long-term benefits that
                        make it a valuable strategy for sustained growth.
                    </p>
                </div>
                <div className={stl.section__block}>
                    <h2 className={stl.section__title}>Striking the Right Balance</h2>
                    <q className={stl.section__quote}>“PPC and organic marketing aren’t rivals—they’re teammates. The best strategies combine both to create 
                        a holistic approach to growth,” says a digital marketing expert.</q>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>For instance, a business might use PPC to generate quick traffic for a new product launch 
                        while building long-term organic authority through SEO and blogging. Combining these strategies ensures you’re 
                        reaching your audience now while laying the groundwork for future success.</p>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>
                        For small businesses with limited resources, this dilemma can feel like an impossible balancing act. Do you play the long 
                        game with organic strategies or opt for quick wins with PPC?</p>
                </div>
                <Facts/>
                <div className={stl.section__block}>
                    <h2 className={stl.section__title}>Real-World Examples</h2>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>PPC and organic marketing have proven effective in different scenarios, 
                        and real-world examples highlight their impact. A local restaurant, for instance, leveraged Google Ads to 
                        target the search term “best Italian food near me,” which led to a remarkable 120% increase in reservations within 
                        just two weeks. Similarly, a B2B SaaS company focused on organic marketing by investing in SEO and blog content. 
                        This strategic approach helped them rank for competitive keywords and boosted their website traffic by 200% over six 
                        months. Some businesses find success by combining both strategies, like an e-commerce retailer that launched a targeted 
                        PPC campaign for seasonal sales while simultaneously optimizing product pages for organic search. This hybrid approach 
                        resulted in a 30% higher return on investment compared to relying solely on PPC advertising.
                    </p> 
                </div>
                <div className={stl.section__block}>
                    <h2 className={stl.section__title}>Key Takeaways for Your Marketing Strategy</h2>
                    <ul className={`${stl.section__list} ${stl.section__text}`}>
                        <li style={{ fontSize: fontSize }} className={stl.section__item}>PPC is ideal for short-term goals, like promoting sales, events, or new products.</li>
                        <li style={{ fontSize: fontSize }} className={stl.section__item}>Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.</li>
                        <li style={{ fontSize: fontSize }} className={stl.section__item}>A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.</li>
                    </ul>
                </div>
                <div className={stl.section__block}>
                    <h2 className={stl.section__title}>Choosing the Best Strategy for Your Business</h2>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>
                        Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you’re working with a 
                        tight deadline or launching a new service, PPC can deliver immediate results. On the other hand, if you’re focused on 
                        building a loyal audience and maintaining a steady flow of leads, organic marketing is your best bet.
                    </p>
                    <p style={{ fontSize: fontSize }} className={stl.section__text}>
                        By understanding the strengths and limitations of both strategies, you can create a marketing plan that 
                        aligns with your goals, budget, and target audience. Ready to take your next step? Start building a strategy 
                        that drives results today.</p>
                </div>
            </div>  
            <Image src={StarButton} alt="Star" className={stl.starButton} width={20} height={20} priority />
        </section>
    )
};

export default Content;