import { MealsType } from "./meal";

export type MenuType = {
  user_id?: string;
  id: string;
  date?: string;
  meals: MealsType;
};

export type MenusType = MenuType[];
