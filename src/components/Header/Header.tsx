'use client'

import Navigation from "../Navigation/Navigation"
import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import clsx from "clsx";
import css from "./Header.module.css";

type HeaderProps = {
  variant?: "transparent" | "colored";
};

export default function Header({ variant = "colored" }: HeaderProps) {
    const [authType, setAuthType] = useState<"login" | "register" | null>(null);
    const isLoggedIn = false;
    return (
        <header className={css.header}>
            <p className={clsx(css.header, css[variant])}>Nanny.Services</p>
            <Navigation />
            {!isLoggedIn && (
  <div className={css.btnBlock}>
    <button className={css.loginBtn} onClick={() => setAuthType("login")}>Log in</button>
    <button className={css.registerBtn} onClick={() => setAuthType("register")}>Register</button>
  </div>
)}

{authType && (
  <AuthModal
    type={authType}
    onClose={() => setAuthType(null)}
  />
)}
        </header>
    )

}