import Testimonials from "../home/testimonials/testimonials";
import Article from "./article/article";
import FeaturedSuccessStory from "./featuredSuccessStory/featuredSuccessStory";
import Hero from "./hero";

export default function UseCase(){
    return(
        <div>
            <Hero/>
            <FeaturedSuccessStory/>
            <Testimonials/>
            <Article/>
        </div>
    )

}