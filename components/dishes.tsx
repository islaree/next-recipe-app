"use client";

import { useDishStore } from "@/store/store";
import Dish from "./dish";
import { useParams } from "next/navigation";

export default function Dishes({ title }: { title: string }) {
  const params = useParams();
  const dishes = useDishStore((state) => state.get(params.id as string, title));

  return (
    <div>
      {dishes?.map((dish) => (
        <Dish key={dish.id} data={dish} />
      ))}
    </div>
  );
}
