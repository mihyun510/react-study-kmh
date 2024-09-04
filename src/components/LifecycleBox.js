import { useEffect } from "react";

const LifecycleBox = () => {
  useEffect(() => {
    console.log("mounted11");
    return () => {
      console.log("LifecycleBox destory");
    };
  }, []);

  return (
    <div
      style={{
        width: "200px",
        height: "150px",
        backgroundColor: "#000",
      }}
    ></div>
  );
};

export default LifecycleBox;
