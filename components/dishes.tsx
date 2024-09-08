import { useDishStore } from "@/store/store";
import Dish from "./dish";

export default function Dishes({ id }: { id: string }) {
  const dishes = useDishStore((state) => state.get(id));

  return (
    <>
      {dishes?.map((dish) => (
        <Dish key={dish.id} data={dish} />
      ))}
    </>
  );
}
