"use client";

import { useState } from "react";
import { FaSchool, FaBook, FaTrash, FaPen, FaHeart, FaRegUserCircle } from "react-icons/fa";


const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 28,
    gender: "Homme",
    isStudying: true,
    institution: "Université de Paris",
    job: "Développeur Web",
    username: "JohnDoe",
    email: "john.doe@example.com",
    bio: "Passionné de littérature et d'écriture.",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
    favoriteBooks: ["1984", "Le Petit Prince", "Dune"],
    readingList: {
      inProgress: ["Le Seigneur des Anneaux"],
      completed: ["L'Étranger"],
    },
    hobbies: ["Lire", "Voyager", "Coder"],
    favoriteGenres: ["Science-fiction", "Fantasy", "Classique"],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState(userInfo);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUserInfo(newUserInfo);
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Logique pour supprimer le compte
    alert("Votre compte a été supprimé.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <div className="flex justify-center mb-6">
          <img
            src={userInfo.avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Mon Profil</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Informations Personnelles */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
              <FaRegUserCircle className="mr-2 text-blue-600" /> Informations Personnelles
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Prénom:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={newUserInfo.firstName}
                    onChange={(e) => setNewUserInfo({ ...newUserInfo, firstName: e.target.value })}
                    className="mt-1 p-2 border rounded-md w-1/2"
                  />
                ) : (
                  <span className="text-gray-800">{userInfo.firstName}</span>
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Nom:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={newUserInfo.lastName}
                    onChange={(e) => setNewUserInfo({ ...newUserInfo, lastName: e.target.value })}
                    className="mt-1 p-2 border rounded-md w-1/2"
                  />
                ) : (
                  <span className="text-gray-800">{userInfo.lastName}</span>
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Âge:</span>
                {isEditing ? (
                  <input
                    type="number"
                    value={newUserInfo.age}
                    onChange={(e) => setNewUserInfo({ ...newUserInfo, age: +e.target.value })}
                    className="mt-1 p-2 border rounded-md w-1/2"
                  />
                ) : (
                  <span className="text-gray-800">{userInfo.age}</span>
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Sexe:</span>
                {isEditing ? (
                  <select
                    value={newUserInfo.gender}
                    onChange={(e) => setNewUserInfo({ ...newUserInfo, gender: e.target.value })}
                    className="mt-1 p-2 border rounded-md w-1/2"
                  >
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                    <option value="Autre">Autre</option>
                  </select>
                ) : (
                  <span className="text-gray-800">{userInfo.gender}</span>
                )}
              </div>
            </div>
          </div>

          {/* Éducation et Emploi */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
              <FaSchool className="mr-2 text-blue-600" /> Éducation & Emploi
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Scolarité:</span>
                {isEditing ? (
                  <>
                    <input
                      type="checkbox"
                      checked={newUserInfo.isStudying}
                      onChange={(e) => setNewUserInfo({ ...newUserInfo, isStudying: e.target.checked })}
                      className="mr-2"
                    />
                    <input
                      type="text"
                      value={newUserInfo.institution}
                      onChange={(e) => setNewUserInfo({ ...newUserInfo, institution: e.target.value })}
                      placeholder="Établissement"
                      className="mt-1 p-2 border rounded-md w-1/2"
                    />
                  </>
                ) : (
                  <span className="text-gray-800">{userInfo.isStudying ? "Oui" : "Non"} - {userInfo.institution}</span>
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Emploi:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={newUserInfo.job}
                    onChange={(e) => setNewUserInfo({ ...newUserInfo, job: e.target.value })}
                    className="mt-1 p-2 border rounded-md w-1/2"
                  />
                ) : (
                  <span className="text-gray-800">{userInfo.job}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Autres Informations */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
            <FaHeart className="mr-2 text-blue-600" /> Autres Informations
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Pseudo:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={newUserInfo.username}
                  onChange={(e) => setNewUserInfo({ ...newUserInfo, username: e.target.value })}
                  className="mt-1 p-2 border rounded-md w-1/2"
                />
              ) : (
                <span className="text-gray-800">{userInfo.username}</span>
              )}
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Biographie:</span>
              {isEditing ? (
                <textarea
                  value={newUserInfo.bio}
                  onChange={(e) => setNewUserInfo({ ...newUserInfo, bio: e.target.value })}
                  className="mt-1 p-2 border rounded-md w-1/2"
                  rows={3}
                />
              ) : (
                <span className="text-gray-800">{userInfo.bio}</span>
              )}
            </div>
          </div>
        </div>

        {/* Livres Favoris et Listes de Lecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
              <FaBook className="mr-2 text-blue-600" /> Livres Favoris
            </h2>
            <ul className="list-disc list-inside">
              {userInfo.favoriteBooks.map((book, index) => (
                <li key={index} className="text-gray-800">{book}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
              <FaBook className="mr-2 text-blue-600" /> Listes de Lecture
            </h2>
            <div>
              <h3 className="font-medium text-gray-600">En Cours:</h3>
              <ul className="list-disc list-inside mb-2">
                {userInfo.readingList.inProgress.map((book, index) => (
                  <li key={index} className="text-gray-800">{book}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Terminés:</h3>
              <ul className="list-disc list-inside">
                {userInfo.readingList.completed.map((book, index) => (
                  <li key={index} className="text-gray-800">{book}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Boutons d'Action */}
        <div className="flex justify-between mt-6">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Sauvegarder
              </button>
              <button
                onClick={handleEditToggle}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
              >
                Annuler
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 flex items-center justify-center"
            >
            <FaPen className="mr-1" />
              Modifier
            </button>
          )}

          {/* Supprimer le compte */}
          <button
            onClick={handleDeleteAccount}
            className="text-red-600 hover:underline flex items-center justify-center"
          >
            <FaTrash className="mr-1" /> Supprimer mon compte
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
