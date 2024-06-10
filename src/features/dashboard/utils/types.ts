type idProps = {
  id: string;
};

type SearchPatientFormProps = {
  handleSubmit: any;
  label: string;
  BtnTxt: string;
  disabled: boolean;
};

type MedicalRecordProps = {
  patientName: string;
  reports: [];
  labs: [];
  radiologies: [];
};

type ModalProps = {
  openButton: string;
  styles: string;
  children: React.ReactNode;
  id: string;
  heading: string;
};

type SidebarProps = {
  dir: string;
  sidebarContent: React.ReactNode;
  place?: string;
  logoutText?: string;
};

export type {
  idProps,
  SearchPatientFormProps,
  MedicalRecordProps,
  ModalProps,
  SidebarProps,
};
