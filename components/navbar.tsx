import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CalendarDays, CookingPot, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed flex items-center justify-center bottom-0 left-0 w-full bg-black z-10 h-12">
      <ToggleGroup type="single" className="text-white gap-x-4">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <CalendarDays className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <CookingPot className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <ShoppingCart className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
