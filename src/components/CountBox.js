const CountBox = ({ children = "test", bgColor = "black", width }) => {
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
      {children}
    </div>
  );
};

export default CountBox;
