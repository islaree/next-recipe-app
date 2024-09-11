"use client";

import DateTable from "@/components/date-table";
import { Calendar, CalendarDays, CookingPotIcon } from "lucide-react";
import { useState } from "react";

// 指定した年と月の日付リストを生成する関数
const generateDates = (year: any, month: any) => {
  const dates = [];
  // 月は0ベースのため、次の月の1日から1日引いて月の末日を取得
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= lastDay; day++) {
    dates.push(new Date(year, month, day));
  }

  return dates;
};

export default function Home() {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(8); // 9月 (0が1月なので、8は9月を指します)

  const dates = generateDates(year, month);

  return (
    <div className="max-w-2xl mx-auto px-5 pt-10 py-24">
      <div className="flex space-x-2 items-center">
        <div className="flex items-center justify-center rounded-md bg-sky-50 p-2 border border-sky-100">
          <CalendarDays className="w-4 h-4 text-sky-600" />
        </div>
        <h1 className="text-xl font-bold font-serif">Menu</h1>
      </div>
      <DateTable dates={dates} />
    </div>
  );
}
