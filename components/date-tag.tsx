"use client";

import { useDishStore } from "@/store/store";

export default function DateTag({ id }: { id: string }) {
  const breakfast = useDishStore((state) => state.get(id, "breakfast"));
  const lunch = useDishStore((state) => state.get(id, "lunch"));
  const dinner = useDishStore((state) => state.get(id, "dinner"));

  return (
    <div className="flex space-x-1">
      {breakfast?.map((m) => (
        <span
          key={m.id}
          className="py-1 px-2 rounded-md bg-sky-50 border border-sky-200 font-medium text-xs text-sky-600 whitespace-nowrap"
        >
          {m.name}
        </span>
      ))}
      {lunch?.map((m) => (
        <span
          key={m.id}
          className="py-1 px-2 rounded-md bg-emerald-50 border border-emerald-200 font-medium text-xs text-emerald-600 whitespace-nowrap"
        >
          {m.name}
        </span>
      ))}
      {dinner?.map((m) => (
        <span
          key={m.id}
          className="py-1 px-2 rounded-md bg-red-50 border border-red-200 font-medium text-xs text-red-600 whitespace-nowrap"
        >
          {m.name}
        </span>
      ))}
    </div>
  );
}
