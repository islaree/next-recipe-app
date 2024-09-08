"use client";

import { useMealStore } from "@/store/store";

export default function DateTag({ id }: { id: string }) {
  const meals = useMealStore((state) => state.getMeals(id));

  return (
    <div className="space-x-1">
      {meals?.map((m) => (
        <span
          key={m.id}
          className="py-1 px-2 rounded-full bg-sky-100 border border-sky-600 font-medium text-xs text-sky-600"
        >
          {m.name}
        </span>
      ))}
    </div>
  );
}
