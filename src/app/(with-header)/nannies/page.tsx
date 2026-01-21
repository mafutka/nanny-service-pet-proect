"use client"

import { useState, useMemo } from "react"
import rawNannies from "@/data/babysitters.json"
import NanniesList from "@/components/NanniesList/NanniesList"
import Filters from "@/components/Filters/Filters"
import { Nanny } from "@/types/nannies"
import { NannyFilter } from "@/types/filters"

const nannies: Nanny[] = rawNannies.map((nanny, index) => ({
  ...nanny,
  id: String(index),
}))

export default function NanniesPage() {
  const [filter, setFilter] = useState<NannyFilter>("all")

  const filteredNannies = useMemo(() => {
    const data = [...nannies]

    switch (filter) {
      case "az":
        return data.sort((a, b) => a.name.localeCompare(b.name))
      case "za":
        return data.sort((a, b) => b.name.localeCompare(a.name))
      case "price_low":
        return data.filter(n => n.price_per_hour < 10)
      case "price_high":
        return data.filter(n => n.price_per_hour >= 10)
      case "popular":
        return data.filter(n => n.rating >= 4.5)
      case "not_popular":
        return data.filter(n => n.rating < 4.5)
      default:
        return data
    }
  }, [filter])

  return (
    <>
      <Filters value={filter} onChange={setFilter} />
      <NanniesList nannies={filteredNannies} />
    </>
  )
}
