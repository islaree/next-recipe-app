"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDishStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";

export default function AddDish({ id }: { id: string }) {
  const [dishname, setDishname] = useState("");
  const addDish = useDishStore((state) => state.add);

  const handleClick = () => {
    setDishname("");
    addDish({ id: uuidv4(), meal_id: id, name: dishname, ingredients: [] });
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
