import { useFormik } from "formik";
import { InputFieldT } from "../types/FormTypes";
import { loginSchema } from "./validation";

const InputField = ({
  type,
  name,
  placeholder,
  label,
  register,
  error,
  handleChange,
  handleBlur,
}: InputFieldT) => {
  console.log("register", register);

  return (
    <div className="my-2 flex flex-col">
      <label className="py-1 text-md text-black/50 font-mono font-medium">
        {label}
      </label>
      <input
        className="px-3 py-2 text-black border rounded-md border-black/30 placeholder:text-sm text-sm"
        value={register}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        placeholder={placeholder}
        id={`field_${name}`}
      />
      {error && <span className=" text-red-500 py-1">{error}</span>}
    </div>
  );
};

export default InputField;
