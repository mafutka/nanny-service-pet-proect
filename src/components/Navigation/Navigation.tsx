'use client'

import { usePathname } from "next/navigation"
import Link from "next/link";
import { useAuth } from "@/context/AuthContext" // 1. Імпортуємо хук
import css from "./Navigation.module.css"

export default function Navigation() {
    const pathname = usePathname();
    const { user } = useAuth(); // 2. Отримуємо користувача з контексту
    const isLoggedIn = !!user;  // 3. Тепер це динамічне значення

    return (
        <nav className={css.nav}>
            <ul className={css.navlist}>
                <li className={css.navItem}>
                    <Link href="/" className={pathname === "/" ? css.active : ""}>Home</Link>
                </li>
                <li className={css.navItem}>
                    <Link href="/nannies" className={pathname === "/nannies" ? css.active : ""}>Nannies</Link>
                </li>
                {isLoggedIn && (
                    <li className={css.navItem}>
                        <Link href="/favourites" className={pathname === "/favourites" ? css.active : ""}>
                            Favorites
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}