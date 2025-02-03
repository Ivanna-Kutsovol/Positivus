import React from "react";
import stl from "./testimonials.module.scss";

const Testimonials = () => {
    return(
        <section className={stl.section}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Testimonials</h2>
                    <p className={stl.main__descriptionText}>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </section>
            </section>
            <section className={stl.container}>
                <div>
                John Smith
                Marketing Director at XYZ Corp
                </div>
            </section>
        </section>
        
    )
}

export default Testimonials;