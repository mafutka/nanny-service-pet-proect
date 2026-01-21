"use client"

import { NannyFilter } from "@/types/filters"
import css from "./Filters.module.css"

type Props = {
  value: NannyFilter
  onChange: (value: NannyFilter) => void
}

export default function Filters({ value, onChange }: Props) {
  return (
    <div className={css.wrapper}>
      <select
        className={css.select}
        value={value}
        onChange={(e) => onChange(e.target.value as NannyFilter)}
      >
        <option value="all">Show all</option>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="price_low">Less than 10$</option>
        <option value="price_high">Greater than 10$</option>
        <option value="popular">Popular</option>
        <option value="not_popular">Not popular</option>
      </select>
    </div>
  )
}