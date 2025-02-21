import { cn } from "@/lib/utils";
import { Container } from "./container";
import * as React from "react";
import Image from "next/image";
import {User,ShoppingCart} from 'lucide-react'
import { Button } from "../ui/button";

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* лев */}
        <div className="felx items-center gap-4">
            <img src="/logo.svg" alt="" width={35} height={35}/>
            <div>
                <h1 className="fond-black text-2x1 uppercase">next pizza</h1>
                <p>Вкусней уже некуда</p>
            </div>
        </div>
        {/* прав */}
        <div className="gap-4 flex items-center"> 
        <Button variant="outline" className="gap-2"> <User /> Войти</Button>
        <Button variant="outline" className="gap-2"> <ShoppingCart /> Войти</Button>
        </div>
      </Container>
    </header>
  );
};
