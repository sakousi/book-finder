"use client";

import { useState } from "react";
import Link from "next/link";
import books from "../data/books";

const genres = ["Tous", "Fiction", "Science-fiction", "Roman", "Fantasy", "Non-fiction"];

const BooksPage: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState("Tous");

  const filteredBooks = selectedGenre === "Tous"
    ? books
    : books.filter((book) => book.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Explorez Nos Livres</h1>
          <p className="text-center text-gray-600 mt-2">Filtrez par genre pour trouver votre prochaine lecture</p>
        </div>
      </header>

      {/* Genre Filter */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-center space-x-4">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`py-2 px-6 rounded-full border-2 font-medium transition duration-300 
              ${selectedGenre === genre ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Books List */}
      <div className="container mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              {/* Utiliser Link pour créer un lien vers la page de détails du livre */}
              <Link href={`/book/${book.id}`} passHref>
                <h2 className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition duration-300">
                  {book.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-2"><strong>Auteur :</strong> {book.author}</p>
              <p className="text-gray-600"><strong>Genre :</strong> {book.genre}</p>
              <p className="text-gray-500 mt-4">{book.description.slice(0, 100)}...</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            Aucun livre trouvé pour le genre sélectionné.
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
