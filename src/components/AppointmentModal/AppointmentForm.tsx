"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { appointmentSchema } from "@/validation/appointmentSchema"
import { AppointmentFormValues } from "@/types/form"

import FormLayout from "../FormLayout/FormLayout"
import NannyInfo from "../NannyInfo/NannyInfo"
import TextInput from "../TextInput/TextInput"
import Textarea from "../TextInput/Textarea"
import { Controller } from "react-hook-form"
import TimePicker from "../TimePicker/TimePicker"
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
    control,
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
      title={`Make an appointment with a babysitter`}
      text="Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."
      onSubmit={handleSubmit(onSubmit)}
    >
      <NannyInfo nanny={nanny} />

      <div className={css.row}>
        <TextInput placeholder="Address" {...register("address")} />
        <TextInput placeholder="+380" {...register("phone")} />
      </div>

      <div className={css.row}>
        <TextInput
          type="number"
          placeholder="Child age"
          {...register("childAge")}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <TimePicker value={field.value} onChange={field.onChange} />
          )}
        />
      </div>

      <TextInput type="email" placeholder="Email" {...register("email")} />

      <TextInput
        placeholder="Father's or mother's name"
        {...register("parentName")}
      />

      <Textarea placeholder="Comment" {...register("comment")} />

      <SubmitBtn>Send</SubmitBtn>
    </FormLayout>
  )
}
