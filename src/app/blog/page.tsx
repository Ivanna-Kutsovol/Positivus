import Content from "./content/content";
import Hero from "./heroBlog/heroBlog";
import MoreInsights from "./moreInsights/moreInsights";

export default function Blog(){
    return(
        <div>
            <Hero/>
            <Content/>
            <MoreInsights/>
        </div>
    )

}