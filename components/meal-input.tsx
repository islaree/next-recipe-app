import { MealType } from "@/types/meal";
import { Input } from "./ui/input";

export default function MealInput({
  meal,
  onUpdate,
}: {
  meal: MealType;
  onUpdate: (newMeal: MealType) => void;
}) {
  return (
    <Input
      value={meal.name}
      onChange={(e) => onUpdate({ ...meal, name: e.target.value })}
    />
  );
}
