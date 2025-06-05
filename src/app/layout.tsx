import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar/navbar";
import React from "react";
import Footer from "@/components/navigation/footer/footer";


export const metadata: Metadata = {
    title: "Furtuna Anatolie",
    description: "Front-End Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="antialiased min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
