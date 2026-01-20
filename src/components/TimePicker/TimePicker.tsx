"use client"
import { useState } from "react"
import css from "./TimePicker.module.css"

type Props = {
  value?: string
  onChange: (value: string) => void
}

const TIMES = ["09:00", "09:30", "10:00", "10:30"]

export default function TimePicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={css.input}
        onClick={() => setOpen(prev => !prev)}
      >
        {value || "00:00"}
        <span className={css.icon}>
            <svg width="20" height="20" className={css.clock}>
                <use href="/symbol-defs.svg#icon-clock"></use>
              </svg>
        </span>
      </button>

      {open && (
        <div className={css.popup}>
          <p className={css.title}>Meeting time</p>
          {TIMES.map(time => (
            <button
              key={time}
              type="button"
              className={css.time}
              onClick={() => {
                onChange(time)
                setOpen(false)
              }}
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
