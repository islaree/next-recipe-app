import { Ingredients } from "./ingredient";

export type Dish = {
  id: string;
  meal_id: string;
  name: string;
  ingredients: Ingredients;
};

export type Dishes = Dish[];
