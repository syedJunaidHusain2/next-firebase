"use client";
import { useFormik } from "formik";
import { signUpSchema } from "../components/validation";

const Formik = () => {
  //  we can do like this also -> const Formik = useFormik({
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm()
      },
    });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Your Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p>{errors.confirm_password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formik;
