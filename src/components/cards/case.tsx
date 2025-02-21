import React from 'react';

interface CaseProps {
    className?: string;
    title?: string;
    description: string;
    classNameMain?: string;
    classNameTitle?: string;
    classNameDescription?: string;
    classNameButton?: string;
    classNameTextMore?: string;
    textButton?: string;
}

export const Case :React.FC<CaseProps> = ({className = '', title, description, classNameMain='',classNameTitle='', classNameDescription='', classNameButton='', textButton,
    classNameTextMore=''}) => {
    return (
        <section className={classNameMain}>
            <section className={classNameTitle}>
            {title?.split(`\n`).map((line, i) => (
                <React.Fragment key={i}>
                    <h3>{line}</h3>
                </React.Fragment>
            ))} 
            </section>
            <section className={classNameDescription}>
            {description.split(`\n`).map((text, t) => (
                <div key={t}>
                    {text}
                </div>
            ))}
            </section>
            <div className={classNameButton}>
                <button className={classNameTextMore}>{textButton ? textButton : <span>Lean more</span>}</button>
            </div>
        </section>
    )
}

export default Case;