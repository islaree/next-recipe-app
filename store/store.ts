import { create } from "zustand";

import { DishType } from "@/types/dish";
import { MealType } from "@/types/meal";
import { MenuType } from "@/types/menu";

type MenuState = {
  menus: MenuType[];
  addMenu: (menu: MenuType) => void;
  getMenu: (id: string) => MenuType | undefined;
  getAllMenu: () => MenuType[];
  updateMenu: (menu: MenuType) => void;
};

type MealState = {
  meals: MealType[];
  addMeal: (meal: MealType) => void;
  getMeals: (id: string) => MealType[] | undefined;
  deleteMeals: (id: string) => void;
};

type DishState = {
  dishes: DishType[];
  add: (dish: DishType) => void;
  get: (id: string) => DishType[] | undefined;
  delete: (id: string) => void;
  getAll: () => DishType[] | undefined;
};

export const useMenuStore = create<MenuState>((set, get) => ({
  menus: [],
  getAllMenu: () => {
    const state = get();
    return state.menus;
  },
  addMenu: (menu: MenuType) =>
    set((state) => ({
      menus: [menu, ...state.menus],
    })),
  getMenu: (id: string) => {
    const state = get();
    return state.menus.find((m) => m.id === id);
  },
  updateMenu: (menu: MenuType) =>
    set((state) => ({
      menus: state.menus.map((m) => (m.id === menu.id ? menu : m)),
    })),
}));

export const useMealStore = create<MealState>((set, get) => ({
  meals: [],
  addMeal: (meal) => set((state) => ({ meals: [...state.meals, meal] })),
  getMeals: (id) => {
    const state = get();
    return state.meals.filter((m) => m.menu_id === id);
  },
  deleteMeals: (id) =>
    set((state) => ({ meals: state.meals.filter((m) => m.id !== id) })),
}));

export const useDishStore = create<DishState>((set, get) => ({
  dishes: [],
  add: (dish) => set((state) => ({ dishes: [...state.dishes, dish] })),
  get: (id) => {
    const state = get();
    return state.dishes.filter((d) => d.meal_id === id);
  },
  getAll: () => {
    const state = get();
    return state.dishes;
  },
  delete: (id) => {
    set((state) => ({ dishes: state.dishes.filter((d) => d.id !== id) }));
  },
}));
