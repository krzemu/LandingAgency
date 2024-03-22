import { navList } from "@/lib/data";
import React from "react";

export default function Header() {
  return (
    <header className="py-8 border-b">
      <div className="flex items-center justify-between max-w-big mx-auto">
        <div className="text-purple text-2xl font-black">beagency</div>
        <ul className="flex gap-12">
          {navList.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}