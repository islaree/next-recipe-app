import { Meals } from "./meal";

export type Menu = {
  user_id?: string;
  id: string;
  date?: string;
  meals: Meals;
};

export type Menus = Menu[];
