"use client"

import { useState } from "react";
import books from '../../data/books';

interface BookDetailProps {
  params: {
    id: string;
  };
}

const BookDetail: React.FC<BookDetailProps> = ({ params }) => {
  const bookId = parseInt(params.id, 10);
  const selectedBook = books.find((book) => book.id === bookId);

  const [likes, setLikes] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(selectedBook ? selectedBook.comments || [] : []);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddToFavorites = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = { id: comments.length + 1, user: "Utilisateur", content: newComment };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  if (!selectedBook) {
    return <div className="container mx-auto p-6">Livre non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-white shadow">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-gray-800">{selectedBook.title}</h1>
          <p className="text-gray-600 mt-2"><strong>Auteur :</strong> {selectedBook.author}</p>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={selectedBook.imageUrl}
              alt={selectedBook.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Book details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Détails</h2>
            <p className="text-gray-700 mb-4"><strong>Genre :</strong> {selectedBook.genre}</p>
            <p className="text-gray-700 mb-4"><strong>Éditeur :</strong> {selectedBook.publisher}</p>
            <p className="text-gray-700 mb-4"><strong>Langues disponibles :</strong> {selectedBook.languages.join(", ")}</p>
            <p className="text-gray-700 mb-8"><strong>Description :</strong> {selectedBook.description}</p>

            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={handleLike}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
              >
                J'aime ({likes})
              </button>
              <button
                onClick={handleAddToFavorites}
                className={`py-2 px-4 rounded-md border ${isFavorited ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-600'} hover:bg-red-600 hover:text-white transition duration-300`}
              >
                {isFavorited ? "Retirer des Favoris" : "Ajouter aux Favoris"}
              </button>
            </div>
          </div>
        </div>

        {/* comments section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Commentaires</h2>
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-800"><strong>{comment.user} :</strong> {comment.content}</p>
              </li>
            ))}
          </ul>

          {/* section add comment */}
          <div className="mt-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Ajoutez un commentaire..."
            />
            <button
              onClick={handleAddComment}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Envoyer
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
