'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import cssIcon from "@/@assets/programing-icons/css.webp"
import nextJsIcon from "@/@assets/programing-icons/next-js.png"
import reactJsIcon from "@/@assets/programing-icons/react.png"
import jsIcon from "@/@assets/programing-icons/javascript.png"
import twIcon from "@/@assets/programing-icons/tailwind.png"
import figmaIcon from "@/@assets/programing-icons/figma.png"

const images = [
    cssIcon,
    nextJsIcon,
    reactJsIcon,
    jsIcon,
    twIcon,
    figmaIcon,
    cssIcon,
    nextJsIcon,
    reactJsIcon,
    jsIcon,
    twIcon,
    figmaIcon,
    cssIcon,
    nextJsIcon,
    reactJsIcon,
    jsIcon,
    twIcon,
    figmaIcon,
    cssIcon,
    nextJsIcon,
    reactJsIcon,
    jsIcon,
    twIcon,
    figmaIcon,
    cssIcon,
    nextJsIcon,
    reactJsIcon,
    jsIcon,
    twIcon,
    figmaIcon,
];

const Marquee = () => {
    return (
        <div
            className="overflow-hidden w-full py-10"
            style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
        >
            <motion.div
                className="flex gap-6"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                }}
            >
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`Game ${index}`}
                        width={50}
                        height={50}
                        className=""
                    />
                ))}
                {images.map((img, index) => (
                    <Image
                        key={`copy-${index}`}
                        src={img}
                        alt={`Game Copy ${index}`}
                        width={50}
                        height={50}
                        className=""
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;