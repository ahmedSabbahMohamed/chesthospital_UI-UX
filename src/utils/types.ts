type DoctorCardProps = {
  img: any;
  docName: string;
  docSpeciality: string;
};

type doc = {
    id: number;
    img: string;
    name: string;
    speciality: string;
}

type TitleProps = {
    firstHalf: string;
    secondHalf: string;
}

type ServiceCardProps = {
  img: string;
  title: string;
  desc: string;
}

export type { DoctorCardProps, doc, TitleProps, ServiceCardProps }
