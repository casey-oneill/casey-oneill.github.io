"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { ThemeSwitch } from "../atoms";

export default function Header() {
  const pathname = usePathname();
  const items = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
  ];

  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => setVisible(!visible), [visible]);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visible]);

  return (
    <nav className="bg-light dark:bg-dark w-full">
      <div className="flex justify-between py-6 px-5 md:px-10 mx-auto container">
        <a href="/" className="font-display font-medium text-2xl">
          Casey O'Neill<span className="text-accent">.</span>
        </a>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={toggleVisible} className="block md:hidden">
            {visible ? <X /> : <Menu />}
          </button>
          <div className="hidden md:flex content-center">
            {items.map((item) => (
              <Link key={item.path} href={item.path} className={`${pathname === item.path ? 'text-accent' : ''} hover:text-accent transition-colors h-fit my-auto px-3 font-medium uppercase`}>
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </div>
        {visible && (
          <div className="absolute left-0 bottom-0 top-24 w-screen px-5 bg-light dark:bg-dark z-50 flex flex-col gap-4 pb-4">
            {items.map((item) => (
              <Link key={item.path} href={item.path} className={`${pathname === item.path ? 'text-accent' : ''} hover:text-accent transition-colors font-medium text-lg text-center uppercase`}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
