"use client"

import Navigation from "../Navigation/Navigation"
import { useState } from "react"
import AuthModal from "../AuthModal/AuthModal"
import clsx from "clsx"
import css from "./Header.module.css"
import { useAuth } from "@/context/AuthContext"

type HeaderProps = {
  variant?: "transparent" | "colored"
}

export default function Header({ variant = "colored" }: HeaderProps) {
  const [authType, setAuthType] = useState<"login" | "register" | null>(null)
  const { user, logout } = useAuth()

  const isLoggedIn = !!user

  return (
    <header className={clsx(css.header, css[variant])}>
      <div className={css.inner}>
        <p className={css.headerLogo}>Nanny.Services</p>
        <Navigation />

        {!isLoggedIn ? (
          <div className={css.btnBlock}>
            <button
              className={css.loginBtn}
              onClick={() => setAuthType("login")}
            >
              Log in
            </button>
            <button
              className={css.registerBtn}
              onClick={() => setAuthType("register")}
            >
              Registration
            </button>
          </div>
        ) : (
          <div className={css.userBlock}>
            <span className={css.userName}>
              {user.email}
            </span>
            <button className={css.logoutBtn} onClick={logout}>
              Logout
            </button>
          </div>
        )}

        {authType && (
          <AuthModal
            type={authType}
            onClose={() => setAuthType(null)}
          />
        )}
      </div>
    </header>
  )
}
