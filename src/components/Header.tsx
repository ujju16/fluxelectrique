"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "IoT", href: "#iot" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "border-b border-white/5",
        "bg-[var(--bg-main)]/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-[var(--text-main)] hover:text-[var(--color-primary)] transition-colors"
        >
          <Zap
            className="text-[var(--color-primary)] shrink-0"
            size={22}
            strokeWidth={2.5}
          />
          Flux Électrique
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-md text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
