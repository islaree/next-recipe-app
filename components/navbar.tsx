"use client";

import { cn } from "@/lib/utils";
import {
  CalendarDays,
  CookingPot,
  PanelLeft,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-14 px-4 bg-white border-b border-gray-200">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <PanelLeft className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col gap-4 text-lg font-medium"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <Link
              href="/calendar"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <CalendarDays className="w-5 h-5" />
              Menu
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/recipe"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <CookingPot className="w-5 h-5" />
              Recipe
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/cart"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <ShoppingCart className="w-5 h-5" />
              Shopping Cart
            </Link>
          </SheetClose>
        </SheetContent>
      </Sheet>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
