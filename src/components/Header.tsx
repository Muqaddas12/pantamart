"use client";

import { motion } from "framer-motion";
import {
  Home,
  ShieldCheck,
  Sparkles,
  Rocket,
  Mail
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  const items = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "security", label: "Security", icon: ShieldCheck, href: "/security" },
    { id: "features", label: "Features", icon: Sparkles, href: "/features" },
    { id: "launch", label: "Launch", icon: Rocket, href: "/launch" },
    { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
  ];

  return (
    <>

      {/* Desktop Header */}
      <header className="absolute top-0 left-0 w-full z-20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-semibold text-lg">
            <span className="w-8 h-8 rounded-xl bg-green-500/20 flex items-center justify-center">
              🔒
            </span>
            Pantamart
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8 text-sm text-gray-300">

            <Link
              href="/security"
              className={pathname === "/security" ? "text-green-400" : "hover:text-white"}
            >
              Security
            </Link>

            <Link
              href="/features"
              className={pathname === "/features" ? "text-green-400" : "hover:text-white"}
            >
              Features
            </Link>

            <Link
              href="/launch"
              className={pathname === "/launch" ? "text-green-400" : "hover:text-white"}
            >
              Launch
            </Link>

            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-green-400" : "hover:text-white"}
            >
              Contact
            </Link>

          </nav>

          <Link 
          href="/early-access"
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-sm">
            Early Access
          </Link>

        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md md:hidden z-30">

        <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">

          <div className="flex justify-between items-center">

            {items.map((item) => {

              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex flex-col items-center relative"
                >

                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute -top-2 w-10 h-10 rounded-xl bg-green-500/20 blur-xl"
                    />
                  )}

                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    animate={isActive ? { y: -4 } : { y: 0 }}
                  >
                    <Icon
                      size={22}
                      className={
                        isActive
                          ? "text-green-400"
                          : "text-gray-400"
                      }
                    />
                  </motion.div>

                  <span
                    className={`text-[10px] mt-1 ${
                      isActive
                        ? "text-green-400"
                        : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>

                </Link>
              );

            })}

          </div>

        </div>

      </div>

    </>
  );
}