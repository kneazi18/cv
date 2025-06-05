'use client'

import React, {useState, useEffect} from 'react';
import Link from "next/link";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {cn} from "@/lib/utils";
import {getMaxWidthClasses} from "@/lib/getMaxWidthClasses";
import {RxLinkedinLogo} from "react-icons/rx";
import {motion} from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-2xl' : 'bg-transparent'
            }`}
        >
            <nav className={cn('mx-auto max-w-7xl px-4 xl:px-0', "flex justify-between items-center py-6 text-white relative")}>
                <Link href='/' className="text-2xl hover:text-green-600 font-bold">FurtunA</Link>
                <ul className="hidden md:flex space-x-8">
                    <li><Link href="#" className="hover:text-green-600">Home</Link></li>
                    <li><Link href="#" className="hover:text-green-600">About</Link></li>
                    <li><Link href="#" className="hover:text-green-600">Services</Link></li>
                    <li><Link href="#" className="hover:text-green-600">Portfolio</Link></li>
                    <li><Link href="#" className="hover:text-green-600">Contact</Link></li>
                </ul>
                <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
                    <RiMenu3Line/>
                </button>
                <div
                    className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#0f172a] text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsOpen(false)} className="text-2xl ">
                            <RiCloseLine className='w-8 h-8 mt-2'/>
                        </button>
                    </div>
                    <ul className="flex flex-col items-start px-4 space-y-4 text-lg">
                        <li><Link href="#" className="hover:text-green-600 font-medium"
                                  onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="#" className="hover:text-green-600"
                                  onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="#" className="hover:text-green-600"
                                  onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link href="#" className="hover:text-green-600"
                                  onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                        <li><Link href="#" className="hover:text-green-600"
                                  onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;