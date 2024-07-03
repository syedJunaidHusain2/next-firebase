"use client";
import Link from "next/link";
import { LOGIN_ROUTE } from "../constants/routes";
import InputField from "../components/InputFiled";
import SubmitButton from "../components/Button";
import { useFormik } from "formik";
import { registerSchema } from "../components/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const notify = () => toast("Successfully Registered");

  useEffect(() => {
    // useEffect to handle side effects like delayed navigation, ensuring the effect is only triggered when necessary and properly cleaned up if the component unmounts.
    if (isRegistered) {
      const timer = setTimeout(() => {
        router.push(LOGIN_ROUTE);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered, router]);

  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      cnfPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      action.resetForm();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          notify();
          setIsRegistered(true);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Registration Failed");
        });
    },
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <Toaster />
      <div className="w-1/2 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-center">
          <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">
            Welcome To Register
          </span>
        </div>
        <form onSubmit={handleSubmit} className="h-full w-1/2 mx-auto ">
          <InputField
            register={values.email}
            error={errors.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            type="text"
            placeholder="Enter Your Email Here..."
            name="email"
            label="Email"
          />
          <InputField
            register={values.password}
            error={errors.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            type="password"
            placeholder="Enter Your Password Here..."
            name="password"
            label="Password"
          />
          <InputField
            register={values.cnfPassword}
            error={errors.cnfPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
            type="password"
            placeholder="Enter Your Confirm Password Here..."
            name="cnfPassword"
            label="Confirm Password"
          />
          <SubmitButton label="Submit" />
        </form>
        <div className="h-20 mx-auto">
          <span className="text-sm text-gray-600">
            Already have an account?
            <Link href={LOGIN_ROUTE}>
              <span className="text-blue-500 font-semibold text-md">
                Login Here
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
