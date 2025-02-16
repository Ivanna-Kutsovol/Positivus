import Hero from "./hero";
import OtherServices from "./otherServices/otherServices";
import SearchEngine from "./searchEngine/searchEngine";
import SeoProcess from "./seoProcess/seoProcess";
import UseCases from "./useCases/useCases";

export default function Services(){
    return(
        <div>
            <Hero/>
            <SearchEngine/>
            <SeoProcess/>
            <UseCases/>
            <OtherServices/>
        </div>
    )

}