'use client'

import React, { useState } from "react";
import Image from "next/image";
import plus from "../../../public/accordion/plusIcon.svg";
import minus from "../../../public/accordion/minusIcon.svg";
import { motion } from "framer-motion";

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
    classNameIcon?: string;
}

export const Accordion :React.FC<AccordionProps> = ({title, description, className = '', classNameTitle = '', classNameIcon = '',
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
                    <Image className={classNameIcon} src={isOpen ? minus : plus} alt="Plus icon" width={58} height={58} priority/>
                </button> 
            </section>     
            <motion.div 
                className={classNameDescription} 
                initial={{ height: 0}}
                animate={isOpen ? { height: "100px" } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
             >
                {isOpen && description.split('\n').map((line, i) => (
                    <div key={i}>
                        <p>{line}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    )   
}

export default Accordion;