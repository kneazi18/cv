import {cn} from "@/lib/utils";
import HeroSection from "@/components/section/hero-section/hero-section/hero-section";
import AboutIntro from "@/components/section/about-intro/about-intro";
import EssentialToolUsed from "@/components/section/essential-tool-used/essential-tool-used";
import Marquee from "@/lib/marque";
import React from "react";

export default function Home() {
    return (
        <main className={cn("")}>
            <HeroSection/>
            <AboutIntro/>
            <EssentialToolUsed/>
            {/*<Marquee/>*/}
        </main>
    );
}
