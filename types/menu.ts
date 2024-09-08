import { MealType, MealsType } from "./meal";

export type MenuType = {
  user_id?: string;
  id: string;
  date?: string;
};

export type MenusType = MenuType[];
