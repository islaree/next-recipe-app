"use client";

import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { MealType } from "@/types/meal";
import Dishes from "./dishes";
import AddDish from "./add-dish";
import { useEffect } from "react";

export default function Meal({ title }: { title: string }) {
  return (
    <>
      <div className="flex items-center justify-between">{title}</div>
      <div>
        <Dishes title={title} />
        <AddDish mealname={title} />
      </div>
    </>
  );
}
