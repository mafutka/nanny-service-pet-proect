"use client";

import { useState } from "react";
import rawNannies from "@/data/babysitters.json";
import { Nanny } from "@/types/nannies";
import NannyCard from "../NannyCard/NannyCard";

const nannies: Nanny[] = rawNannies.map((nanny, index) => ({
  ...nanny,
  id: String(index),
}));

export default function NanniesList() {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleNannies = nannies.slice(0, visibleCount);

  return (
    <section>
      <ul>
        {visibleNannies.map(nanny => (
          <NannyCard key={nanny.id} nanny={nanny} />
        ))}
      </ul>

      {visibleCount < nannies.length && (
        <button onClick={() => setVisibleCount(v => v + 3)}>
          Load more
        </button>
      )}
    </section>
  );
}
