import { FC } from "react";
import RegularInput from "../../atoms/RegularInput";
import HumanIcon from "../../../icons/HumanIcon";

const TopLayout: FC = () => {
  return (
    <>
      <p>コンポーネント製作中</p>
      <RegularInput />
      <RegularInput icon={<HumanIcon color="blue"/>}/>
    </>
  );
};

export default TopLayout;
