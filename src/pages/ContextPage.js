import { useState } from "react";
import CountBox from "../components/CountBox";

const ContextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>increase</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <CountBox width={200} key={index}>
            {count}
          </CountBox>
        ))}
      </div>
    </>
  );
};

export default ContextPage;
