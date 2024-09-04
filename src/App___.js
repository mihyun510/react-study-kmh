import "./App.css";
import Box, { SmallBox } from "./components/Box";
import LifecycleBox from "./components/LifecycleBox";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((current) => current + 1);
  };

  useEffect(() => {
    console.log("mounted");
  }, []);
  useEffect(() => {
    console.log("updated");
  }, [count]);
  //jsxk
  return (
    <>
      <button onClick={handleCount}>increment {count}</button>
      {[1, 3, 5, 7].includes(count) && <LifecycleBox />}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Box bgColor="red" />
        <Box>
          222
          <SmallBox>333</SmallBox>
          <SmallBox />
          <SmallBox />
        </Box>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </>
  );
}

export default App;
