"use client";

import Link from "next/link";
import AddMeal from "@/components/add-meal";
import Meals from "@/components/meals";

export default function MenuPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Link href="/">← back</Link>
      <Meals id={params.id} />
      <div className="py-4">
        <AddMeal id={params.id} />
      </div>
    </>
  );
}
