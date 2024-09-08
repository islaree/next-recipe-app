import { Meal } from "@/types/meal";
import { Input } from "./ui/input";

export default function MealInput({
  meal,
  onUpdate,
}: {
  meal: Meal;
  onUpdate: (newMeal: Meal) => void;
}) {
  return (
    <Input
      value={meal.name}
      onChange={(e) => onUpdate({ ...meal, name: e.target.value })}
    />
  );
}
