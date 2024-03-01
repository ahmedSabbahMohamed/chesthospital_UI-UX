import React from 'react'
import { TitleProps } from '../../../utils/types';

const Title: React.FC<TitleProps> = ( { firstHalf, secondHalf}) => {
  return (
    <h2 className="text-center text-3xl font-semibold py-12 mt-10">
      <span className="text-slate-800 mr-1">{firstHalf}</span>
      <span className="text-primary">{secondHalf}</span>
    </h2>
  );
}

export default Title