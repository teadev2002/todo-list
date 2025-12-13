import { Route, Routes } from "react-router-dom";
import LoginFirebase from "../login/LoginFirebase";

const LoginLayout = () => (
  <Routes>
    <Route path="/login" element={<LoginFirebase />} />
  </Routes>
);
export default LoginLayout;
