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

import css from "../FormLayout/FormLayout.module.css"

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
      title={`Make an appointment with a babysitter ${nanny.name}`}
      text="Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={css.row}>
        <TextInput placeholder="Address" {...register("address")} />

        <TextInput placeholder="+380" {...register("phone")} />
        <p>{errors.phone?.message}</p>
      </div>

      <div className={css.row}>
        <TextInput
          type="number"
          placeholder="Child age"
          {...register("childAge")}
        />

        <TextInput type="00:00" {...register("date")} />
      </div>
      <TextInput type="email" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <TextInput
        placeholder="Father's or mother's name"
        {...register("parentName")}
      />
      <p>{errors.parentName?.message}</p>

      <Textarea placeholder="Comment" {...register("comment")} />

      <SubmitBtn>Send</SubmitBtn>
    </FormLayout>
  )
}
