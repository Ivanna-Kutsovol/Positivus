import React from "react"
import Image, {StaticImageData} from "next/image"
import stl from "./hero.module.scss"

interface HeroProp {
    image: StaticImageData;
    title: string;
    description: string;
}

const Hero: React.FC<HeroProp> = ({image, title, description}) =>{
    return(
        <section className={stl.main}>
            <Image 
            className={stl.main__ilustration} 
            src={image} 
            alt="Ilustration hero" 
            width={480} height={440} 
            priority/>
            <div className={stl.main__content}>
                <h1 className={stl.main__title}>{title}</h1>
                <h4 className={stl.main__description}>{description}</h4>
            </div>
        </section>
    )
}

export default Hero;