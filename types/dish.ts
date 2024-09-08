import { IngredientsType } from "./ingredient";

export type DishType = {
  id: string;
  meal_id: string;
  name: string;
  ingredients: IngredientsType;
};

export type DishesType = DishType[];
