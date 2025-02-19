import Testimonials from "../home/testimonials/testimonials";
import AllSuccessStories from "./allSuccessStories/allSuccessStories";
import Article from "./article/article";
import FeaturedSuccessStory from "./featuredSuccessStory/featuredSuccessStory";
import Hero from "./hero";

export default function UseCase(){
    return(
        <div>
            <Hero/>
            <FeaturedSuccessStory/>
            <AllSuccessStories/>
            <Testimonials/>
            <Article/>
        </div>
    )

}