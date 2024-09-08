import { IngredientsType } from "./ingredient";

export type DishType = {
  id: string;
  user_id?: string;
  menu_id: string;
  meal_type: string;
  name: string;
  ingredients: IngredientsType;
};

export type DishesType = DishType[];
