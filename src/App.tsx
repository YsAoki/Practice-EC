import "reset-css";
import "./style.css";
import { FC } from "react";
import ReactRouter from "./pages/ReactRouter";

const App: FC = () => {
  return (
    <>
      {/* header入れる */}
      <ReactRouter />
      {/* footer入れる */}
    </>
  );
};

export default App;
