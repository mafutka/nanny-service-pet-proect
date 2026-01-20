import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { appointmentSchema } from "@/validation/appointmentSchema"

export type AppointmentFormValues = {
  parentName: string
  email: string
  phone: string
  address: string
  childAge: number
  date: string
  comment: string
}

export default function AppointmentForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  })

  const onSubmit = (data: AppointmentFormValues) => {
    console.log("Appointment data:", data)

    alert("Appointment successfully created ✅")

    reset()
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("parentName")} placeholder="Parent name" />
      <p>{errors.parentName?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input {...register("phone")} placeholder="Phone" />
      <p>{errors.phone?.message}</p>

      <input {...register("address")} placeholder="Address" />

      <input type="number" {...register("childAge")} placeholder="Child age" />

      <input type="date" {...register("date")} />

      <textarea {...register("comment")} placeholder="Comment" />

      <button type="submit">Send</button>
    </form>
  )
}
