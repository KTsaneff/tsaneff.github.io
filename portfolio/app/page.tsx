import clsx from "clsx";
import Image from "next/image";
import {cn} from "@/lib/utils"

export default function Home() {
  return (
    <div>
      <h1 className={cn("italic",
        "after:",
        "before:"
      )}>Hello</h1>
    </div>
  );
}
