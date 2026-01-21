import { useEffect } from "react"
import LoginForm from "../LoginForm/LoginForm"
import RegisterForm from "../RegisterForm/RegisterForm"
import css from "./AuthModal.module.css"

type Props = {
  type: "login" | "register"
  onClose: () => void
}

export default function AuthModal({ type, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg width="19" height="19" className={css.closeIcon}>
            <use href="/symbol-defs.svg#icon-x"></use>
          </svg>
        </button>

        {type === "login" ? (
          <LoginForm onSuccess={onClose} />
        ) : (
          <RegisterForm onSuccess={onClose} />
        )}
      </div>
    </div>
  )
}
