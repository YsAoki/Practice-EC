import React, { FC, PropsWithChildren } from "react";
import { SColorButton } from "./style";
import { buttonStyles } from "../../../utils/buttonStyle";

type RegularButtonMyProps = React.ComponentPropsWithoutRef<"button">;

type useButtonColor = {
  color: "blue" | "white";
};

const ColorButton: FC<
  RegularButtonMyProps & useButtonColor & PropsWithChildren
> = ({ color, children, ...other }) => {
  const colorMode = buttonStyles[color] || buttonStyles.blue;
  return (
    <SColorButton {...colorMode} {...other}>
      {children}
    </SColorButton>
  );
};

export default ColorButton;
