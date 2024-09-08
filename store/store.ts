import { create } from "zustand";

import { DishType } from "@/types/dish";

type DishState = {
  dishes: DishType[];
  add: (dish: DishType) => void;
  get: (id: string, title: string) => DishType[] | [];
  delete: (id: string) => void;
  getAll: () => DishType[] | undefined;
};

export const useDishStore = create<DishState>((set, get) => ({
  dishes: [],
  add: (dish) => set((state) => ({ dishes: [...state.dishes, dish] })),
  get: (id, title) => {
    console.log(id, title);
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
