import * as Yup from "yup";

export const validateSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Please enter your valid address"),
  options: Yup.string().required('Please select an option'),
  bio: Yup.string().min(50).max(100).required("Please fill the text"),
});