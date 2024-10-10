import { logements } from "./logements";

type navDataType = {
  title: string;
  url: string;
  links: any;
};

type navBurgerType = {
  name: string;
  href: string;
  id: number;
};
const conca = logements.map((logement, index) => ({
  name: logement.nom,
  href: logement.link,
  id: index + 3,
}));
export const navBurger: navBurgerType[] = [
  { name: "Accueil", href: "/", id: 0 },
  { name: "Les Logements", href: "/#logements", id: 1 },
  { name: "À propos", href: "/about", id: 4 },
  { name: "Contact", href: "/#contact", id: 5 },
];
navBurger.push(...conca);
const navLogements = logements.map((logement) => [logement.nom, logement.link]);

export const navData: navDataType[] = [
  {
    title: "Accueil",
    url: "/",
    links: [],
  },
  {
    title: "Les Logements",
    url: "/#logements",
    links: [navLogements],
  },
  {
    title: "À propos",
    url: "/about",
    links: [],
  },
  {
    title: "Contact",
    url: "/#contact",
    links: [],
  },
];

export const photos: string[] = [
  "/villa/villa-du-rougadou-6.webp",
  "/villa/villa-du-rougadou-14.webp",
  "/villa/villa-du-rougadou-46.webp",
  "/villa/villa-du-rougadou-2.webp",
  "/villa/villa-du-rougadou-3.webp",
  "/villa/villa-du-rougadou-11.webp",
];

export const reviews = [
  {
    name: "Etienne",
    date: "août 2024",
    text:
      "Sandie a été très accueillante, le logement était impeccable et est très bien situé pour visiter la région. Toute la famille a apprécié le séjour.",
    note: 5,
  },

  {
    name: "Elodie",
    date: "juin 2024",
    text:
      "La villa est magnifique, l’emplacement est parfait pour le calme. Les hôtes sont sympathiques. Merci pour ce beau séjour !",
    note: 5,
  },

  {
    name: "Mélanie",
    date: "août 2024",
    text:
      "Bon séjour chez Benoit et Sandie. Sandie a été à l’écoute et réactive",
    note: 5,
  },
  {
    name: "Nicolas",
    date: "mai 2024",
    text:
      "Très belle villa avec des extérieurs très agréables, conforme à la description.",
    note: 5,
  },
  {
    name: "Amandine",
    date: "juillet 2023",
    text:
      "Merci beaucoup , tout etait parfait . La maison en elle même , l’accueil , la propreté , les cadeaux régionaux à l’arrivée , l’espace , la piscine , la communication .. tout !!",
    note: 5,
  },
  {
    name: "Normand",
    date: "juin 2023",
    text: "hote très gentil et amical, merci pour votre accueil.",
    note: 5,
  },
];
