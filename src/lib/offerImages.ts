import foodSandwich from "@/assets/food-sandwich.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodCroissants from "@/assets/food-croissants.jpg";
import foodMuffins from "@/assets/food-muffins.jpg";
import foodFrites from "@/assets/food-frites.jpg";
import foodShawarma from "@/assets/food-shawarma.jpg";

export const offerImages: Record<string, string> = {
  "1": foodSandwich,
  "2": foodMuffins,
  "3": foodPizza,
  "4": foodCroissants,
  "5": foodFrites,
  "6": foodShawarma,
  "7": foodFrites,
  "8": foodShawarma,
};

export function getOfferImage(id: string): string {
  return offerImages[id] ?? foodSandwich;
}
