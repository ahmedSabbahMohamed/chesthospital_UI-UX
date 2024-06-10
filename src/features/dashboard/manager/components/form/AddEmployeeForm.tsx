import React from "react";
import { Form, Formik } from "formik";
import Input from "../../../../../components/form/Input";
import SelectInput from "../../../../../components/form/SelectInput";
import {
  initialValues,
  validationSchema,
} from "../../../../../schemas/addEmployeeSchema";
import SubmitBtn from "../../../../../components/form/SubmitBtn";
import { useAddEmployee } from "../../services/managerQueries";

const AddEmployeeForm: React.FC = () => {
  const { mutateAsync } = useAddEmployee();

  const roles = [
    { id: 1, name: "ADMIN" },
    { id: 2, name: "EMPLOYEE" },
  ];
  const specializations = [
    { id: 1, name: "DOCTOR" },
    { id: 2, name: "LAB" },
    { id: 3, name: "NURSE" },
    { id: 4, name: "PARMACY" },
    { id: 5, name: "RECEPTIONIST" },
    { id: 6, name: "RADIOLOGIST" },
  ];

  const handleSubmit = async (
    values: typeof initialValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    const employeeRole = roles.find(
      (role) => role.id === parseInt(values.role)
    );
    const employeeSpecialization = specializations.find(
      (specialization) => specialization.id === parseInt(values.specialization)
    );
    const employeeData = {
      ...values,
      role: employeeRole?.name,
      specialization: employeeSpecialization?.name,
    };
    try {
      await mutateAsync(employeeData);
      resetForm();
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-3 items-center justify-center">
          <div className="flex flex-row flex-wrap items-end justify-center gap-2">
            <Input label="ID" name="id" />
            <Input label="Name" name="name" />
            <Input label="Email" name="email" />
            <Input label="Address" name="address" />
            <Input label="Phone" name="phone" />
            <Input label="password" name="password" type="password" />
          </div>
          <div className="flex items-center justify-center flex-wrap flex-row gap-2">
            <div>
              <SelectInput
                options={roles}
                label="Employee Role"
                name="role"
                isMulti={false}
              />
            </div>
            <div>
              <SelectInput
                options={specializations}
                label="Employee Specialization"
                name="specialization"
                isMulti={false}
              />
            </div>
          </div>
          <SubmitBtn
            BtnTxt={isSubmitting ? "Loading..." : "Add Employee"}
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddEmployeeForm;
