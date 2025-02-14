import React from "react";
import Illustration from "../../../public/servicesBlock/StayConnectedToPeople.webp";
import Hero from "@/components/UI/hero/hero";

const heroServices = () => {
    return (
        <Hero
            image = {Illustration}
            title="Expert Digital Marketing Services"
            description="Unlock your business’s full potential with tailored strategies designed to drive growth and deliver results."
        />
    )
}

export default heroServices;