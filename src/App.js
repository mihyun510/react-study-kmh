import { Outlet, useNavigate } from "react-router-dom";
import ConfirmDialog from "./components/Confirm";
import { DialogProvider } from "./providers/DialogProvider";
function App() {
  const navigate = useNavigate();
  //jsxk
  return (
    <DialogProvider>
      <div>
        <button onClick={() => navigate("/")}>main</button>
        <button onClick={() => navigate("/context")}>context</button>
        <button onClick={() => navigate("/student/1")}>student</button>
      </div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
      <ConfirmDialog />
    </DialogProvider>
  );
}

export default App;
