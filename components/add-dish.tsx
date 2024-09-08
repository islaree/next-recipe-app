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
  const [editing, setEditing] = useState(false);
  const [ingredients, setIngredients] = useState<any>([
    { id: uuidv4(), name: "", num: 0 },
  ]);

  const handleClick = () => {
    setEditing(false);
    setIngredients([{ id: uuidv4(), name: "", num: 0 }]);
    setDishname("");
    addDish({
      id: uuidv4(),
      menu_id: params.id as string,
      name: dishname,
      meal_type: mealname,
    });
  };

  return (
    <>
      {editing ? (
        <div className="flex items-center gap-x-2">
          <Input
            className="text-md"
            value={dishname}
            placeholder="料理名を入力してください"
            onChange={(e) => setDishname(e.target.value)}
          />
          <Button size="sm" onClick={handleClick}>
            保存
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setEditing(false)}
          >
            中断
          </Button>
        </div>
      ) : (
        <div className="">
          <Button onClick={() => setEditing(true)} variant="ghost">
            + 料理を追加する
          </Button>
        </div>
      )}
    </>
  );
}

function IngredientInput({
  data,
  onUpdate,
}: {
  data: any;
  onUpdate: (obj: any) => void;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Input
        value={data.name}
        placeholder="材料名"
        className="w-3/4"
        onChange={(e) => onUpdate({ ...data, name: e.target.value })}
      />
      <Input
        value={data.num}
        type="number"
        placeholder="数量"
        className="w-1/4"
        onChange={(e) => onUpdate({ ...data, num: e.target.value })}
      />
    </div>
  );
}
