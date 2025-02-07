'use client'

import stl from "./testimonials.module.scss";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
        navigation: true,
        pagination: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto", 
        spaceBetween: 50,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            color: transparent;
            margin: 160px 0 0 0; 
          }
        .swiper-button-prev:active,
        .swiper-button-next:active {
            opacity: 0.5;
        }

          .swiper-button-prev {
            background-image: url("../arrowRight.png");
            transform: rotate(180deg);
                left: 30%;
                cursor: pointer;
          }

          .swiper-button-next {
            background-image: url("../arrowRight.png");
            right: 30%;
            cursor: pointer;
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }
        .swiper-pagination {
      position: absolute;
      bottom: 40px;
      margin: 0 0 60px 0;
      display: flex;
      gap: 10px;
    }

    .swiper-pagination-bullet {
      position: relative;
      left: 40%;
      right: 40%;
      width: 25px;
      height: 25px;
      background-color: transparent;
        opacity: 1;
    }

    .swiper-pagination-bullet::before,
    .swiper-pagination-bullet::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
    clip-path: polygon(71% 39%, 64% 60%, 71% 79%, 50% 70%, 29% 77%, 37% 60%, 30% 39%, 51% 47%);
    }

    .swiper-pagination-bullet-active::before,
    .swiper-pagination-bullet-active::after {
      background-color: #B9FF66;
      transform: scale(1.2);
    }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    // <section className={stl.section}>
    <>
        <section className={stl.main}>
            <section className={stl.main__text}>
            <h2 className={stl.main__topic}>Testimonials</h2>
            <p className={stl.main__descriptionText}>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </section>
        </section>
        <swiper-container className={stl.swiper} ref={swiperRef} init="false">
            <swiper-slide class="container">
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
                </div></swiper-slide>
            <swiper-slide class="container">
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
                    </swiper-slide>
            <swiper-slide class="container">
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
            </swiper-slide>
            <swiper-slide class="container">
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
            </swiper-slide>
            <swiper-slide class="container">
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
            </swiper-slide>
        </swiper-container>
    </>
  );
};

export default Testimonials;


//             {/* <div className={stl.swiper__buttonContainer}>
//                 <Image className="swiper-button-next" style={{width: "20px", height: "23px"}} src={arrow} alt={"arrow right"} width={0} height={0} priority/>
//                 <Image className="swiper-button-prev" style={{transform: 'rotate(180deg)', width: "20px", height: "23px", position: "absolute"}} src={arrow} alt = "left arrow" width={0} height={0}/>
//             </div> */}
//         {/* </Swiper> */}
//         </swiper-container>
//         </section>   
//     );
// };

// export default Testimonials;