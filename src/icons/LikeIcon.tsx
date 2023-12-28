import React, { FC } from "react";
import { IconProps } from "../types/types";
import { convertColorCodeForSVG } from "../utils/iconStyle";

const LikeIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M12.5344 1.75831C10.9539 0.429408 8.51211 0.629017 7 2.16847C5.48789 0.629017 3.0461 0.426673 1.46563 1.75831C-0.590622 3.48917 -0.289841 6.31105 1.17578 7.80675L5.97188 12.6931C6.24532 12.972 6.61172 13.1278 7 13.1278C7.39102 13.1278 7.75469 12.9747 8.02813 12.6958L12.8242 7.80949C14.2871 6.31378 14.5934 3.49191 12.5344 1.75831ZM11.8891 6.88527L7.09297 11.7716C7.02735 11.8372 6.97266 11.8372 6.90703 11.7716L2.11094 6.88527C1.11289 5.86808 0.91055 3.94308 2.31055 2.76456C3.37422 1.87042 5.01485 2.00441 6.04297 3.05167L7 4.02785L7.95703 3.05167C8.99063 1.99894 10.6313 1.87042 11.6895 2.76183C13.0867 3.94035 12.8789 5.87628 11.8891 6.88527Z"
        fill={convertColorCodeForSVG(color)}
      />
    </svg>
  );
};

export default LikeIcon;
