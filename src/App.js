import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  //jsxk
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>main</button>
        <button onClick={() => navigate("/context")}>context</button>
        <button onClick={() => navigate("/student/1")}>student</button>
      </div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </>
  );
}

export default App;
