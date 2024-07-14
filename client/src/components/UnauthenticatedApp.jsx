import { Routes, Route } from "react-router-dom";

import RegisterPage from "../pages/non-user/register-page";
import "../App.css";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
