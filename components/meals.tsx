"use client";

import { useState } from "react";
import Meal from "./meal";
import { useParams } from "next/navigation";
import { MealType } from "@/types/meal";
import { v4 as uuidv4 } from "uuid";

export default function MealForm() {
  const params = useParams();

  const [meals, setMeals] = useState<MealType[]>([
    {
      id: uuidv4(),
      name: "breakfast",
      dishes: [],
    },
    {
      id: uuidv4(),
      name: "lunch",
      dishes: [],
    },
    {
      id: uuidv4(),
      name: "dinner",
      dishes: [],
    },
  ]);

  return (
    <>
      {/* {meals.map((m) => (
        <Meal key={m.id} data={m} />
      ))} */}
      <Meal title="breakfast" />
      <Meal title="lunch" />
      <Meal title="dinner" />
    </>
  );
}
