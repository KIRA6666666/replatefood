export type Offer = {
  id: string;
  title: string;
  restaurant: string;
  city: string;
  category: string;
  mode: "Livraison" | "Retrait" | "Les deux";
  originalPrice: number;
  price: number;
  description: string;
  pickupTime: string;
};

export const offers: Offer[] = [
  {
    id: "1",
    title: "Sandwich poulet grillé",
    restaurant: "Snack Atlas",
    city: "Casablanca",
    category: "Sandwich",
    mode: "Les deux",
    originalPrice: 45,
    price: 20,
    description:
      "Sandwich baguette au poulet grillé, salade, tomate et sauce maison. Préparé dans la journée.",
    pickupTime: "À récupérer entre 19h et 21h",
  },
  {
    id: "2",
    title: "Box muffins & cookies",
    restaurant: "Sweet Corner",
    city: "Rabat",
    category: "Dessert",
    mode: "Retrait",
    originalPrice: 70,
    price: 28,
    description: "Assortiment de muffins chocolat et cookies du jour, fraîchement préparés.",
    pickupTime: "À récupérer entre 20h et 22h",
  },
  {
    id: "3",
    title: "Pizza Margherita (parts)",
    restaurant: "Bella Napoli",
    city: "Marrakech",
    category: "Pizza",
    mode: "Livraison",
    originalPrice: 60,
    price: 25,
    description: "4 parts de pizza Margherita pâte fine, tomate San Marzano, mozzarella, basilic.",
    pickupTime: "Disponible jusqu'à 22h",
  },
  {
    id: "4",
    title: "Assortiment de viennoiseries",
    restaurant: "Boulangerie Andalous",
    city: "Fès",
    category: "Boulangerie",
    mode: "Retrait",
    originalPrice: 60,
    price: 22,
    description:
      "Assortiment du jour : croissants, pains au chocolat et brioches, fraîchement préparés le matin.",
    pickupTime: "À récupérer entre 18h et 20h",
  },
  {
    id: "5",
    title: "Burger maison + frites",
    restaurant: "The Counter",
    city: "Casablanca",
    category: "Fast-food",
    mode: "Les deux",
    originalPrice: 75,
    price: 32,
    description: "Burger boeuf 180g, cheddar, sauce maison, accompagné de frites fraîches.",
    pickupTime: "Disponible jusqu'à 23h",
  },
  {
    id: "6",
    title: "Wrap poulet healthy",
    restaurant: "Green Bowl",
    city: "Rabat",
    category: "Healthy",
    mode: "Livraison",
    originalPrice: 55,
    price: 24,
    description: "Wrap au poulet grillé, crudités fraîches, sauce yaourt-citron.",
    pickupTime: "Disponible jusqu'à 21h",
  },
  {
    id: "7",
    title: "Tacos poulet x2",
    restaurant: "Tacos House",
    city: "Casablanca",
    category: "Fast-food",
    mode: "Les deux",
    originalPrice: 70,
    price: 30,
    description: "Deux tacos poulet, fromage fondu, sauce algérienne et frites incluses.",
    pickupTime: "Disponible jusqu'à 22h30",
  },
  {
    id: "8",
    title: "Shawarma + boisson",
    restaurant: "Beirut Express",
    city: "Marrakech",
    category: "Street food",
    mode: "Retrait",
    originalPrice: 50,
    price: 22,
    description: "Shawarma poulet, pain libanais, crudités, sauce blanche, avec boisson.",
    pickupTime: "Disponible jusqu'à 23h",
  },
];

export const cities = ["Toutes les villes", "Casablanca", "Rabat", "Marrakech", "Fès"];
export const categories = [
  "Toutes catégories",
  "Sandwich",
  "Pizza",
  "Fast-food",
  "Street food",
  "Boulangerie",
  "Dessert",
  "Healthy",
];
export const modes = ["Tous les modes", "Livraison", "Retrait", "Les deux"];
