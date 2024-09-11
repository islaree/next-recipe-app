"use client";

import { cn } from "@/lib/utils";
import { CalendarDays, CookingPot, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav className="fixed flex items-center justify-center gap-x-8 bottom-0 left-0 w-full bg-black z-10 h-14 text-white">
      <NavItem href="/calendar">
        <CalendarDays className="w-5 h-5" />
      </NavItem>
      <NavItem href="/recipe">
        <CookingPot className="h-5 w-5" />
      </NavItem>
      <NavItem href="/cart">
        <ShoppingCart className="h-5 w-5" />
      </NavItem>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactElement;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "relative text-gray-400",
        pathname === href && "text-white"
      )}
    >
      <span
        className={cn(
          "hidden w-1 h-1 bg-sky-400 rounded-full absolute -bottom-2.5 left-1/2 -translate-x-1/2",
          pathname === href && "block"
        )}
      ></span>
      {children}
    </Link>
  );
}
