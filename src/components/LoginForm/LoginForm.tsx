"use client"

import { useState } from "react"
import FormLayout from "../FormLayout/FormLayout"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import TextInput from "../TextInput/TextInput"
import { useAuth } from "@/context/AuthContext"

type Props = {
  onSuccess?: () => void
}

export default function LoginForm({ onSuccess }: Props) {
  const { login } = useAuth()
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
      await login(email, password)
      onSuccess?.()
    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormLayout
      title="Log in"
      text="Welcome back! Please enter your credentials to access your account."
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
        {loading ? "Logging in..." : "Log in"}
      </SubmitBtn>
    </FormLayout>
  )
}
