import { Form, Formik, FormikHelpers } from "formik";
import Input from "../../../components/form/Input";
import SubmitBtn from "../../../components/form/SubmitBtn";
import {
  loginSchema,
  initialValues,
} from "../../../schemas/loginValidationSchema";
import { useTranslation } from "react-i18next";
import { useLoginMutation } from "../../../services/queryHooks/useLoginQuery";
import { getErrorWithResponse } from "../../../utils/apiError";
import { useState } from "react";
import Loading from "../../../components/ui/Loading";
import { LoginFormValues } from "../../../utils/types";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  const loginMutation = useLoginMutation();
  const errorWithResponse = getErrorWithResponse(loginMutation.error);

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    setLoading(true);
    try {
      await loginMutation.mutateAsync(values);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-[350px] flex flex-col gap-3">
            {loginMutation.isError && (
              <p className="text-error text-center">
                {errorWithResponse
                  ? errorWithResponse?.response?.data?.message
                  : t("An error occurred")}
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
            <SubmitBtn
              disabled={isSubmitting || loading}
              BtnTxt={t("signin")}
            />
          </Form>
        )}
      </Formik>
      {loading && (
        <div className="w-full h-full bg-[#a2a2a2a3] grid place-items-center fixed z-[999999] top-0 left-0">
          <Loading />
        </div>
      )}
    </>
  );
};

export default LoginForm;
