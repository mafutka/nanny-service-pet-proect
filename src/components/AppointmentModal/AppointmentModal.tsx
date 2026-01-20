"use client"

import { createPortal } from "react-dom"
import AppointmentForm from "./AppointmentForm"
import { Nanny } from "@/types/nannies"
import css from "./AppointmentModal.module.css"

type Props = {
  nanny: Nanny
  onClose: () => void
}

export default function AppointmentModal({ nanny, onClose }: Props) {
  return createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <AppointmentForm nanny={nanny} onSuccess={onClose} />
      </div>
    </div>,
    document.body
  )
}
