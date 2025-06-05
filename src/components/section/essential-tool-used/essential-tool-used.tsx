'use client'

import React from 'react';
import {cn} from "@/lib/utils";
import {getMaxWidthClasses} from "@/lib/getMaxWidthClasses";
import cssIcon from "@/@assets/programing-icons/css.webp"
import nextJsIcon from "@/@assets/programing-icons/next-js.png"
import reactJsIcon from "@/@assets/programing-icons/react.png"
import jsIcon from "@/@assets/programing-icons/javascript.png"
import twIcon from "@/@assets/programing-icons/tailwind.png"
import figmaIcon from "@/@assets/programing-icons/figma.png"
import Image from "next/image";
import {AnimatedTextComponent} from "@/lib/animate-text.component";
import Marquee from '@/lib/marque';

const EssentialToolUsed = () => {
    return (
        <section className={cn(getMaxWidthClasses(), "text-white px-6")} aria-label="Essential tools section">
            <header className="mb-12 text-center">
                <AnimatedTextComponent type="h2" className="text-3xl md:text-4xl font-bold mb-4">
                    Essential Tools I use
                </AnimatedTextComponent>
                <p className="text-gray-400">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites &
                    applications.
                </p>
            </header>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition flex gap-x-3">
                    <Image src={nextJsIcon} alt="React" width={50} height={50}/>
                    <div>
                        <h3 className="text-xl font-semibold">Next.js</h3>
                        <p className="text-sm text-gray-400">Framework</p>
                    </div>
                </div>
                <div className="border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition flex gap-x-3">
                    <Image src={reactJsIcon} alt="React" width={50} height={50}/>
                    <div>
                        <h3 className="text-xl font-semibold">React</h3>
                        <p className="text-sm text-gray-400">Framework</p>
                    </div>
                </div>
                <div className="border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition flex gap-x-3">
                    <Image src={jsIcon} alt="JavaScript" width={50} height={50}/>
                    <div>
                        <h3 className="text-xl font-semibold">JavaScript</h3>
                        <p className="text-sm text-gray-400">Interaction</p>
                    </div>
                </div>
                <div className="border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition flex gap-x-3">
                    <Image src={twIcon} alt="TailwindCSS" width={50} height={50}/>
                    <div>
                        <h3 className="text-xl font-semibold">TailwindCSS</h3>
                        <p className="text-sm text-gray-400">User Interface</p>
                    </div>
                </div>
                <div className="border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition flex gap-x-3">
                    <Image src={figmaIcon} alt="Figma" width={50} height={50}/>
                    <div>
                        <h3 className="text-xl font-semibold">Figma</h3>
                        <p className="text-sm text-gray-400">Design tool</p>
                    </div>
                </div>
                <div className="border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition flex gap-x-3">
                    <Image src={cssIcon} alt="CSS" width={50} height={50}/>
                    <div>
                        <h3 className="text-xl font-semibold">CSS</h3>
                        <p className="text-sm text-gray-400">User Interface</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EssentialToolUsed;