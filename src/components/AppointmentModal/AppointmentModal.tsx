"use client"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import AppointmentForm from "./AppointmentForm"
import { Nanny } from "@/types/nannies"
import css from "./AppointmentModal.module.css"

type Props = {
  nanny: Nanny
  onClose: () => void
}

export default function AppointmentModal({ nanny, onClose }: Props) {
     useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg width="19" height="19" className={css.closeIcon}>
            <use href="/symbol-defs.svg#icon-x"></use>
          </svg>
        </button>
        <AppointmentForm nanny={nanny} onSuccess={onClose} />
      </div>
    </div>,
    document.body
  )
}
