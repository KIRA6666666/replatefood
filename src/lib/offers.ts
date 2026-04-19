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
    title: "Tajine de poulet aux olives",
    restaurant: "Dar Zaki",
    city: "Casablanca",
    category: "Marocain",
    mode: "Les deux",
    originalPrice: 80,
    price: 35,
    description:
      "Tajine traditionnel préparé le jour même avec poulet fermier, olives violettes et citron confit.",
    pickupTime: "À récupérer entre 19h et 21h",
  },
  {
    id: "2",
    title: "Box sushi mixte (12 pièces)",
    restaurant: "Sakura",
    city: "Rabat",
    category: "Japonais",
    mode: "Retrait",
    originalPrice: 120,
    price: 55,
    description: "Assortiment de makis et nigiris frais préparés dans la journée.",
    pickupTime: "À récupérer entre 20h et 22h",
  },
  {
    id: "3",
    title: "Pizza Margherita",
    restaurant: "Bella Napoli",
    city: "Marrakech",
    category: "Italien",
    mode: "Livraison",
    originalPrice: 70,
    price: 30,
    description: "Pizza pâte fine, tomate San Marzano, mozzarella et basilic frais.",
    pickupTime: "Disponible jusqu'à 22h",
  },
  {
    id: "4",
    title: "Couscous royal",
    restaurant: "Riad Andalous",
    city: "Fès",
    category: "Marocain",
    mode: "Retrait",
    originalPrice: 95,
    price: 40,
    description: "Couscous semoule fine, agneau, poulet, merguez et légumes du marché.",
    pickupTime: "À récupérer entre 18h30 et 20h30",
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
    title: "Salade César au poulet",
    restaurant: "Green Bowl",
    city: "Rabat",
    category: "Healthy",
    mode: "Livraison",
    originalPrice: 65,
    price: 28,
    description: "Salade fraîche, poulet grillé, parmesan, croûtons et sauce César.",
    pickupTime: "Disponible jusqu'à 21h",
  },
];

export const cities = ["Toutes les villes", "Casablanca", "Rabat", "Marrakech", "Fès"];
export const categories = ["Toutes catégories", "Marocain", "Italien", "Japonais", "Fast-food", "Healthy"];
export const modes = ["Tous les modes", "Livraison", "Retrait", "Les deux"];
