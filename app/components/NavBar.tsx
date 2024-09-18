"use client";

import { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-5">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-800 text-2xl font-bold hover:text-blue-600 transition duration-300">
            BookFinder
          </Link>
          <div className="hidden md:flex space-x-8">
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
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/connexion" className="bg-blue-600 text-white font-medium rounded-md py-2 px-4 hover:bg-blue-500 transition duration-300">
            Connexion
          </Link>
          <Link href="/inscription" className="bg-white text-blue-600 border border-blue-600 rounded-md py-2 px-4 hover:bg-blue-600 hover:text-white transition duration-300">
            Inscription
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden flex items-center justify-center p-2 text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accueil</Link>
          <Link href="/recommendations" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Recommandations</Link>
          <Link href="/profil" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Profil</Link>
          <Link href="/ma-liste" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Ma Liste</Link>
          <Link href="/livres" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Livres</Link>
          <hr className="my-2 border-gray-200" />
          <Link href="/connexion" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Connexion</Link>
          <Link href="/inscription" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Inscription</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
