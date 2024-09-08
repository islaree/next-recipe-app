"use client";

import { useDishStore } from "@/store/store";

export default function DateTag({ id }: { id: string }) {
  const breakfast = useDishStore((state) => state.get(id, "breakfast"));
  const lunch = useDishStore((state) => state.get(id, "lunch"));
  const dinner = useDishStore((state) => state.get(id, "dinner"));

  return (
    <div className="flex space-x-1">
      {breakfast.length > 0 && (
        <span className="py-1 px-2 rounded-md bg-sky-50 border border-sky-200 font-medium text-xs text-sky-600 whitespace-nowrap">
          朝食
        </span>
      )}
      {lunch.length > 0 && (
        <span className="py-1 px-2 rounded-md bg-sky-50 border border-sky-200 font-medium text-xs text-sky-600 whitespace-nowrap">
          昼食
        </span>
      )}
      {dinner.length > 0 && (
        <span className="py-1 px-2 rounded-md bg-sky-50 border border-sky-200 font-medium text-xs text-sky-600 whitespace-nowrap">
          夕食
        </span>
      )}
    </div>
  );
}
