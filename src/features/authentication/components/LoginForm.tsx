import React from 'react'
import { Form, Formik } from 'formik'
import Input from '../../../components/form/Input'
import SubmitBtn from '../../../components/form/SubmitBtn';
import { loginSchema, initialValues } from '../../../schemas/loginValidationSchema';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '../../../services/queryHooks/useLoginQuery';
import { getErrorWithResponse } from '../../../utils/apiError';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const mutation = useLoginMutation();

  const handleSubmit = async (values: any) => {
    try {
      mutation.mutate(values);
    } catch(err) {
      console.log(err);
    }
  };

  const errorWithResponse = getErrorWithResponse(mutation.error);

  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
      {(formikProps) => {
        console.log("is submitting", formikProps.isSubmitting)
        return (
          <Form className="max-w-[350px] flex flex-col gap-3">
            {mutation.isError && (
              <p className="text-error text-center">
                {errorWithResponse
                  ? errorWithResponse?.response?.data?.message
                  : "An error occurred"}
              </p>
            )}
            <Input
              label={t("email")}
              name="email"
              id="email"
              type="email"
              placeholder="ahmed@gamil.com"
            />
            <Input
              label={t("password")}
              name="password"
              id="password"
              type="password"
              placeholder="ahme*2laSlskdk"
            />
            <SubmitBtn disabled={formikProps.isSubmitting} BtnTxt={t("signin")} />
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm