"use client";

import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useMealStore } from "@/store/store";
import { Meal } from "@/types/meal";
import Dishes from "./dishes";
import AddDish from "./add-dish";

interface MealProps {
  data: Meal;
}

export default function Meal({ data }: MealProps) {
  const handleDelete = useMealStore((state) => state.deleteMeals);

  return (
    <>
      <div className="flex items-center justify-between">
        {data.name}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleDelete(data.id)}
        >
          <Trash2 className="w-4 h-4 text-gray-600" />
        </Button>
      </div>
      <div>
        <Dishes id={data.id} />
        <AddDish id={data.id} />
      </div>
    </>
  );
}
