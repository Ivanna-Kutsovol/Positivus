import React from "react";
import stl from "./team.module.scss";
import Image from "next/image";
import FirstImage from '../../../public/team/pictureFirst.webp';
import SecondImage from '../../../public/team/pictureSecond.webp';
import ThirdImage from '../../../public/team/pictureThird.webp';
import FourthImage from '../../../public/team/pictureFourth.webp';
import FifthImage from '../../../public/team/pictureFifth.webp';
import SixthImage from '../../../public/team/pictureSixth.webp';
import Social from '../../../public/team/socialIcon.webp';
import Button from "@/components/UI/button/button";

const content = [
    {
        image: FirstImage,
        name: 'John Smith',
        position: 'CEO and Founder',
        info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
    },
    {
        image: SecondImage,
        name: 'Jane Doe',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
    },
    {
        image: ThirdImage,
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
    },
    {
        image: FourthImage,
        name: 'Emily Johnson',
        position: 'PPC Manager',
        info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
    },
    {
        image: FifthImage,
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
    },
    {
        image: SixthImage,
        name: 'Sarah Kim',
        position: 'Content Creator',
        info: '2+ years of experience in writing and editing\nSkilled in creating compelling, SEO-optimized content for various industries'
    }
]

const Team = () => {
    return (
        <section className={stl.section}>
            <section className={stl.main}>
                <section className={stl.main__text}>
                    <h2 className={stl.main__topic}>Team</h2>
                    <p className={stl.main__descriptionText}>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                </section>
            </section>
        <section className={stl.team}>
                {content.map((item, index) => (
                        <div className={stl.team__container} key={index} >
                            <div className={stl.team__shortInfo}>
                                <Image src={item.image} alt={`Picture ${index + 1}`} width={105} height={102} priority />
                                <div className={stl.team__nameAndPosition}>
                                    <h4 className={stl.team__name}>{item.name}</h4>
                                    <p className={stl.team__position}>{item.position}</p>
                                </div>
                                <Image className={stl.team__socialIcon} src={Social} alt="linkedin" width={34} height={34} priority />
                            </div>
                        <div className={stl.line}/>
                        <p className={stl.team__info}>{item.info}</p>
                        </div>
                ))}
                <Button className={stl.team__button}>See all team</Button>
            </section>
        </section>
    );
};

export default Team;