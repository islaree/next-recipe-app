import { CookingPotIcon, ShoppingCart } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export default function RecipePage() {
  return (
    <div className="px-5 pt-10 pb-24">
      <div className="flex space-x-2 items-center">
        <div className="flex items-center justify-center rounded-md bg-red-50 p-2 border border-red-100">
          <CookingPotIcon className="w-4 h-4 text-red-600" />
        </div>
        <h1 className="text-xl font-bold font-serif">Recipe</h1>
      </div>
      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>チェック</TableHead>
              <TableHead>材料名</TableHead>
              <TableHead>数量</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium whitespace-nowrap">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium whitespace-nowrap"></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
