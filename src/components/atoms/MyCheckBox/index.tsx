import React from "react";
import { SCheckBoxWrapper, SCheckBoxLabel, SCheckBoxInput } from "./style";

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyCheckBox: React.FC<Props> = ({ id, label, checked, onChange }) => {
  return (
    <SCheckBoxWrapper>
      <SCheckBoxInput id={id} checked={checked} onChange={onChange} />
      <SCheckBoxLabel htmlFor={id} />
      {label}
    </SCheckBoxWrapper>
  );
};

export default MyCheckBox;
