"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const items = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'RESUME', path: '/resume' },
    { name: 'PROJECTS', path: '/projects' },
  ];

  return (
    <div className="bg-light py-6 px-32">
      <header className="flex justify-between">
        <a href="/" className="font-display font-medium text-3xl">
          Casey O'Neill<span className="text-accent">.</span>
        </a>
        <div className="flex">
          {items.map((item) => (
            <Link key={item.path} href={item.path} className={`${pathname === item.path ? 'text-accent' : ''} hover:text-accent h-fit mt-auto px-3`}>
              {item.name}
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}
