import { createContext, useState } from "react";
import CountBox from "../components/CountBox";

export const CountContext = createContext(null);

const ContextPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <CountContext.Provider value={{ count, onClick: handleClick }}>
        <button onClick={() => setCount((count) => count + 1)}>increase</button>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <CountBox width={200} key={index} handleClick={handleClick} />
          ))}
        </div>
      </CountContext.Provider>
    </>
  );
};

export default ContextPage;
