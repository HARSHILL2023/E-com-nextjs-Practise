"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const crrpath = usePathname();

    const activeClass = "text-blue-600 font-bold border-b-2 border-blue-600";

    const inactiveClass = "text-gray-700 hover:text-blue-600 transition";

    return (


        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
            <h1 className="text-2xl font-bold text-blue-600">
                ShopSphere
            </h1>

            <div className="flex gap-8 text-gray-700 font-medium">
                <Link href="/" className={crrpath=="/"?activeClass:inactiveClass}>Home</Link>
                <Link href="/products" className={crrpath=="/products"?activeClass:inactiveClass}>Products</Link>
                <Link href="/categories" className={crrpath=="/categories"?activeClass:inactiveClass}>Categories</Link>
                <Link href="/contact" className={crrpath=="/contact"?activeClass:inactiveClass}>Contact</Link>
            </div>
        </nav>
    );
}
