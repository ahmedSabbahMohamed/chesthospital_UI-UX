type NotFoundPatientProps = {
  message: string | undefined;
};

type PatientDataProps = {
  id: string;
  name: string;
  phone: string;
};

type PatientValues = {
  name: string;
  id: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  address: string;
};

export type { NotFoundPatientProps, PatientDataProps, PatientValues };
