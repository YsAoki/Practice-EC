import { IconColor } from "../types/types"

// iconの色を管理する
export const convertColorCodeForSVG = (propsColor: IconColor) => {
  if(propsColor === "white") {
    return "#fff"
  }
  if(propsColor === "blue") {
    return "#1D7DDD"
  } 
  if(propsColor === "black") {
    return "#404040"
  }
}
