import clsx from "clsx";
import Image from "next/image";
import {cn} from "@/lib/utils"

export default function Home() {
  return (
    <div className="p-32">
      <h1 className=" text-white text-4xl">Hello my friends</h1>
      <h1 className=" text-white text-4xl font-oswald">Hello my friends</h1>
      <h1 className=" text-white text-4xl font-pixel">Hello my friends</h1>
      <div className="link text-white text-2xl bg-red-500">Hover here for example</div>
    </div>
  );
}
