import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Card {
        image: StaticImageData;
        title: string;
        descriptionButton: string;
        className?: string;
        contentClassName?: string;
        titleContentClassName?: string;
        titleClassName?: string;
        classNameButton?: string;
        href?: string;
        classNameIlustration?: string;
        width?: number;
        height?: number
    }
export const Card: React.FC<Card> = ({ image, title, descriptionButton, 
    className = '', contentClassName = '', titleClassName = '', titleContentClassName = '', 
    classNameButton = '', href, classNameIlustration = '', width, height }) => {
    return (
        <div className={className}>
            <div className={contentClassName}>
                <div className={titleContentClassName}>
                    {title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                            <h3 className={titleClassName} key={i}>
                                {line}
                            </h3>
                        </React.Fragment>
                    ))}
                </div>
                    <Link href={href || "/" } className={classNameButton}>
                        {descriptionButton}
                    </Link>
                </div>

                <div className={classNameIlustration}>
                    <Image src={image} alt="illustration" priority width={width} height={height}/>
                </div>
        </div>
    )
}