import { create } from "zustand";

import { Dish } from "@/types/dish";
import { Meal } from "@/types/meal";
import { Menu } from "@/types/menu";

type MenuState = {
  menus: Menu[];
  addMenu: (menu: Menu) => void;
  getMenu: (id: string) => Menu | undefined;
  getAllMenu: () => Menu[];
  updateMenu: (menu: Menu) => void;
};

type MealState = {
  meals: Meal[];
  addMeal: (meal: Meal) => void;
  getMeals: (id: string) => Meal[] | undefined;
  deleteMeals: (id: string) => void;
};

type DishState = {
  dishes: Dish[];
  add: (dish: Dish) => void;
  get: (id: string) => Dish[] | undefined;
  delete: (id: string) => void;
  getAll: () => Dish[] | undefined;
};

export const useMenuStore = create<MenuState>((set, get) => ({
  menus: [],
  getAllMenu: () => {
    const state = get();
    return state.menus;
  },
  addMenu: (menu: Menu) =>
    set((state) => ({
      menus: [menu, ...state.menus],
    })),
  getMenu: (id: string) => {
    const state = get();
    return state.menus.find((m) => m.id === id);
  },
  updateMenu: (menu: Menu) =>
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
