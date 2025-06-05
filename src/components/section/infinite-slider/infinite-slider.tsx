'use client'

import React from 'react';
import cssIcon from "@/@assets/programing-icons/css.webp"
import nextJsIcon from "@/@assets/programing-icons/next-js.png"
import reactJsIcon from "@/@assets/programing-icons/react.png"
import jsIcon from "@/@assets/programing-icons/javascript.png"
import twIcon from "@/@assets/programing-icons/tailwind.png"
import figmaIcon from "@/@assets/programing-icons/figma.png"
import Image from "next/image";

const InfiniteSlider = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap w-full py-8 ">
            <div className="animate-scroll flex gap-10">
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
                <Image src={figmaIcon.src} width={50} height={50} alt="1" className="h-20 w-auto inline-block" />
            </div>
        </div>
    );
};

export default InfiniteSlider;