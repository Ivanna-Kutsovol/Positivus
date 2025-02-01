'use client'

import React, { useState } from "react";
import Image from "next/image";
import plus from "../../../public/accordion/plusIcon.svg";
import minus from "../../../public/accordion/minusIcon.svg";

interface AccordionProps {
    number: string;
    title: string;
    description: string;
    className?: string;
    classNameTitle?: string;
    classNameDescription?: string;
    classNameNumber?: string;
    classNameContainerTitle?: string;
    classNameContainerTitleAndButton?: string;
    classNameOpen?: string;
    classNameHidden?: string
}

export const Accordion :React.FC<AccordionProps> = ({title, description, className = '', classNameTitle = '', classNameHidden = '',
    classNameDescription = '', classNameNumber = '', number, classNameContainerTitle='', classNameContainerTitleAndButton = '', classNameOpen=''
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={isOpen ? `${className} ${classNameOpen}` : className} >
            <section className={`${classNameContainerTitleAndButton} ${isOpen ? classNameOpen : ''}`}>
                <div className={classNameContainerTitle}>
                {number.split('\n').map((line, i) => (
                    <div key={i} className={classNameNumber}>
                        {line}
                    </div>
                ))}

                {title.split('\n').map((line, i) => (
                    <div key={i} className={classNameTitle}>
                        {line}
                    </div>
                ))}
                </div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? minus : plus} alt="Plus icon" width={58} height={58} priority/>
                </button> 
            </section>     
            <div className={isOpen ? classNameDescription :classNameHidden} >
                {isOpen && description.split('\n').map((line, i) => (
                    <div key={i}>
                        <p>{line}</p>
                    </div>
                ))}
            </div>
        </section>
    )   
}

export default Accordion;