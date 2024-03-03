import React from "react";
import { useFormikContext } from "formik";
import { InputProps } from "../../utils/types";

const Input: React.FC<InputProps> = ({ name, label, type, ...rest }) => {
  const { errors, touched, setFieldValue, setFieldTouched } = useFormikContext<any>();

  const hasError = errors[name] && touched[name];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const handleBlur = () => {
    setFieldTouched(name);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className={`block mb-2 text-semiDark ${hasError ? "text-red-400" : ""}`}
      >
        {hasError ? errors[name]?.toString() : label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`input input-bordered w-full max-w-xs ${hasError ? "input-error" : ""}`}
      />
    </div>
  );
};

export default Input;
