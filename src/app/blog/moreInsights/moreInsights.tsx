import React from "react";
import stl from "./moreInsights.module.scss";
import Case from "@/components/cards/case";

const content = [
    {
        title: "10 SEO Myths You Need to Stop Believing",
        description: "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
    },
    {
        title: "Maximizing ROI with Social Media Advertising",
        description: "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.",
    },
    {
        title: "How Content Marketing Fuels Long-Term Growth",
        description: "Content isn’t just king—it’s the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.",
    },
    {
        title: "The Art of A/B Testing: Perfecting Your Campaigns",
        description: "From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.",
    },
    {
        title: "Understanding Google’s Latest Algorithm Update",
        description: "Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
    },
    {
        title: "5 Ways AI is Changing Digital Marketing",
        description: "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.",
    }
]

const moreInsights = () =>{
    return(
        <section className={stl.main}>
            <section className={stl.main__text}>
                <h2 className={stl.main__topic}>Explore More Insights</h2>
                <p className={stl.main__descriptionText}>Discover expert tips, strategies, and stories to keep you ahead in the digital landscape.</p>
            </section>
            <section className={stl.mainCards}>
            <div className={stl.mainCards__line}/>
                {content.map((card, index)=> (
                    <Case key={index}
                        classNameMain={stl.mainCards__container}   
                        title={card.title}   
                        classNameTitle={stl.mainCards__title}              
                        classNameDescription={stl.mainCards__description}
                        description={card.description} 
                        classNameButton={stl.mainCards__leanMore}
                        classNameTextMore={stl.mainCards__text}
                        textButton='Read article'
                    />
                ))}
                
            </section>
        </section>
    )
}

export default moreInsights;