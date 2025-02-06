'use client'

import React from "react";
import stl from "./testimonials.module.scss";
import Image from "next/image";
import {Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import arrow from "../../../public/arrowRight.png"

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
        pagination={{ 
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
            renderBullet: (index, className) => {
                return `<span class="${className} ${stl.swiper__bullet}">${index + 1}</span>`;
            },
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
            <div style={{backgroundColor: 'var(--green)'}} className={`${stl.swiper__pagination} ${stl.swiper__bullet} swiper-pagination-custom`}>
                <Image className={stl.swiper__bullet} src={arrow} alt="arrow" />
            </div>
            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <p className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                   <div className={stl.swiper__nameAndPosition}>
                        <h4 className={stl.swiper__name}>John Smith</h4>
                        <p className={stl.swiper__position}>Marketing Director at XYZ Corp</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <p className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                    <div className={stl.swiper__nameAndPosition}>
                            <h4 className={stl.swiper__name}>John Smith</h4>
                        <p className={stl.swiper__position}>Marketing Director at XYZ Corp</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <p className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                   <div className={stl.swiper__nameAndPosition}>
                        <h4 className={stl.swiper__name}>John Smith</h4>
                        <p className={stl.swiper__position}>Marketing Director at XYZ Corp</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <p className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                   <div className={stl.swiper__nameAndPosition}>
                        <h4 className={stl.swiper__name}>John Smith</h4>
                        <p className={stl.swiper__position}>Marketing Director at XYZ Corp</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide style={{width: "50%"}} className={stl.swiper__container}>
                <div className={stl.swiper__info}>
                    <p className={stl.swiper__text}>
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                        The team is professional, responsive, and truly cares about the success of our business. 
                        We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                   <div className={stl.swiper__nameAndPosition}>
                        <h4 className={stl.swiper__name}>John Smith</h4>
                        <p className={stl.swiper__position}>Marketing Director at XYZ Corp</p>
                    </div>
                </div>
            </SwiperSlide>
            <div className={stl.swiper__buttonContainer}>
                <Image className="swiper-button-next" style={{width: "20px", height: "23px"}} src={arrow} alt={"arrow right"} width={0} height={0} priority/>
                <Image className="swiper-button-prev" style={{transform: 'rotate(180deg)', width: "20px", height: "23px", position: "absolute"}} src={arrow} alt = "left arrow" width={0} height={0}/>
            </div>
        </Swiper>

        </section>   
    )
}

export default Testimonials;