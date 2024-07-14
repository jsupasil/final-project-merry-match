import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
