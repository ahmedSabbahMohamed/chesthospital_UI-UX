import React from "react";
import { Form, useFormikContext } from "formik";
import { SearchMedicine } from "../../utils/types";
import Input from "../../../../../components/form/Input";
import SubmitBtn from "../../../../../components/form/SubmitBtn";

interface MedicineFormProps {
  isSubmitting: boolean;
  isLoading: boolean;
}

const MedicineForm: React.FC<MedicineFormProps> = ({
  isSubmitting,
  isLoading,
}) => {
  const { handleChange } = useFormikContext<SearchMedicine>();

  return (
    <Form className="flex flex-col items-center justify-center gap-2">
      <Input label="Medicine Name" name="medicine" onChange={handleChange} />
      <SubmitBtn BtnTxt="Search" disabled={isSubmitting || isLoading} />
    </Form>
  );
};

export default MedicineForm;
