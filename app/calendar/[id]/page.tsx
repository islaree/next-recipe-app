"use client";

import Link from "next/link";
import Meal from "@/components/meal";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { ja } from "date-fns/locale/ja";

export default function MenuPage() {
  const { id } = useParams();
  const date = new Date(id as string);
  return (
    <>
      <Link href="/calendar">← back</Link>
      <div className="text-center py-6">
        <h1 className="font-bold">
          {format(date, "MM/dd (EEE)", { locale: ja })}の献立
        </h1>
      </div>
      <Meal title="breakfast" />
      <Meal title="lunch" />
      <Meal title="dinner" />
    </>
  );
}
