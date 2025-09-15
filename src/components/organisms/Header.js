"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { ThemeSwitch } from "../atoms";

export default function Header() {
  const pathname = usePathname();
  const items = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Research", path: "/research" },
  ];

  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => setVisible(!visible), [visible]);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  return (
    <nav className="w-full bg-light dark:bg-dark">
      <div className="container mx-auto flex justify-between px-5 py-6 md:px-10">
        <a href="/" className="font-display text-2xl font-medium">
          Casey O'Neill<span className="text-accent">.</span>
        </a>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={toggleVisible} className="block md:hidden">
            {visible ? <X /> : <Menu />}
          </button>
          <div className="hidden content-center md:flex">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${pathname === item.path ? "text-accent" : ""} my-auto h-fit px-3 font-medium uppercase transition-colors hover:text-accent`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </div>
        {visible && (
          <div className="absolute bottom-0 left-0 top-24 z-50 flex w-screen flex-col gap-4 bg-light px-5 pb-4 dark:bg-dark">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${pathname === item.path ? "text-accent" : ""} text-center text-lg font-medium uppercase transition-colors hover:text-accent`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
