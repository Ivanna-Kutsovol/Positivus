import React from 'react';
import Image from 'next/image';
import stl from './article.module.scss';
import Img from "../../../../public/aboutUs/value/innovation.webp"
import Button from '@/components/UI/button/button';

const Article = () =>{
    return(
        <article className={stl.main}>
            <div className={stl.main__content}>
                <h3 className={stl.main__title}>Ready to Elevate Your Search Rankings?</h3>
                <span className={stl.line}/>
                <p className={stl.main__description}>Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines. 
                    Whether you want to boost organic traffic, 
                    improve keyword rankings, or increase conversions, we’re here to make it happen.</p>
                <p className={stl.main__callToAction}>Let’s work together to grow your online presence.</p>
                <Button type='submit' className={stl.main__button}>Start My SEO Journey</Button>
            </div>
           <Image src={Img} width={455} height={355} className={stl.main__image} alt='image'/>
        </article>
    )
}

export default Article;