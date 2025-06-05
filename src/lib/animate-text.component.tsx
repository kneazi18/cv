"use client";

import { createElement, ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { JSX } from "react/jsx-runtime";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props<T extends keyof JSX.IntrinsicElements> = {
    type: T;
    children?: ReactNode;
} & JSX.IntrinsicElements[T];

export const AnimatedTextComponent = <T extends keyof JSX.IntrinsicElements>({ type, children, ...props }: Props<T>) => {
    const titleRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = titleRef.current;
        if (element) {
            const split = new SplitText(element, { type: "words,chars", tag: "span" });
            const chars = split.chars;

            gsap.set(chars, { x: 50, autoAlpha: 0 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    end: "bottom 20%",
                    once: true
                }
            }).to(chars, {
                x: 0,
                autoAlpha: 1,
                duration: 0.6,
                stagger: 0.02
            });

            return () => {
                split.revert();
            };
        }
    }, []);

    return createElement(
        type,
        {
            ref: titleRef,
            ...props
        },
        children
    );
};
