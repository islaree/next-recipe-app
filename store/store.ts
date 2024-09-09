import { create } from "zustand";

import { DishType } from "@/types/dish";
import Ingredients from "@/components/ingredients";
import { IngredientType } from "@/types/ingredient";

type DishState = {
  dishes: DishType[];
  add: (dish: DishType) => void;
  get: (id: string, title: string) => DishType[] | [];
  delete: (id: string) => void;
  getAll: () => DishType[] | undefined;
};

type IngredientState = {
  ingredients: IngredientType[];
  add: (ingredient: IngredientType) => void;
  get: (id: string) => IngredientType[] | [];
  delete: (id: string) => void;
  update: (ingredient: IngredientType) => void;
};

export const useDishStore = create<DishState>((set, get) => ({
  dishes: [],
  add: (dish) => set((state) => ({ dishes: [...state.dishes, dish] })),
  get: (id, title) => {
    const state = get();
    return state.dishes.filter((d) => d.menu_id == id && d.meal_type == title);
  },
  getAll: () => {
    const state = get();
    return state.dishes;
  },
  delete: (id) => {
    set((state) => ({ dishes: state.dishes.filter((d) => d.id !== id) }));
  },
}));

export const useIngredientStore = create<IngredientState>((set, get) => ({
  ingredients: [],
  add: (ingredient) =>
    set((state) => ({ ingredients: [...state.ingredients, ingredient] })),
  get: (id) => {
    const state = get();
    return state.ingredients.filter((i) => i.dish_id === id);
  },
  delete: (id) => {
    set((state) => ({
      ingredients: state.ingredients.filter((i) => i.id !== id),
    }));
  },
  update: (ingredient) => {
    set((state) => ({
      ingredients: state.ingredients.map((i) =>
        i.id === ingredient.id ? ingredient : i
      ),
    }));
  },
}));
