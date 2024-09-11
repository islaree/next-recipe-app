import { create } from "zustand";

import { DishType } from "@/types/dish";
import Ingredients from "@/components/ingredients";
import { IngredientType } from "@/types/ingredient";
import { Cart } from "@/types/cart";

type CartState = {
  carts: Cart[];
  add: (cart: Cart) => void;
  getAll: () => Cart[];
};

export const useCartStore = create<CartState>((set, get) => ({
  carts: [],
  add: (cart) => set((state) => ({ carts: [...state.carts, cart] })),
  getAll: () => {
    const state = get();
    return state.carts;
  },
}));
