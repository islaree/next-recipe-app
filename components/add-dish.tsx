"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDishStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";

export default function AddDish({ mealname }: { mealname: string }) {
  const params = useParams();
  const [dishname, setDishname] = useState("");
  const addDish = useDishStore((state) => state.add);
  const all = useDishStore((state) => state.getAll);

  const handleClick = () => {
    setDishname("");
    addDish({
      id: uuidv4(),
      menu_id: params.id as string,
      name: dishname,
      ingredients: [],
      meal_type: mealname,
    });

    console.log(all());
  };

  return (
    <>
      <Input
        value={dishname}
        placeholder="料理名を入力してください"
        onChange={(e) => setDishname(e.target.value)}
      />
      <Button onClick={handleClick} variant="secondary">
        + add dish
      </Button>
    </>
  );
}
