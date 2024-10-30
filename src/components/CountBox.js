import { useContext } from "react";
import { CountContext } from "../pages/ContextPage";

const CountBox = ({ bgColor = "black", width, handleClick }) => {
  const colorMap = {
    red: "#f00",
    black: "#000",
  };

  return (
    <div
      style={{
        height: "150px",
        width: `${width}px`,
        backgroundColor: colorMap[bgColor],
        color: "#fff",
        display: "flex",
        gap: "5px",
      }}
    >
      <CountInnerBox handleClick={handleClick} />
    </div>
  );
};

export default CountBox;

const CountInnerBox = ({ handleClick }) => {
  const context = useContext(CountContext);
  console.log(context);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={context.onClick}>increase</button>
      {context.count}
    </div>
  );
};
