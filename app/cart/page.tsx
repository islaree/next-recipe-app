"use client";

import { useCartStore } from "@/store/shopping";

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
import { ShoppingCart } from "lucide-react";

export default function ShoppingPage() {
  const carts = useCartStore((state) => state.getAll());
  return (
    <div className="px-5 pt-10 pb-24">
      <div className="flex space-x-2 items-center">
        <div className="flex items-center justify-center rounded-md bg-yellow-50 p-2 border border-yellow-200">
          <ShoppingCart className="w-4 h-4 text-yellow-600" />
        </div>
        <h1 className="text-xl font-bold font-serif">Shopping Cart</h1>
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
            {carts.map((cart) => (
              <TableRow key={cart.id}>
                <TableCell className="font-medium whitespace-nowrap">
                  <Checkbox checked={cart.checked} />
                </TableCell>
                <TableCell className="font-medium whitespace-nowrap">
                  {cart.name}
                </TableCell>
                <TableCell>{cart.num}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
