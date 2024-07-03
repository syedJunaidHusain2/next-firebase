import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6)
    .max(12, "Password must be between 6 and 12 characters")
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Target fiel is required"),
  password: Yup.string()
    .min(5, "Min 5 characters")
    .max(10, "Max 10 characters")
    .required("Target Field is required"),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Target fiel is required"),
  password: Yup.string()
    .min(5, "Min 5 characters")
    .max(10, "Max 10 characters")
    .required("Target Field is required"),
    cnfPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

// export const registerSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Please Enter Valid Email")
//       .required("Target fiel is required"),
//     password: Yup.string()
//       .min(5, "Min 5 characters")
//       .max(10, "Max 10 characters")
//       .required("Target Field is required"),
//       cnfPassword: Yup.string()
//       .required("Please confirm your password")
//       .oneOf([Yup.ref("password")], "Passwords must match"),
//   });
  