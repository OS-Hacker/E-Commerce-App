import * as Yup from "yup";

export const Validation = Yup.object({
  name: Yup.string().min(3).max(20).required("Please Enter your Name"),
  email: Yup.string().email().required("Please Enter your Email"),
  password: Yup.string().required('Please Enter your password'),
  massage: Yup.string().required("Massage is required")
})
