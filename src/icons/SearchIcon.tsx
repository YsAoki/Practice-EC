import { FC } from "react";
import { convertColorCodeForSVG } from "../utils/iconStyle";
import { IconProps } from "../types/types";

const SearchIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clip-path="url(#clip0_527_2855)">
        <path
          d="M15.7812 13.8344L12.6656 10.7187C12.525 10.5781 12.3344 10.5 12.1344 10.5H11.625C12.4875 9.39687 13 8.00937 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.00937 13 9.39687 12.4875 10.5 11.625V12.1344C10.5 12.3344 10.5781 12.525 10.7187 12.6656L13.8344 15.7812C14.1281 16.075 14.6031 16.075 14.8937 15.7812L15.7781 14.8969C16.0719 14.6031 16.0719 14.1281 15.7812 13.8344ZM6.5 10.5C4.29062 10.5 2.5 8.7125 2.5 6.5C2.5 4.29062 4.2875 2.5 6.5 2.5C8.70937 2.5 10.5 4.2875 10.5 6.5C10.5 8.70937 8.7125 10.5 6.5 10.5Z"
          fill={convertColorCodeForSVG(color)}
        />
      </g>
      <defs>
        <clipPath id="clip0_527_2855">
          <rect width="16" height="16" fill={convertColorCodeForSVG(color)} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
