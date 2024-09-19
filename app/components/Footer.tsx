"use client";

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-4">
        <div className="container mx-auto text-center">
        <p>&copy; 2024 BookFinder. Tous droits réservés.</p>
        <Link href="/contact" className="text-gray-400 hover:underline">Contactez-nous</Link>
        </div>
    </footer>
  );
};

export default Footer;
