
type ListItem = {
  id: string;
  label: string;
};
// 静的な値を設定するために使用。
// idとラベルを用意した配列を渡す。
// ラベルは表示するためだけのものなので、変更する値として扱わない。
export const createBoolArray = (items: ListItem[]): { [id: string]: boolean } => {
  const createVal =  items.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {} as { [id: string]: boolean });
  return createVal;
};

// 配列から、trueの値を持っているkey名を抽出、配列として返す
export const extractHaveTrue = (items: { [id: string]: boolean }) => {
  const extractVal = Object.keys(items).filter(key => items[key]);
  return extractVal;
};