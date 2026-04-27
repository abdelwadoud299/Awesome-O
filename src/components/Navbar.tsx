"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TerminalSquare } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Committees", href: "/committees" },
        { name: "Workshops", href: "/workshops" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 border-b border-brand-medium/30 bg-brand-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <TerminalSquare className="w-6 h-6 text-brand-accent group-hover:text-brand-light transition-colors" />
                        <span className="font-bold text-xl tracking-wider text-white">
                            AWESOME<span className="text-brand-accent">-O</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-medium tracking-wide transition-colors hover:text-brand-accent",
                                    pathname === link.href ? "text-brand-light" : "text-gray-400"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium text-brand-dark bg-brand-accent px-4 py-1.5 rounded hover:bg-white transition-colors tracking-wide"
                        >
                            Dashboard
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-brand-medium/30 bg-brand-dark">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    pathname === link.href
                                        ? "bg-brand-medium/20 text-brand-light"
                                        : "text-gray-400 hover:text-white hover:bg-brand-medium/10"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark bg-brand-accent mt-4"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
