import React, { FC } from "react";
import Hierarchy from "../../../icons/HierarchyIcon";
import { SSeeMoreButton, SSpan } from "./style";

const SeeMoreButton: FC = ({ ...other }) => {
  return (
    <SSeeMoreButton {...other}>
      もっと見る
      <SSpan>
        <Hierarchy color="blue" />
      </SSpan>
    </SSeeMoreButton>
  );
};

export default SeeMoreButton;
