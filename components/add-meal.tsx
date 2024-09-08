"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMealStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";

export default function AddMeal({ id }: { id: string }) {
  const [mealName, setMealName] = useState("");
  const addMeal = useMealStore((state) => state.addMeal);

  const handleClick = () => {
    setMealName("");
    addMeal({ id: uuidv4(), menu_id: id, name: mealName, dishes: [] });
  };

  return (
    <>
      <Input
        value={mealName}
        placeholder="食事区分名を入力してください"
        onChange={(e) => setMealName(e.target.value)}
      />
      <Button onClick={handleClick}>食事区分を追加する</Button>
    </>
  );
}
