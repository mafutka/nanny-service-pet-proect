"use client"

import Link from "next/link"
import { useState } from "react"
import { Nanny } from "@/types/nannies"
import css from "./NannyCard.module.css"

type Props = {
  nanny: Nanny
  isLoggedIn?: boolean
}

export default function NannyCard({ nanny, isLoggedIn }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={css.container}>
      {/* Avatar */}
      <div className={css.image}>
        <img
          width="96"
          height="96"
          src={nanny.avatar_url}
          alt={nanny.name}
          className={css.avatar}
        />
      </div>
      <div className={css.infoBlock}>
        {/* Header */}
        <div className={css.header}>
          <div className={css.nameBlock}>
            <p>Nanny</p>
            <h3>{nanny.name}</h3>
          </div>
          <div className={css.adressBlock}>
            <span>{nanny.location}</span>
            <span>|</span>
            <span>⭐ {nanny.rating}</span>
            <span className={css.price}>
              Price/1 hour <span className={css.greenprice}>{nanny.price_per_hour}$</span>
            </span>
          </div>
        </div>

        {/* Tags */}
        <ul className={css.tags}>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>Age: <span className={css.fromJson}>{nanny.birthday}</span></span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>Experience: <span className={css.fromJson}>{nanny.experience}</span></span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>Kids age: <span className={css.fromJson}>{nanny.kids_age}</span></span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>Characters: <span className={css.fromJson}>{nanny.characters.join(", ")}</span></span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>Education: <span className={css.fromJson}>{nanny.education}</span></span>
          </li>
        </ul>

        {/* About */}
        <p className={expanded ? css.aboutFull : css.aboutShort}>
          {nanny.about}
        </p>

        <Link className={css.readMore} onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Hide" : "Read more"}
        </Link>

        {/* Reviews */}
        {expanded && (
          <ul className={css.reviews}>
            {nanny.reviews.map((r, i) => (
              <li key={i}>
                <strong>{r.reviewer}</strong> — ⭐ {r.rating}
                <p>{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
