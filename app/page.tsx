import Link from 'next/link';
import books from "./data/books";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow flex flex-col bg-gray-100 p-6">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenue sur BookFinder
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Partagez vos expériences de lecture et découvrez des livres qui vous correspondent !
          </p>
          <Link href="/livres" className="inline-block bg-primary text-white font-medium rounded-md py-2 px-4 hover:bg-blue-500 transition duration-300">
            Découvrez nos livres
          </Link>
        </section>

        {/* Recommended Books Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Recommandations de livres
          </h2>
          {/* Books List */}
          <div className="container mx-auto my-12 grid center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.slice(0,3).map((book) => (
                <div key={book.id} className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <Link href={`/book/${book.id}`} passHref>
                    <h2 className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition duration-300">
                      {book.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mt-2"><strong>Auteur :</strong> {book.author}</p>
                  <p className="text-gray-600"><strong>Genre :</strong> {book.genre}</p>
                  <p className="text-gray-500 mt-4">{book.description.slice(0, 100)}...</p>
                </div>
              ))}
          </div>
        </section>

        {/* User Testimonials Section */}
        <section className="py-16 px-8 bg-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Ce que nos utilisateurs disent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md text-center">
              <p className="text-gray-600 mb-4">"BookFinder a complètement transformé ma manière de découvrir des livres. Je ne pourrais plus m'en passer!"</p>
              <p className="font-semibold">- Alice L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md text-center">
              <p className="text-gray-600 mb-4">"Une expérience incroyable! Les recommandations sont toujours pertinentes!"</p>
              <p className="font-semibold">- Marc D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md text-center">
              <p className="text-gray-600 mb-4">"J'adore la fonctionnalité de partage d'expériences. C'est comme avoir un club de lecture à portée de main!"</p>
              <p className="font-semibold">- Sophie M.</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Nos Partenaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center m-4 max-w-xs">
              <img src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png" alt="Goodreads" className="mx-auto h-24 mb-4" />
              <a href="https://www.goodreads.com/" className="text-md font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition duration-300">Goodreads</a>
              <p>Goodreads permet aux utilisateurs d’évaluer et de recommander des livres, enrichissant ainsi les recommandations sur votre site.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center m-4 max-w-xs">
              <img src="https://www.mollat.com/Content/Img/Layout/logo-mobile.png" alt="Librairie Mollat" className="mx-auto h-24 mb-4" />
              <a href="https://www.mollat.com/" className="text-md font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition duration-300">Librairie Mollat</a>
              <p>Librairie Mollat, grande librairie indépendante française, offre un vaste choix de livres et des promotions exclusives pour vos lecteurs.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center m-4 max-w-xs">
              <img src="https://logo-marque.com/wp-content/uploads/2021/03/Fnac-Logo.png" alt="Fnac" className="mx-auto h-24 mb-4" />
              <a href="https://www.fnac.com/" className="text-md font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition duration-300">Fnac</a>
              <p>Fnac, leader de la distribution culturelle en France, permet d’intégrer l’achat en ligne, avec des offres spéciales pour les livres recommandés.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center m-4 max-w-xs">
              <img src="https://i.pinimg.com/originals/a2/5b/97/a25b97c3e386d8c4b5a46853f4fd6d95.jpg" alt="Bookstagram" className="mx-auto h-24 mb-4" />
              <a href="https://www.instagram.com/explore/tags/bookstagram/" className="text-md font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition duration-300">Bookstagram</a>
              <p>Bookstagram réunit passionnés de livres sur Instagram, partageant critiques et recommandations via des photos engageantes et esthétiques.</p>
            </div>
          </div>
        </section>


        {/* Blog Articles Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Articles récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Article Cards */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-xl mb-2">Comment choisir le bon livre</h3>
              <p className="text-gray-600 mb-4">Des conseils pour sélectionner des livres qui correspondent à vos goûts.</p>
              <Link href="/articles/comment-choisir-le-bon-livre" className="text-blue-600 hover:underline">Lire l'article</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-xl mb-2">Les tendances littéraires de cette année</h3>
              <p className="text-gray-600 mb-4">Une analyse des livres qui ont marqué l'année et des tendances émergentes.</p>
              <Link href="/articles/tendances-litteraires-2024" className="text-blue-600 hover:underline">Lire l'article</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-xl mb-2">Les meilleurs livres à lire cet été</h3>
              <p className="text-gray-600 mb-4">Une sélection de livres parfaits pour vos vacances d'été.</p>
              <Link href="/articles/meilleurs-livres-ete-2024" className="text-blue-600 hover:underline">Lire l'article</Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
