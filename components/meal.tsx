"use client";

import Dishes from "./dishes";
import AddDish from "./add-dish";

export default function Meal({ title }: { title: string }) {
  return (
    <div>
      <div className="border-t border-b border-gray-200 bg-gray-100 text-sm p-2">
        {title == "breakfast"
          ? "朝食"
          : title == "lunch"
          ? "昼食"
          : title == "dinner" && "夕食"}
      </div>
      <Dishes title={title} />
      <AddDish mealname={title} />
    </div>
  );
}
