"use client"

import { useState } from "react"
import { Nanny } from "@/types/nannies"
import NannyCard from "../NannyCard/NannyCard"
import css from "./NanniesList.module.css"

type Props = {
  nannies: Nanny[]
}

export default function NanniesList({ nannies }: Props) {
  const [visibleCount, setVisibleCount] = useState(3)

  const visibleNannies = nannies.slice(0, visibleCount)

  return (
    <section>
      <div className={css.container}>
        <ul className={css.list}>
          {visibleNannies.map(nanny => (
            <NannyCard key={nanny.id} nanny={nanny} />
          ))}
        </ul>

        {visibleCount < nannies.length && (
          <button
            className={css.loadMoreBtn}
            onClick={() => setVisibleCount(v => v + 3)}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  )
}
