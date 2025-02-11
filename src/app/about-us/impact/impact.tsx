import React from "react";
import stl from "./impact.module.scss";
import Image from "next/image";

const OurImpact = () => {
    return (
        <section className={stl.section}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Our Impact in Numbers</h2>
                    <p className={stl.main__descriptionText}>A snapshot of the milestones and achievements that drive our success</p>
                </section>
            </section>
            <section className={stl.main__containerContent}>
                <div className={stl.main__content}>
                    <h2>8+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className={stl.main__content}>
                    <h2>50+</h2>
                    <p>Experts</p>
                </div>
                <div className={stl.main__content}>
                    <h2>100+</h2>
                    <p>Successful Campaigns</p>
                </div>
                <div className={stl.main__content}>
                    <h2>20+</h2>
                    <p>Industry Awards</p>
                </div>
                <div className={stl.main__content}>
                    <h2>500%</h2>
                    <p>ROI for our clients</p>
                </div>
            </section>
        </section>
    )
};
export default OurImpact;