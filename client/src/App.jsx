import "./App.css";
import Nav from "./nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Param } from "react-router-dom";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import MatchingPage from "./components/MatchingPage";
import PackageListPage from "./component/packagelist";
import AddPackagePage from "./component/addpackage";
import EditPackage from "./component/editpackage";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/package/add" element={<AddPackagePage />} />
          <Route path="/package/view" element={<PackageListPage />} />
          <Route path="/package/edit" element={<EditPackage />} />
          <Route path="/landing" element={<LandingPage />} />

          {/* <Route path="/page" element={<Page />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

// import "./App.css";
// import { useAuth } from "./contexts/authentication";
// import AuthenticatedApp from "./pages/AuthenticatedApp";
// import UnauthenticatedApp from "./pages/UnauthenticatedApp";

// function App() {
//   const auth = useAuth();
//   return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
// }

export default App;
