"use client";

import Link from "next/link";
import Meal from "@/components/meal";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { ja } from "date-fns/locale/ja";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuPage() {
  const { id } = useParams();
  const date = new Date(id as string);
  return (
    <div className="max-w-2xl mx-auto px-5 pt-10 py-24 bg-gray-50">
      <Link href="/calendar">← back</Link>
      <div className="py-4">
        <h1 className="text-xl font-bold">
          {format(date, "MM/dd (EEE)", { locale: ja })}の献立
        </h1>
      </div>
      <Tabs defaultValue="breakfast">
        <TabsList>
          <TabsTrigger value="breakfast">朝食</TabsTrigger>
          <TabsTrigger value="lunch">昼食</TabsTrigger>
          <TabsTrigger value="dinner">夕食</TabsTrigger>
        </TabsList>
        <TabsContent value="breakfast">
          <Meal title="breakfast" />
        </TabsContent>
        <TabsContent value="lunch">
          <Meal title="lunch" />
        </TabsContent>
        <TabsContent value="dinner">
          <Meal title="dinner" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
