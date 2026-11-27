"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const activeClass =
    "rounded-lg bg-sky-700 px-4 py-2 font-semibold text-white";
  const normalClass =
    "rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700";

  return (
    <nav aria-label="Main navigation" className="mb-10 flex flex-wrap justify-center gap-3">
      <Link
        href="/"
        className={pathname === "/" ? activeClass : normalClass}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Home
      </Link>

      <Link
        href="/products"
        className={
          pathname === "/products" || pathname.startsWith("/products/")
            ? activeClass
            : normalClass
        }
        aria-current={
          pathname === "/products" || pathname.startsWith("/products/")
            ? "page"
            : undefined
        }
      >
        Products
      </Link>

      <Link
        href="/categories"
        className={
          pathname === "/categories" || pathname.startsWith("/categories/")
            ? activeClass
            : normalClass
        }
        aria-current={
          pathname === "/categories" || pathname.startsWith("/categories/")
            ? "page"
            : undefined
        }
      >
        Categories
      </Link>

      <Link
        href="/contact"
        className={
          pathname === "/contact" || pathname.startsWith("/contact/")
            ? activeClass
            : normalClass
        }
        aria-current={
          pathname === "/contact" || pathname.startsWith("/contact/")
            ? "page"
            : undefined
        }
      >
        Contact
      </Link>
    </nav>
  );
}
