'use client'

import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-8 text-white md:flex justify-between text-center sticky top-[100vh] mx-auto max-w-7xl px-4 xl:px-0">
            <div className="mb-4 flex flex-wrap justify-center gap-6 text-white">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Portfolio</Link>
                <Link href="#">Contact</Link>
            </div>
            <p className="text-sm">&copy;{new Date().getFullYear()} Furtuna Anatolie. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
