import AppointmentForm from "./AppointmentForm";
import { Nanny } from "@/types/nannies";
import css from "./AppointmentModal.module.css"

type Props = {
  nanny: Nanny
  onClose: () => void
}

export default function AppointmentModal({ nanny, onClose }: Props) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <h2>Make an appointment with {nanny.name}</h2>
        <AppointmentForm onSuccess={onClose} />
      </div>
    </div>
  )
}