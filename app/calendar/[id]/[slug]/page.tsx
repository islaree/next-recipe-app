"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIngredientStore } from "@/store/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Ellipsis, Trash2 } from "lucide-react";
import { IngredientType } from "@/types/ingredient";
/**
 * id: uuidv4()
 * dish_id: string
 * name: string
 * num: number
 * @returns
 */

export default function IngredientPage() {
  const { id, slug } = useParams();

  const [value, setValue] = useState("");
  const [num, setNum] = useState(1);
  const add = useIngredientStore((state) => state.add);

  const ingredients = useIngredientStore((state) => state.get(slug as string));

  const handleClick = () => {
    if (value.length > 0) {
      setValue("");
      add({ id: uuidv4(), dish_id: slug as string, name: value, num: num });
    }
  };

  return (
    <>
      <Link href={`/calendar/${id}`}>← back</Link>
      <div className="flex space-x-4">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Input value={num} onChange={(e) => setNum(+e.target.value)} />
      </div>
      <Button onClick={handleClick}>add ingredient</Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">材料名</TableHead>
            <TableHead>数量</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.map((i) => (
            <IngredientItem key={i.id} data={i} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function IngredientItem({ data }: { data: IngredientType }) {
  const [name, setName] = useState(data.name);
  const [num, setNum] = useState(data.num);
  const [editing, setEditing] = useState(false);

  const update = useIngredientStore((state) => state.update);
  const remove = useIngredientStore((state) => state.delete);

  const handleUpdate = () => {
    setEditing(false);
    update({ ...data, name: name, num: num });
  };

  const handleDelete = () => {
    remove(data.id);
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{num}</TableCell>
      <TableCell>
        {editing ? (
          <Dialog open={editing}>
            <DialogTrigger onClick={() => setEditing(false)}></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>材料を編集する</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input
                    className="text-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="number"
                    className="text-md"
                    value={num}
                    onChange={(e) => setNum(+e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter className="gap-y-2">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setEditing(false)}
                  >
                    キャンセル
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    onClick={() => {
                      handleUpdate();
                    }}
                  >
                    更新
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis className="w-5 h-5 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setEditing(true)}>
                編集する
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>
                削除する
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </TableCell>
    </TableRow>
  );
}
