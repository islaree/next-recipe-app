"use client";

import { useMealStore } from "@/store/store";
import Meal from "./meal";

interface MealsProps {
  id: string;
}

export default function MealForm({ id }: MealsProps) {
  const meals = useMealStore((state) => state.getMeals(id));

  return (
    <>
      {meals?.map((meal) => (
        <Meal key={meal.id} data={meal} />
      ))}
    </>
  );
}
