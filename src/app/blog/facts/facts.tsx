import React from "react";
import stl from "./facts.module.scss";

const Facts = () => {
    return(
        <div className={stl.section}>
            <h2 className={stl.section__title}>By the Numbers: Facts About PPC and Organic Marketing</h2>
                <div className={stl.section__cards}>

                <div className={`${stl.section__cardFirst} ${stl.section__card}`}>
                    <p>Businesses earn an average of</p>
                    <h3 className={stl.section__emphasized}>$2 for every $1 spent</h3>
                    <p>on PPC advertising.</p>
                </div>

                <div className={`${stl.section__cardSecond} ${stl.section__card}`}>
                    <h3 className={stl.section__emphasized}>41% of clicks</h3>
                    <p>on search engines go to the top three organic results, showing the importance of ranking highly.</p>
                </div>

                <div className={`${stl.section__cardThird} ${stl.section__card}`}>
                    <div className={stl.section__string}>
                        <p>Content marketing costs</p>
                        <h3 className={stl.section__emphasized}>62% less than paid ads</h3>
                    </div>
                    <div className={stl.section__string}>
                        <p>but generates</p>
                        <h3 className={stl.section__emphasized}>3x as many leads</h3>
                    </div>
                </div>

                <div className={`${stl.section__cardFourth} ${stl.section__card}`}>
                    <p>Organic search drives</p>
                    <h3 className={`${stl.section__emphasized} ${stl.section__group}`}><p className={stl.section__number}>53%</p> of all website traffic,</h3>
                    <p>making it the largest single source of traffic..</p>
                </div>
            </div>
        </div>
    );
}

export default Facts;