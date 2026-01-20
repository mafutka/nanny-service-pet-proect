"use client"

import { calcAge } from "@/utils/calcAge"
import { useState } from "react"
import { Nanny } from "@/types/nannies"
import AppointmentModal from "../AppointmentModal/AppointmentModal"
import css from "./NannyCard.module.css"

type Props = {
  nanny: Nanny
  isLoggedIn?: boolean
}

export default function NannyCard({ nanny, isLoggedIn }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <div className={css.metaRow}>
          <div className={css.adressBlock}>
            <span>{nanny.location}</span>
            <span className={css.decor}>|</span>
            <span>⭐ {nanny.rating}</span>
            <span className={css.decor}>|</span>
            <span className={css.price}>
              Price/1 hour{" "}
              <span className={css.greenprice}>{nanny.price_per_hour}$</span>
            </span>
          </div>
          <button
            className={css.heartBtn}
            aria-label="Add to favorites"
            onClick={() => setIsFavorite((prev) => !prev)}
          >
            <svg
              className={css.heartIcon}
              aria-label="Add to favorites"
              onClick={() => setIsFavorite((prev) => !prev)}
            >
              <use href="/symbol-defs.svg#icon-heart"></use>
            </svg>
          </button>
          </div>
        </div>

        {/* Tags */}
        <ul className={css.tags}>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>
              Age:{" "}
              <span className={css.fromJson}>{calcAge(nanny.birthday)}</span>
            </span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>
              Experience:{" "}
              <span className={css.fromJson}>{nanny.experience}</span>
            </span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>
              Kids age: <span className={css.fromJson}>{nanny.kids_age}</span>
            </span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>
              Characters:{" "}
              <span className={css.fromJson}>
                {nanny.characters.join(", ")}
              </span>
            </span>
          </li>
          <li className={css.tagItem}>
            <span className={css.tagItemText}>
              Education: <span className={css.fromJson}>{nanny.education}</span>
            </span>
          </li>
        </ul>

        {/* About */}
        <p className={expanded ? css.aboutFull : css.aboutShort}>
          {nanny.about}
        </p>

        {/* Actions */}
        {!expanded && (
          <button
            type="button"
            className={css.readMore}
            onClick={() => setExpanded(true)}
          >
            Read more
          </button>
        )}

        {/* Reviews */}

        {expanded && (
          <>
            {/* Reviews */}
            <ul className={css.reviews}>
  {nanny.reviews.map((review, index) => {
    const initial = review.reviewer.charAt(0).toUpperCase()

    return (
      <li key={index} className={css.reviewItem}>
        <div className={css.reviewAvatar}>{initial}</div>

        <div className={css.reviewBlock}>
          <p className={css.reviewer}>
            {review.reviewer} <span className={css.rate}>⭐ {review.rating}</span>
          </p>
          <p className={css.reviewText}>{review.comment}</p>
        </div>
      </li>
    )
  })}
</ul>

            {/* Appointment button */}
            <button
              type="button"
              className={css.appointmentBtn}
              onClick={() => setIsModalOpen(true)}
            >
              Make an appointment
            </button>
          </>
        )}
         {isModalOpen && (
    <AppointmentModal
      nanny={nanny}
      onClose={() => setIsModalOpen(false)}
    />
  )}
      </div>
    </div>
  )
}
