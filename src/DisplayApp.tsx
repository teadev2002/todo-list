import { Route, Routes } from "react-router-dom";
import LoginFirebase from "./login/LoginFirebase";
import MainLayout from "./LayoutApp/MainLayout";

const DisplayApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginFirebase />} />

      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
};
export default DisplayApp;
