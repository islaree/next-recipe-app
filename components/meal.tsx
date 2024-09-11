"use client";

import Dishes from "./dishes";
import AddDish from "./add-dish";

export default function Meal({ title }: { title: string }) {
  return (
    <div className="border-gray-200 bg-white border rounded-md">
      <Dishes title={title} />
      <AddDish mealname={title} />
    </div>
  );
}
