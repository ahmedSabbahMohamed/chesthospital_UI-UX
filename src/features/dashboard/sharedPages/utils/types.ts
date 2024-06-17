type ErrorProps = {
  message: string;
};

type TableProps = {
  headers: string[];
  children: React.ReactNode;
};

type MedicineRequestRowProps = {
  request: any;
  medicinesList: any;
  index: number;
  onDelete: (id: string) => void;
};

type RadiologyRequestRowProps = {
  index: number;
  request: any;
  onDelete: (id: string) => void;
};

type LabRequestRowProps = {
  index: number;
  request: any;
  onDelete: (id: string) => void;
};

export type {
  ErrorProps,
  TableProps,
  MedicineRequestRowProps,
  RadiologyRequestRowProps,
  LabRequestRowProps,
};
