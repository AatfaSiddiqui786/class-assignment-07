'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const navItems = [
        { label: "Home", href: "/component/Home" },
        { label: "About", href: "/component/About" },
        { label: "Client Side", href: "/component/ClientSide" },
        { label: "Server Side", href: "/component/server-side" },
        { label: "Contact", href: "/component/contact" },
    ];

    return (
        <nav className="flex justify-between mx-6 my-6 border-4 border-blue-800 p-5 ">
            <div className="font-bold text-lg hover:to-blue-800 text-blue-700 flex items-center">
                <Image
                    className='h-12 w-12 '
                    src="/images/Brain-AI.gif"
                    alt='Logo'
                    width={50}
                    height={50}
                />
                <h3 className="ml-4  test-xs md:text-sm lg:text-2xl underline text-white">DATA FETCHING</h3>
            </div>

            {/* Hamburger Menu Button for Mobile */}
            <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                {isOpen ? (
                    <FaTimes width={24} height={24} />
                ) : (
                    <FaBars width={24} height={24} />
                )}
            </button>

            {/* Navigation Menu */}
            <ul
                className={`${
                    isOpen ? "block" : "hidden"
                } md:flex md:space-x-6 list-none  md:bg-transparent md:static top-16 left-0 pb-6 md:pb-0 pt-3 md:pt-0 w-full md:w-auto px-4 md:px-0`}
            >
                {navItems.map((nav, i) => (
                    <li key={i} className="font-bold text-white test-xs md:text-sm lg:text-2xl hover:text-blue-900 pl-6 pt-3">
                        <Link href={nav.href} onClick={closeMenu}>
                            {nav.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}