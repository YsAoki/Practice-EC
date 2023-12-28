export type IconColor = "blue" | "white" | "black";

export type IconProps = {
  color: IconColor;
};

export type TagProps = {
  tag?: keyof JSX.IntrinsicElements;
}

