import React, { FC } from "react";
import { IconProps } from "../types/types";
import { convertColorCodeForSVG } from "../utils/iconStyle";

const HumanIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.8 9H10.2781C9.58437 9.31875 8.8125 9.5 8 9.5C7.1875 9.5 6.41875 9.31875 5.72188 9H5.2C2.88125 9 1 10.8813 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.8813 13.1187 9 10.8 9Z"
        fill={convertColorCodeForSVG(color)}
      />
    </svg>
  );
};

export default HumanIcon;
