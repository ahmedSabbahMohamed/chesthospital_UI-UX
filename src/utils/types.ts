import React from "react";

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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

type SubmitBtnProps = {
  BtnTxt: string;
  disabled: boolean;
}

type FormContainerProps = {
  children: React.ReactNode
}

export type { DoctorCardProps, doc, TitleProps, ServiceCardProps, InputProps, SubmitBtnProps, FormContainerProps }
