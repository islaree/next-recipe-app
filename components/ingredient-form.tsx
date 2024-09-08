"use client";

import { Input } from "./ui/input";

export default function IngredientsForm({
  ingredient,
  onUpdate,
}: {
  ingredient: any;
  onUpdate: (updateIngredient: any) => void;
}) {
  return (
    <div className="flex gap-x-4">
      <Input
        value={ingredient.name}
        placeholder="材料名"
        className="w-3/4"
        onChange={(e) => onUpdate({ ...ingredient, name: e.target.value })}
      />
      <Input
        value={ingredient.num}
        type="number"
        placeholder="数量"
        className="w-1/4"
        onChange={(e) => onUpdate({ ...ingredient, num: e.target.value })}
      />
    </div>
  );
}
