import Link from 'next/link';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Book Cards */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-xl mb-2">Le Petit Prince</h3>
              <p className="text-gray-600 mb-4">Un conte poétique et philosophique qui explore les thèmes de l'amour et de l'amitié.</p>
              <Link href="/livres/le-petit-prince" className="text-blue-600 hover:underline">En savoir plus</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-xl mb-2">1984</h3>
              <p className="text-gray-600 mb-4">Un roman dystopique qui décrit un futur totalitaire où la liberté d'expression est supprimée.</p>
              <Link href="/livres/1984" className="text-blue-600 hover:underline">En savoir plus</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-xl mb-2">L'Étranger</h3>
              <p className="text-gray-600 mb-4">Un roman qui explore l'absurdité de la condition humaine à travers les yeux d'un homme apathique.</p>
              <Link href="/livres/l-etranger" className="text-blue-600 hover:underline">En savoir plus</Link>
            </div>
          </div>
        </section>

        {/* User Testimonials Section */}
        <section className="py-16 bg-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Ce que nos utilisateurs disent
          </h2>
          <div className="flex flex-col items-center">
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
