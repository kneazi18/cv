'use client'

import React, {useEffect} from 'react';
import {cn} from "@/lib/utils";
import {getMaxWidthClasses} from "@/lib/getMaxWidthClasses";
import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import {useInView} from "react-intersection-observer";

const MotionCounter = ({end}: { end: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const {ref, inView} = useInView({triggerOnce: true});

    useEffect(() => {
        if (inView) {
            const animation = animate(count, end, {duration: 2});
            return animation.stop;
        }
    }, [inView, end, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const AboutIntro = () => {
    return (
        <div className={cn(getMaxWidthClasses())}>
            <section
                className={cn("bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-2xl shadow-lg py-16 px-6 md:px-12")}>
                <div className="px-4 md:px-8 py-6 md:py-9">
                    <p className="text-lg md:text-xl text-gray-300 mb-10">
                        Welcome! I’m Anatolie, a professional web developer with a passion for crafting visually
                        stunning and highly functional websites. By blending creativity with technical precision, I
                        transform your vision into digital experiences that stand out in both design and
                        performance.
                    </p>
                    <div className="flex gap-12 text-left text-white">
                        <div>
                           <span className='flex items-center text-4xl font-bold'>
                                <span className="block text-4xl font-bold" data-countup-number="35">
                                    <MotionCounter end={35}/>
                                </span>
                               <span className='text-green-600'>+</span>
                           </span>
                            <span className='block text-gray-400'>
                                Projects done
                            </span>
                        </div>
                        <div>
                           <span className='flex items-center text-4xl font-bold'>
                                <span className="block text-4xl font-bold" data-countup-number="35">
                                    <MotionCounter end={5}/>
                                </span>
                               <span className='text-green-600'>+</span>
                           </span>
                            <span className='block text-gray-400'>
                                Years of experience
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutIntro;