"use client"

import { calcAge } from "@/utils/calcAge"
import { useEffect, useState } from "react"
import { Nanny } from "@/types/nannies"
import AppointmentModal from "../AppointmentModal/AppointmentModal"
import css from "./NannyCard.module.css"

import { ref, get, set, remove } from "firebase/database"
import { database } from "@/lib/firebase"
import { useAuth } from "@/context/AuthContext"
import clsx from "clsx"

type Props = {
  nanny: Nanny
}

export default function NannyCard({ nanny }: Props) {
  const { user } = useAuth()

  const [expanded, setExpanded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 🔹 перевіряємо чи ця няня вже в улюблених
  useEffect(() => {
    if (!user) return

    const favRef = ref(
      database,
      `users/${user.uid}/favorites/${nanny.id}`
    )

    get(favRef).then(snapshot => {
      if (snapshot.exists()) {
        setIsFavorite(true)
      }
    })
  }, [user, nanny.id])

  // 🔹 клік по серцю
  const handleToggleFavorite = async () => {
    if (!user) {
      alert("This feature is available only for authorized users")
      return
    }

    const favRef = ref(
      database,
      `users/${user.uid}/favorites/${nanny.id}`
    )

    if (isFavorite) {
      await remove(favRef)
      setIsFavorite(false)
    } else {
      await set(favRef, true)
      setIsFavorite(true)
    }
  }

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
              <span>
                  <svg className={css.mapIcon}>
                <use href="/symbol-defs.svg#icon-map-pin" />
              </svg>
              </span>
              <span>{nanny.location}</span>
              <span className={css.decor}>|</span>
              <span>⭐ {nanny.rating}</span>
              <span className={css.decor}>|</span>
              <span className={css.price}>
                Price/1 hour{" "}
                <span className={css.greenprice}>
                  {nanny.price_per_hour}$
                </span>
              </span>
            </div>

            {/* ❤️ */}
            <button
              className={clsx(css.heartBtn, isFavorite && css.active)}
              aria-label="Add to favorites"
              onClick={handleToggleFavorite}
            >
              <svg className={css.heartIcon}>
                <use href="/symbol-defs.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tags */}
        <ul className={css.tags}>
          <li className={css.tagItem}>
            Age: <span>{calcAge(nanny.birthday)}</span>
          </li>
          <li className={css.tagItem}>
            Experience: <span>{nanny.experience}</span>
          </li>
          <li className={css.tagItem}>
            Kids age: <span>{nanny.kids_age}</span>
          </li>
          <li className={css.tagItem}>
            Characters: <span>{nanny.characters.join(", ")}</span>
          </li>
          <li className={css.tagItem}>
            Education: <span>{nanny.education}</span>
          </li>
        </ul>

        {/* About */}
        <p className={expanded ? css.aboutFull : css.aboutShort}>
          {nanny.about}
        </p>

        {!expanded && (
          <button
            className={css.readMore}
            onClick={() => setExpanded(true)}
          >
            Read more
          </button>
        )}

        {expanded && (
          <>
            {/* Reviews */}
            <ul className={css.reviews}>
              {nanny.reviews.map((review, index) => (
                <li key={index} className={css.reviewItem}>
                  <div className={css.reviewAvatar}>
                    {review.reviewer[0].toUpperCase()}
                  </div>
                  <div>
                    <p>
                      {review.reviewer} ⭐ {review.rating}
                    </p>
                    <p>{review.comment}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
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
