"use client";

import Link from "next/link";
import Meals from "@/components/meals";

export default function MenuPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Link href="/">← back</Link>
      <Meals />
    </>
  );
}
