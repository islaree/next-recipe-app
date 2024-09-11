"use client";

import { DishType } from "@/types/dish";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useDishStore } from "@/store/store";
import Ingredients from "./ingredients";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DishProps {
  data: DishType;
}

export default function Dish({ data }: DishProps) {
  const handleDelete = useDishStore((state) => state.delete);
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
      <Link
        href={`${pathname}/${data.id}`}
        className="flex items-center justify-between text-sm underline"
      >
        {data.name}
      </Link>
      <Button size="icon" variant="ghost" onClick={() => handleDelete(data.id)}>
        <Trash2 className="w-4 h-4 text-gray-600" />
      </Button>
    </div>
  );
}
