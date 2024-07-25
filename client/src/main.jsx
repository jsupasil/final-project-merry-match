import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import jwtInterceptor from "./utils/jwt-interceptor.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/auth.jsx";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
