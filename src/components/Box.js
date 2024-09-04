const Box = ({ children = "test", bgColor = "black" }) => {
  const colorMap = {
    red: "#f00",
    black: "#000",
  };

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: colorMap[bgColor],
        color: "#fff",
        display: "flex",
        gap: "5px",
      }}
    >
      {children}
    </div>
  );
};

export default Box;

export const SmallBox = ({ children = "test" }) => {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: "#00f",
      }}
    >
      {children}
    </div>
  );
};
