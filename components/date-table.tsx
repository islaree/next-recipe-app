"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import DateTag from "./date-tag";
import { useRouter } from "next/navigation";

export default function DateTable({ dates }: { dates: any }) {
  const router = useRouter();

  const handleRowClick = (date: Date) => {
    router.push(`/${format(date, "yyyy-MM-dd")}`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">日付</TableHead>
          <TableHead>献立</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dates.map((date: any, index: any) => (
          <TableRow
            key={index}
            className={`cursor-pointer ${
              format(new Date(), "yyyy-MM-dd") == format(date, "yyyy-MM-dd") &&
              "bg-gray-50"
            }`}
            onClick={() => handleRowClick(date)}
          >
            <TableCell className="font-medium whitespace-nowrap">
              {format(date, "MM/dd (EEE)", { locale: ja })}
            </TableCell>
            <TableCell>
              <DateTag id={format(date, "yyyy-MM-dd")} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
