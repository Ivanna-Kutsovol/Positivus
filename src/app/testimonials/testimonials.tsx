'use client'

import React from "react";
import stl from "./testimonials.module.scss";
import {Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const Testimonials = () => {
    return(
        <section className={stl.section}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Testimonials</h2>
                    <p className={stl.main__descriptionText}>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </section>
            </section>
        <Swiper className={stl.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView = "auto"
        navigation = {{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
        loop={true}
        effect="fade"
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <div className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </div>
                    John Smith
                    Marketing Director at XYZ Corp
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <div className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </div>
                    John Smith
                    Marketing Director at XYZ Corp
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <div className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </div>
                    John Smith
                    Marketing Director at XYZ Corp
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <div className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </div>
                    John Smith
                    Marketing Director at XYZ Corp
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <div className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </div>
                    John Smith
                    Marketing Director at XYZ Corp
                </div>
            </SwiperSlide>
        </Swiper>
        <div className={stl.swiper__buttonContainer}>
            <div className="swiper-button-next"/>
            <div className="swiper-button-prev"/>
        </div>
        </section>
        
    )
}

export default Testimonials;