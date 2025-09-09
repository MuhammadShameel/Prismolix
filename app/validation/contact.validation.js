
import { yupResolver } from "@hookform/resolvers/yup";

export const contactSchema = yupResolver.object().shape({
    fullname: yup.string().required("Your name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    country: yup.string().required("Country is required"),
    number: yup
        .string()
        .matches(/^[0-9]+$/, "Only digits allowed")
        .required("Contact number is required"),
    enquiry: yup.string(),
});
