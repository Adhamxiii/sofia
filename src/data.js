import art from "./assets/icons/art.png";
import sci_fi from "./assets/icons/artificial-intelligence.png";
import non_fictions from "./assets/icons/book.png";
import cook from "./assets/icons/chef.png";
import childrens from "./assets/icons/childrens.png";
import mystery from "./assets/icons/clue.png";
import comedy from "./assets/icons/comedy.png";
import fantasy from "./assets/icons/dragon.png";
import horror from "./assets/icons/ghost.png";
import romance from "./assets/icons/hearts.png";
import historical from "./assets/icons/historic-site.png";
import adventure from "./assets/icons/location.png";
import drama from "./assets/icons/masks.png";
import poetry from "./assets/icons/poetry.png";
import fiction from "./assets/icons/science-fiction.png";
import selfHelp from "./assets/icons/solidarity.png";
import science from "./assets/icons/test.png";
import thriller from "./assets/icons/thriller.png";
import travel from "./assets/icons/world.png";
import biography from "./assets/icons/writer.png";

import book1 from './assets/images/book-1.jpg'
import book2 from './assets/images/book-2.jpg'
import book3 from './assets/images/book-3.jpg'
import book4 from './assets/images/book-4.jpg'
import book5 from './assets/images/book-5.jpg'
import book6 from './assets/images/book-6.jpg'
import book7 from './assets/images/book-7.jpg'
import book8 from './assets/images/book-8.jpg'
import book9 from './assets/images/book-9.jpg'
import book10 from './assets/images/book-10.jpg'
import book11 from './assets/images/book-11.jpg'
import book12 from './assets/images/book-12.jpg'
import book13 from './assets/images/book-13.jpg'
import book14 from './assets/images/book-14.jpg'
import book15 from './assets/images/book-15.jpg'
import book16 from './assets/images/book-16.jpg'
import book17 from './assets/images/book-17.jpg'
import book18 from './assets/images/book-18.jpg'
import book19 from './assets/images/book-19.jpg'
import book20 from './assets/images/book-20.jpg'
import book21 from './assets/images/book-21.jpg'
import book22 from './assets/images/book-22.jpg'
import book23 from './assets/images/book-23.jpg'
import book24 from './assets/images/book-24.jpg'
import book25 from './assets/images/book-25.jpg'
import book26 from './assets/images/book-26.jpg'
import book27 from './assets/images/book-27.jpg'
import book28 from './assets/images/book-28.jpg'
import book29 from './assets/images/book-29.jpg'
import book30 from './assets/images/book-30.jpg'
import book31 from './assets/images/book-31.jpg'
import book32 from './assets/images/book-32.jpg'
import book33 from './assets/images/book-33.jpg'
import book34 from './assets/images/book-34.jpg'
import book35 from './assets/images/book-35.jpg'
import book36 from './assets/images/book-36.jpg'
import book37 from './assets/images/book-37.jpg'
import book38 from './assets/images/book-38.jpg'
import book39 from './assets/images/book-39.jpg'
import book40 from './assets/images/book-40.jpg'

const books = [
  {
    id: 1,
    title: "The Enigma Code",
    author: "Alice Thompson",
    genre: "Mystery",
    image: book1,
    description:
      "A thrilling mystery novel that takes you on a journey to decode a complex enigma. Join the detective in solving a series of perplexing puzzles.",
    icon: mystery,
  },
  {
    id: 2,
    title: "Echoes of Eternity",
    author: "Robert Miller",
    genre: "Science Fiction",
    image: book2,
    description:
      "In a distant future, an interstellar explorer embarks on a quest to find echoes of humanity's past. An epic journey through time and space.",
    icon: sci_fi,
  },
  {
    id: 3,
    title: "Beneath the Surface",
    author: "Sarah Harrison",
    genre: "Thriller",
    image: book3,
    description:
      "A heart-pounding thriller that delves deep into the secrets hidden beneath the surface. Uncover the truth and face the unexpected twists.",
    icon: thriller,
  },
  {
    id: 4,
    title: "A Journey Home",
    author: "James Wilson",
    genre: "Adventure",
    image: book4,
    description:
      "Set off on an adventurous journey across uncharted territories, where the path to discovery leads to unexpected encounters and personal growth.",
    icon: adventure,
  },
  {
    id: 5,
    title: "The Forgotten Legacy",
    author: "Sophie Martin",
    genre: "Historical",
    image: book5,
    description:
      "A captivating historical fiction novel that brings to life the forgotten legacy of a remarkable figure from the past.",
    icon: historical,
  },
  {
    id: 6,
    title: "Echoes in the Mist",
    author: "Ethan Adams",
    genre: "Romantic",
    image: book6,
    description:
      "A tale of romance and mystery where love blooms amidst danger and intrigue, shrouded in the mist of uncertainty.",
    icon: romance,
  },
  {
    id: 7,
    title: "The Quantum Paradox",
    author: "Olivia Foster",
    genre: "Science Fiction",
    image: book7,
    description:
      "Dive into the world of quantum physics and paradoxes as a brilliant scientist grapples with the consequences of groundbreaking discoveries.",
    icon: sci_fi,
  },
  {
    id: 8,
    title: "The Art of Enlightenment",
    author: "Daniel Harper",
    genre: "Art",
    image: book8,
    description:
      "Explore the world of art and enlightenment as artists delve into the essence of existence through their creative expressions.",
    icon: art,
  },
  {
    id: 9,
    title: "Whispers of the Wind",
    author: "Emily Bennett",
    genre: "Fantasy",
    image: book9,
    description:
      "In a world where the wind speaks and magic awakens, follow the epic quest of a young hero guided by the whispers of the wind.",
    icon: fantasy,
  },
  {
    id: 10,
    title: "Sculpting Dreams",
    author: "Benjamin Lewis",
    genre: "Art",
    image: book10,
    description:
      "Explore the world of art and sculpture as the artist brings dreams and visions to life through the chisel's delicate touch.",
    icon: art,
  },
  {
    id: 11,
    title: "The Alchemist's Legacy",
    author: "Ava Parker",
    genre: "Fantasy",
    image: book11,
    description:
      "A tale of alchemy, ancient mysteries, and a quest to unlock the secrets of an alchemist's legacy hidden for centuries.",
    icon: fantasy,
  },
  {
    id: 12,
    title: "Uncharted Horizons",
    author: "Liam Turner",
    genre: "Adventure",
    image: book12,
    description:
      "Join a daring expedition into uncharted horizons as explorers navigate perilous challenges and seek the ultimate treasure.",
    icon: adventure,
  },
  {
    id: 13,
    title: "Infinite Echoes",
    author: "Chloe Mitchell",
    genre: "Romantic",
    image: book13,
    description:
      "A unique blend of romance and science fiction, where love transcends time and space, echoing through the ages.",
    icon: romance,
  },
  {
    id: 14,
    title: "The Mystic's Journal",
    author: "Lucas Anderson",
    genre: "Mystery",
    image: book14,
    description:
      "An exploration of Mystery and the journey of a mystic, recording profound experiences, and the quest for spiritual enlightenment.",
    icon: mystery,
  },
  {
    id: 15,
    title: "The Lighthouse Keeper's Secret",
    author: "Olivia Mitchell",
    genre: "Historical",
    image: book15,
    description:
      "An evocative tale set in a remote lighthouse, revealing the secrets of a dedicated keeper and the mysteries that surround the sea.",
    icon: historical,
  },
  {
    id: 16,
    title: "City of Whispers",
    author: "Ethan Turner",
    genre: "Fantasy",
    image: book16,
    description:
      "Step into a city where whispers hold power, and supernatural forces clash in the shadows. A thrilling urban fantasy adventure.",
    icon: fantasy,
  },
  {
    id: 17,
    title: "The Quantum Dilemma",
    author: "Sophie Adams",
    genre: "Science Fiction",
    image: book17,
    description:
      "Explore the paradoxes of quantum physics and the moral dilemmas faced by scientists as they navigate the boundaries of ethics and knowledge.",
    icon: sci_fi,
  },
  {
    id: 18,
    title: "The Art of Enlightenment",
    author: "Liam Parker",
    genre: "Art",
    image: book18,
    description:
      "Explore the world of art and enlightenment as artists delve into the essence of existence through their creative expressions.",
    icon: art,
  },  
  {
    id: 19,
    title: "The Serpent's Curse",
    author: "Emily Davis",
    genre: "Fantasy",
    image: book19,
    description:
      "Join a young adventurer's quest to break a powerful curse, revealing a world of magic, mythical creatures, and ancient legends.",
    icon: fantasy,
  },
  {
    id: 20,
    title: "Brushstrokes of Beauty",
    author: "Daniel Adams",
    genre: "Art",
    image: book20,
    description:
      "Delve into the world of artistry and creativity as a talented artist paints vivid brushstrokes of beauty, revealing the soul of the canvas.",
    icon: art,
  },
  {
    id: 21,
    title: "The Alchemist's Legacy",
    author: "Ava Parker",
    genre: "Fantasy",
    image: book21,
    description:
      "A tale of alchemy, ancient mysteries, and a quest to unlock the secrets of an alchemist's legacy hidden for centuries.",
    icon: fantasy,
  },
  {
    id: 22,
    title: "Uncharted Horizons",
    author: "Liam Turner",
    genre: "Adventure",
    image: book22,
    description:
      "Join a daring expedition into uncharted horizons as explorers navigate perilous challenges and seek the ultimate treasure.",
    icon: adventure,
  },
  {
    id: 23,
    title: "Infinite Echoes",
    author: "Chloe Mitchell",
    genre: "Romantic",
    image: book23,
    description:
      "A unique blend of romance and science fiction, where love transcends time and space, echoing through the ages.",
    icon: romance,
  },
  {
    id: 24,
    title: "The Mystic's Journal",
    author: "Lucas Anderson",
    genre: "Mystery",
    image: book24,
    description:
      "An exploration of Mystery and the journey of a mystic, recording profound experiences, and the quest for spiritual enlightenment.",
    icon: mystery,
  },
  {
    id: 25,
    title: "The Clockwork Detective",
    author: "Sophia Turner",
    genre: "Mystery",
    image: book25,
    description:
      "In a steampunk world filled with gears and gadgets, a brilliant detective unravels mysteries that defy ordinary logic.",
    icon: mystery,
  },
  {
    id: 26,
    title: "Beyond the Canvas",
    author: "Matthew Miller",
    genre: "Art",
    image: book26,
    description:
      "An artist's memoir that delves into the creative process, the emotional journey of artistry, and the stories behind each canvas.",
    icon: art,
  },
  {
    id: 27,
    title: "The Timeless Journey",
    author: "Ella Turner",
    genre: "Historical",
    image: book27,
    description:
      "An enchanting blend of history and fantasy where time travelers explore ancient civilizations and face challenges that span centuries.",
    icon: historical,
  },
  {
    id: 28,
    title: "The Secret Garden Revisited",
    author: "Noah Mitchell",
    genre: "Fantasy",
    image: book28,
    description:
      "A modern reimagining of the classic 'The Secret Garden,' bringing the enchantment of the garden to a new generation of readers.",
    icon: fantasy,
  },
  {
    id: 29,
    title: "Mindful Living",
    author: "Aria Davis",
    genre: "Non-Fiction",
    image: book29,
    description:
      "A guide to embracing mindfulness and living a balanced life. Discover the power of presence and mindfulness practices.",
    icon: non_fictions,
  },
  {
    id: 30,
    title: "The Culinary Journey",
    author: "Oliver Smith",
    genre: "Cookbook",
    image: book30,
    description:
      "Embark on a culinary adventure with a collection of delectable recipes from around the world. Explore the art of cooking.",
    icon: cook,
  },
  {
    id: 31,
    title: "Enchanted Tales",
    author: "Sophia Turner",
    genre: "Childrens",
    image: book31,
    description:
      "A delightful collection of enchanting tales for young readers. Let your imagination soar with these magical stories.",
    icon: childrens,
  },
  {
    id: 32,
    title: "Laugh Out Loud",
    author: "Michael Johnson",
    genre: "Comedy",
    image: book32,
    description:
      "Get ready to burst into laughter with a hilarious collection of jokes, anecdotes, and funny stories. It's time to laugh out loud.",
    icon: comedy,
  },
  {
    id: 33,
    title: "The Haunting Shadows",
    author: "Evelyn Black",
    genre: "Horror",
    image: book33,
    description:
      "Enter a world of spine-chilling horror with a collection of terrifying tales that will send shivers down your spine.",
    icon: horror,
  },
  {
    id: 34,
    title: "Dramatic Encounters",
    author: "Lily Turner",
    genre: "Drama",
    image: book34,
    description:
      "Step into the world of intense emotions and dramatic encounters. These gripping stories will keep you on the edge of your seat.",
    icon: drama,
  },
  {
    id: 35,
    title: "Verses of the Soul",
    author: "David Miller",
    genre: "Poetry",
    image: book35,
    description:
      "A collection of heartfelt poetry that delves into the depths of the soul. Let these verses resonate with your inner emotions.",
    icon: poetry,
  },
  {
    id: 36,
    title: "The Fiction Frenzy",
    author: "Ava Turner",
    genre: "Fiction",
    image: book36,
    description:
      "Dive into a world of captivating fiction where intriguing plots and complex characters will keep you turning the pages.",
    icon: fiction,
  },
  {
    id: 37,
    title: "Self-Help Handbook",
    author: "Isabella Martin",
    genre: "Self-Help",
    image: book37,
    description:
      "Discover the keys to personal growth and self-improvement. This self-help handbook offers practical guidance for a better life.",
    icon: selfHelp,
  },
  {
    id: 38,
    title: "Scientific Wonders",
    author: "Elijah Adams",
    genre: "Science",
    image: book38,
    description:
      "Explore the fascinating world of science with a collection of remarkable discoveries and scientific wonders from various fields.",
    icon: science,
  },
  {
    id: 39,
    title: "Around the World",
    author: "Natalie Davis",
    genre: "Travel",
    image: book39,
    description:
      "Embark on a journey around the world with travel tales and adventures in exotic destinations. Get ready to explore the globe.",
    icon: travel,
  },
  {
    id: 40,
    title: "The Biographer's Canvas",
    author: "Daniel Turner",
    genre: "Biography",
    image: book40,
    description:
      "Discover the life stories of remarkable individuals from various walks of life. These biographies paint vivid portraits of their journeys.",
    icon: biography,
  },
];

export default books;
