"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

/**
 * id: uuidv4()
 * dish_id: string
 * name: string
 * num: number
 * @returns
 */

export default function IngredientPage() {
  const { id, slug } = useParams();

  return (
    <>
      <Link href={`/calendar/${id}`}>← back</Link>
      <div>{slug}</div>
    </>
  );
}
