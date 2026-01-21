import { useState, useMemo } from "react"; 
import NanniesList from "@/components/NanniesList/NanniesList";
import { Nanny } from "@/types/nannies";
import { NannyFilter } from "@/types/filters";
import Filters from "@/components/Filters/Filters";

type Props = {
  nannies: Nanny[]
}

export default function NanniesPage({ nannies }: Props) {
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
  }, [filter, nannies])
  return (
    <>
    <Filters value={filter} onChange={setFilter} />
  <NanniesList nannies={filteredNannies}/>
  </>)
}