import * as yup from "yup"

export const appointmentSchema = yup.object({
  parentName: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  phone: yup.string().required("Required"),
  address: yup.string().required("Required"),
  childAge: yup.number().positive().required("Required"),
  date: yup.string().required("Required"),
  comment: yup.string().required("Required"),
})
