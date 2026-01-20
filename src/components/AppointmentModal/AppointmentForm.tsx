"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { appointmentSchema } from "@/validation/appointmentSchema"
import { AppointmentFormValues } from "@/types/form"

import FormLayout from "../FormLayout/FormLayout"
import TextInput from "../TextInput/TextInput"
import Textarea from "../TextInput/Textarea"
import SubmitBtn from "../SubmitBtn/SubmitBtn"

import { Nanny } from "@/types/nannies"

type Props = {
  nanny: Nanny
  onSuccess: () => void
}

export default function AppointmentForm({ nanny, onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: yupResolver(appointmentSchema),
  })

  const onSubmit = (data: AppointmentFormValues) => {
    console.log("Appointment data:", data)
    alert("Appointment successfully created ✅")
    reset()
    onSuccess()
  }

  return (
    <FormLayout
      title={`Make an appointment with ${nanny.name}`}
      text="Please fill in the form below"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput placeholder="Parent name" {...register("parentName")} />
      <p>{errors.parentName?.message}</p>

      <TextInput type="email" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <TextInput placeholder="Phone" {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <TextInput placeholder="Address" {...register("address")} />

      <TextInput
        type="number"
        placeholder="Child age"
        {...register("childAge")}
      />

      <TextInput type="date" {...register("date")} />

      <Textarea placeholder="Comment" {...register("comment")} />

      <SubmitBtn>Send</SubmitBtn>
    </FormLayout>
  )
}
