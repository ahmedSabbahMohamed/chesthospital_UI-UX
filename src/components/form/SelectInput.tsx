import React, { useMemo } from "react";
import { useFormikContext } from "formik";
import ReactSelect, { MultiValue, SingleValue } from "react-select";
import { SelectInputProps } from "../../utils/types";

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  isMulti = true,
}) => {
  const { values, setFieldValue } = useFormikContext<Record<string, any>>();

  const finalOptions = useMemo(() => {
    return options.map((option) => ({
      label: option.name,
      value: option.id,
    }));
  }, [options]);

  const handleChange = (
    selectedOption:
      | MultiValue<{ label: string; value: string | number }>
      | SingleValue<{ label: string; value: string | number }>
  ) => {
    if (isMulti) {
      setFieldValue(
        name,
        (
          selectedOption as MultiValue<{
            label: string;
            value: string | number;
          }>
        ).map((opt) => opt.value)
      );
    } else {
      setFieldValue(
        name,
        (
          selectedOption as SingleValue<{
            label: string;
            value: string | number;
          }>
        )?.value
      );
    }
  };

  const selectedValue = useMemo(() => {
    if (isMulti) {
      return finalOptions.filter((option) =>
        (values[name] || []).includes(option.value)
      );
    } else {
      return (
        finalOptions.find((option) => option.value === values[name]) || null
      );
    }
  }, [finalOptions, values, name, isMulti]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-xs">
        <label htmlFor={name} className={`block mb-2 ${"text-semiDark"}`}>
          {label}
        </label>
        <ReactSelect
          className="w-full max-w-xs"
          options={finalOptions}
          name={name}
          onChange={handleChange}
          isMulti={isMulti}
          isClearable
          isSearchable
          value={selectedValue}
        />
      </div>
    </div>
  );
};

export default SelectInput;
