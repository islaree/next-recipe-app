"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDishStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
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
import { Label } from "./ui/label";
import { Copy } from "lucide-react";

export default function AddDish({ mealname }: { mealname: string }) {
  const params = useParams();
  const [dishname, setDishname] = useState("");
  const addDish = useDishStore((state) => state.add);
  const [editing, setEditing] = useState(false);
  const [ingredients, setIngredients] = useState<any>([
    { id: uuidv4(), name: "", num: 0 },
  ]);

  const handleClick = () => {
    setEditing(false);
    setIngredients([{ id: uuidv4(), name: "", num: 0 }]);
    setDishname("");
    addDish({
      id: uuidv4(),
      menu_id: params.id as string,
      name: dishname,
      meal_type: mealname,
    });
  };

  return (
    <div className="py-2">
      <Dialog>
        <DialogTrigger className="text-sm">+ 料理を追加する</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>料理を追加する</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                className="text-md"
                value={dishname}
                placeholder="料理名を入力してください"
                onChange={(e) => setDishname(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="gap-y-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                キャンセル
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={handleClick}>保存</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
