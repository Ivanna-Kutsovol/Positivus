import React from "react";
import Illustration from "../../../public/use-cases/ill_usecases.webp";
import Hero from "@/components/UI/hero/hero";

const heroUseCases = () => {
    return (
        <Hero
            image={Illustration}
            title="Proven Success Stories"
            description="See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together."
        />
    )
}

export default heroUseCases;