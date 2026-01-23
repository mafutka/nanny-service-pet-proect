"use client"

import { useEffect, useMemo, useState } from "react"
import { ref, get } from "firebase/database"
import { database } from "@/lib/firebase"

import NanniesList from "@/components/NanniesList/NanniesList"
import Filters from "@/components/Filters/Filters"

import { Nanny } from "@/types/nannies"
import { NannyFilter } from "@/types/filters"

import css from "./NanniesPage.module.css"

export default function NanniesPage() {
  const [nannies, setNannies] = useState<Nanny[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<NannyFilter>("all")

  useEffect(() => {
    const fetchNannies = async () => {
      console.log("🔥 fetchNannies started")
      try {
        const snapshot = await get(ref(database, "nannies"))

        if (snapshot.exists()) {
          const data = snapshot.val()

          const nanniesArray: Nanny[] = Object.entries(data).map(
            ([id, nanny]) => ({
              id,
              ...(nanny as Omit<Nanny, "id">),
            })
          )

          setNannies(nanniesArray)
        }
      } catch (error) {
        console.error("Error fetching nannies:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNannies()
  }, [])

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
  }, [filter, nannies])

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading nannies...</p>
  }

  return (
    <>
    <section className={css.page}>
      <Filters value={filter} onChange={setFilter} />
      <NanniesList nannies={filteredNannies} />
      </section>
    </>
  )
}
