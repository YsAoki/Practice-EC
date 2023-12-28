import React, { FC } from "react";
import { LinkProps } from "react-router-dom";
import Hierarchy from "../../../icons/Hierarchy";
import { SSeeMoreLink, SSpan } from "./style";

const SeeMoreLink: FC<LinkProps> = ({ ...other }) => {
  return (
    <SSeeMoreLink {...other}>
      もっと見る
      <SSpan>
        <Hierarchy color="blue" />
      </SSpan>
    </SSeeMoreLink>
  );
};

export default SeeMoreLink;
