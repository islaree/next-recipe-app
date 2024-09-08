import { DishesType } from "./dish";

export type MealType = {
  id: string;
  menu_id?: string;
  name: string;
  dishes: DishesType;
};

export type MealsType = MealType[];
