"use client";

import books from '../data/books';
import Link from 'next/link';

const Recommendations: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow container mx-auto p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Recommandations de Lecture
        </h1>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <li key={book.id} className="p-4 border rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-2"><strong>Auteur :</strong> {book.author}</p>
              <p className="text-gray-700 mb-2"><strong>Genre :</strong> {book.genre}</p>
              <p className="text-gray-600 mb-4">{book.description}</p>
              <Link href={`/books/${book.id}`} className="inline-block bg-blue-600 text-white font-medium rounded-md py-2 px-4 hover:bg-blue-500 transition duration-300">
                En savoir plus
              </Link>
            </li>
          ))}
        </ul>
      </main>

    </div>
  );
};

export default Recommendations;
