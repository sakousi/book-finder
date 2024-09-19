"use client";

import {useState} from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-light">
            <div className="container flex items-center justify-between p-5">
                <Link href="/" className="text-gray-800 text-2xl font-bold hover:text-blue-600 transition duration-300">
                    BookFinder
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        Accueil
                    </Link>
                    <Link href="/recommendations" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        Recommandations
                    </Link>
                    <Link href="/profil" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        Profil
                    </Link>
                    <Link href="/ma-liste" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        Ma Liste
                    </Link>
                    <Link href="/livres" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        Livres
                    </Link>
                    <Link href="/login"
                          className="bg-primary text-white font-medium rounded-md py-2 px-4 hover:scale-105 transition duration-300">
                        Connexion
                    </Link>
                    <Link href="/register"
                          className="bg-transparent text-primary border-2 border-primary rounded-md py-2 px-4 hover:bg-primary hover:scale-105 hover:text-white transition duration-300">
                        Inscription
                    </Link>
                </div>
                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center p-2 text-gray-600 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {/* Dropdown Menu for Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accueil</Link>
                    <Link href="/recommendations"
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Recommandations</Link>
                    <Link href="/profil" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Profil</Link>
                    <Link href="/ma-liste" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Ma Liste</Link>
                    <Link href="/livres" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Livres</Link>
                    <hr className="my-2 border-gray-200"/>
                    <div className="flex flex-col gap-2 items-center pb-2">
                        <Link href="/login"
                              className="block w-fit bg-primary text-white font-medium rounded-md py-2 px-4 hover:scale-105 transition duration-300">Connexion</Link>
                        <Link href="/register"
                              className="block w-fit bg-transparent text-primary border-2 border-primary rounded-md py-2 px-4 hover:bg-primary hover:scale-105 hover:text-white transition duration-300">Inscription</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
