"use client"

import { useEffect, useState } from "react"
import { ref, get } from "firebase/database"
import { database } from "@/lib/firebase"
import { useAuth } from "@/context/AuthContext"
import NanniesList from "@/components/NanniesList/NanniesList"
import { Nanny } from "@/types/nannies"

export default function FavoritesPage() {
  const { user, loading } = useAuth()
  const [favorites, setFavorites] = useState<Nanny[]>([])

  useEffect(() => {
    if (!user) return

    const fetchFavorites = async () => {
      const favRef = ref(database, `users/${user.uid}/favorites`)
      const snapshot = await get(favRef)

      if (!snapshot.exists()) return

      const favIds = Object.keys(snapshot.val())

      const nanniesSnap = await get(ref(database, "nannies"))
      const nanniesData = nanniesSnap.val()

      const result = favIds.map(id => ({
        id,
        ...nanniesData[id],
      }))

      setFavorites(result)
    }

    fetchFavorites()
  }, [user])

  if (loading) return <p>Loading...</p>
  if (!user) return <p>Please log in</p>

  return <NanniesList nannies={favorites} />
}
