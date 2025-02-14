import { cn } from "@/lib/utils";
import { Container } from "./container";
import * as React from "react";
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* лев */}
        <div>
            <img src="/logo.svg" alt="" width={35} height={35}/>
            <div>
                <h1>

                </h1>
                <p>
                    
                </p>
            </div>
        </div>
        {/* прав */}
        <div>

        </div>
      </Container>
    </header>
  );
};
