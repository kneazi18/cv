'use client'

import React from 'react';
import Image from "next/image";
import furtunaImg from '@/@assets/Furtuna1.png'
import {AnimatedTypingText} from "@/lib/animated-typing-text";
import {RxLinkedinLogo} from "react-icons/rx";
import {FaInstagram, FaFacebook} from "react-icons/fa";
import { motion } from "framer-motion";
import {cn} from "@/lib/utils";
import {getMaxWidthClasses} from "@/lib/getMaxWidthClasses";
import Particles from "@/components/section/hero-section/particles";

const HeroSection = () => {
    return (
        <div className="relative w-full md:min-h-screen">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="absolute inset-0 -z-10 w-full h-full"
            />
            <section className={cn(getMaxWidthClasses(), "max-w-7xl mx-auto flex flex-col-reverse items-center justify-center text-white md:flex-row md:min-h-screen mt-30 md:mt-0")}>
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Hello, I'm
                        <span className="text-2xl md:text-5xl block font-extrabold text-white mr-2 transition-all duration-300">Furtuna Anatolie</span><br/>
                        <AnimatedTypingText words={["Front-End Developer"]}
                                            pauseTime={1500}/>
                    </h1>
                    <p className="max-w-md mx-auto md:mx-0">
                        I design and build modern web interfaces, ensuring speed, accessibility, and seamless user
                        interaction — all through clean, scalable front-end code.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-6 pt-4">
                        <motion.a
                            href="https://www.linkedin.com/in/furtuna-anatolie-092aa5262/"
                            className="hover:text-green-600 font-medium text-2xl"
                            target="_blank"
                            rel="nofollow"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <RxLinkedinLogo className="h-6 w-6 md:h-8 md:w-8 hover:text-blue-600"/>
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/furtuna._a/"
                            className="hover:text-green-600 font-medium text-2xl"
                            target="_blank"
                            rel="nofollow"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaInstagram className="h-6 w-6 md:h-8 md:w-8 hover:text-orange-400"/>
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/anatolie.furtuna"
                            className="hover:text-green-600 font-medium text-2xl"
                            target="_blank"
                            rel="nofollow"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaFacebook className="h-6 w-6 md:h-8 md:w-8 hover:text-blue-800"/>
                        </motion.a>
                    </div>
                </div>
                <div
                    className="group aspect-square md:w-120 md:h-120 rounded-full bg-gradient-to-tr shadow-[0_0_30px] hover:shadow-[0_0_50px] shadow-gray-600 hover:shadow-green-600 mb-8 md:mb-0 flex justify-center">
                    <Image
                        width={396}
                        height={396}
                        src={furtunaImg.src}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full transition-shadow duration-300"
                    />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;