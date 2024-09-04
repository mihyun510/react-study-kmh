import { Outlet, useNavigate } from "react-router-dom";

const StudentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>title</h1>
      <div>
        <button onClick={() => navigate("1")}>1</button>
        <button onClick={() => navigate("2")}>2</button>
        <button onClick={() => navigate("3")}>3</button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default StudentPage;
