"use client";
import React, {useRef} from "react";
import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion";

type AnimatedCounterProps = {
    from: number,
    to: number,
    animationOptions?: KeyframeOptions 
}

const AnimatedCounter = ({from, to, animationOptions}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, {once: true});

    useIsomorphicLayoutEffect(() => {
        const element = ref.current
        if(!element) return;
        if(!inView) return;

        element.textContent = String(from);

        const controls = animate(from, to, {
            duration: 5,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0);
            }
        })
        return () => controls.stop();
    }, [ref, from, to, inView]);

    return <span ref={ref}/>
}

export default AnimatedCounter;