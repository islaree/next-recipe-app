"use client";

import { DishType } from "@/types/dish";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useDishStore } from "@/store/store";

interface DishProps {
  data: DishType;
}

export default function Dish({ data }: DishProps) {
  const handleDelete = useDishStore((state) => state.delete);

  return (
    <div className="ml-4 flex items-center justify-between">
      {data.name}
      <Button size="icon" variant="ghost" onClick={() => handleDelete(data.id)}>
        <Trash2 className="w-4 h-4 text-gray-600" />
      </Button>
    </div>
  );
}
