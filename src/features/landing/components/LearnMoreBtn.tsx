import React from 'react'
import moreIcon from "../assets/images/more.svg"

const LearnMoreBtn: React.FC = () => {
  return (
    <button className="w-[179px] h-[61px] rounded border border-sky-800 text-sky-800 text-base font-medium capitalize flex items-center justify-evenly">
      <span className="">Learn more</span>
      <span>
        <img src={ moreIcon } alt="more" />
      </span>
    </button>
  );
}

export default LearnMoreBtn