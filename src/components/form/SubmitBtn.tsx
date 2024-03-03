import React from 'react'
import { SubmitBtnProps } from '../../utils/types';

const SubmitBtn: React.FC<SubmitBtnProps> = ({ BtnTxt, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="block btn bg-primary text-white w-full max-w-xs"
    >
      { BtnTxt }
    </button>
  );
}

export default SubmitBtn