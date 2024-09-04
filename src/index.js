import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContextPage from "./pages/ContextPage";
import StudentPage from "./pages/StudentPage";
import MainPage from "./pages/MainPage";
import StudentTab1 from "./pages/StudentTab1";
import StudentTab2 from "./pages/StudentTab2";
import StudentTab3 from "./pages/StudentTab3";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="context" element={<ContextPage />} />
      <Route path="student" element={<StudentPage />}>
        <Route path="1" element={<StudentTab1 />} />
        <Route path="2" element={<StudentTab2 />} />
        <Route path="3" element={<StudentTab3 />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
