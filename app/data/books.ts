// Simulation de données de livres
const books = [
    {
      id: 1,
      title: "Harry Potter à l'école des sorciers",
      author: "J.K. Rowling",
      genre: "Fantasy",
      description: "Un jeune garçon découvre qu'il est un sorcier et entre dans une école de magie.",
      imageUrl: "https://www.momox-shop.fr/build/_next/image?url=https%3A%2F%2Fimages2.medimops.eu%2Fproduct%2Ff8e4de%2FM02070584623-source.jpg&w=640&q=75",
      resume: "Amitié, surprises, dangers, humour, Harry découvre ses pouvoirs et la vie à Poudlard. Le premier tome des aventures du jeune héros vous ensorcelle aussitôt ! Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit son existence bouleversée. Un géant vient le chercher pour l'emmener à Poudlard, une école de sorcellerie ! Voler en balai, jeter des sorts, combattre les trolls : Harry se révèle un sorcier doué. Mais un mystère entoure sa naissance et l'effroyable V., le mage dont personne n'ose prononcer le nom.",
      languages: ["Français", "Anglais", "Espagnol"],
      publisher: "Éditions Inconnues",
      comments: [
        { id: 1, user: "Jean", content: "Un livre captivant !" },
        { id: 2, user: "Marie", content: "Je l'ai adoré, l'intrigue est incroyable." },
      ],
    },
    {
      id: 2,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      genre: "Fiction",
      description: "L'histoire d'un jeune prince venu d'une autre planète.",
      imageUrl: "https://www.momox-shop.fr/build/_next/image?url=https%3A%2F%2Fimages2.medimops.eu%2Fproduct%2Ff56698%2FM02075155542-source.jpg&w=640&q=75",
      resume: "La version originale du chef-d'oeuvre d'Antoine de Saint-Exupéry, suivie d'un cahier spécial pour aller à la rencontre de l'auteur. « Les enfants seuls savent ce qu'ils cherchent. »",
      languages: ["Français", "Anglais", "Espagnol"],
      publisher: "Éditions Inconnues",
      comments: [
        { id: 1, user: "Jean", content: "Un livre captivant !" },
        { id: 2, user: "Marie", content: "Je l'ai adoré, l'intrigue est incroyable." },
      ],
    },
    {
      id: 3,
      title: "Petit pays",
      author: "Gaël Faye",
      genre: "Roman",
      description: "Petit Pays de Gaël Faye raconte l'enfance bouleversée de Gabriel par la guerre et le génocide.",
      imageUrl: "https://www.momox-shop.fr/build/_next/image?url=https%3A%2F%2Fimages2.medimops.eu%2Fproduct%2Fabb3ee%2FM02253070440-source.jpg&w=640&q=75",
      resume: "Avant, Gabriel faisait les quatre cents coups avec ses copains dans leur coin de paradis. Et puis l'harmonie familiale s'est disloquée en même temps que son « petit pays », le Burundi, ce bout d'Afrique brutalement malmené par l'Histoire. Plus tard, Gabriel fait revivre un monde à jamais perdu. Les battements de coeur et les souffles coupés, les pensées profondes et les rires déployés, le parfum de citronnelle, les termites les jours d'orage, les jacarandas en fleur... L'enfance, son infinie douceur, ses douleurs qui ne nous quittent jamais.",
      languages: ["Français"],
      publisher: "Éditions Inconnues",
      comments: [
        { id: 1, user: "Jean", content: "Un livre captivant !" },
        { id: 2, user: "Marie", content: "Je l'ai adoré, l'intrigue est incroyable." },
      ],
    },
    {
      id: 4,
      title: "Le Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "Les aventures d'un hobbit nommé Bilbo Baggins.",
      imageUrl: "https://www.momox-shop.fr/build/_next/image?url=https%3A%2F%2Fimages2.medimops.eu%2Fproduct%2Fc5455c%2FM02253049417-source.jpg&w=640&q=75",
      resume: "Bilbo, comme tous les hobbits, est un petit être paisible et sans histoire. Son quotidien est bouleversé un beau jour, lorsque Gandalf le magicien et treize nains barbus l'entraînent dans un voyage périlleux. C'est le début d'une grande aventure, d'une fantastique quête au trésor semée d'embûches et d'épreuves, qui mènera Bilbo jusqu'à la Montagne Solitaire gardée par le dragon Smaug...",
      languages: ["Français", "Anglais", "Espagnol"],
      publisher: "Éditions Inconnues",
      comments: [
        { id: 1, user: "Jean", content: "Un livre captivant !" },
        { id: 2, user: "Marie", content: "Je l'ai adoré, l'intrigue est incroyable." },
      ],
    },
  ];
  
  export default books;
  