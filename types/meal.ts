import { Dishes } from "./dish";

export type Meal = {
  id: string;
  menu_id: string;
  name: string;
  dishes: Dishes;
};

export type Meals = Meal[];
