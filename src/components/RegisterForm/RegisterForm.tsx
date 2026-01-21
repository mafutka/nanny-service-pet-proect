"use client"

import { useState } from "react"
import FormLayout from "../FormLayout/FormLayout"
import TextInput from "../TextInput/TextInput"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import { useAuth } from "@/context/AuthContext"

type Props = {
  onSuccess?: () => void
}

export default function RegisterForm({ onSuccess }: Props) {
  const { register } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await register(email, password)
      onSuccess?.()
    } catch (err) {
      setError("Registration failed. Try another email.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormLayout
      title="Registration"
      text="Thank you for your interest in our platform! Please provide the following information."
      onSubmit={handleSubmit}
    >
      <TextInput name="email" type="email" placeholder="Email" required />
      <TextInput
        name="password"
        type="password"
        placeholder="Password"
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <SubmitBtn disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </SubmitBtn>
    </FormLayout>
  )
}
