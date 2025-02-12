import Achievements from "./achievements/achievements";
import Article from "./article/article";
import Hero from "./hero/hero";
import OurImpact from "./impact/impact";
import OurJourney from "./journey/journey";
import Values from "./values/values";

export default function AboutUS(){
    return(
        <div>
            <Hero/>
            <OurImpact/>
            <OurJourney/>
            <Values/>
            <Article/>
            <Achievements/>
        </div>
    )
}