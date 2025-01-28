import React from 'react';
import stl from "./case.module.scss"

interface CaseProps {
    className?: string;
    title?: string;
    description: string;
    
}

export const Case :React.FC<CaseProps> = ({className = '', title, description}) => {
    return (
        <section className={stl.main}>
            <section className={stl.main__titile}>
            {title?.split(`\n`).map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                </React.Fragment>
            ))} 
            </section>
            <section className={stl.main__description}>
            {description.split(`\n`).map((text, t) => (
                <div key={t}>
                    {text}
                </div>
            ))}
            </section>
            <div className={stl.main__leanMore}>
                <button className={stl.main__leanMore__text}>Lean more</button>
            </div>
        </section>
    )
}

export default Case;