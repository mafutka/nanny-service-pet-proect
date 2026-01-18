import css from "./SubmitBtn.module.css"

type SubmitBtnProps = {
  children: React.ReactNode
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}

export default function SubmitBtn({
  children,
  type = "submit",
  onClick,
  disabled = false,
}: SubmitBtnProps) {
  return (
    <>
      <button
        className={css.submitBtn}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}
