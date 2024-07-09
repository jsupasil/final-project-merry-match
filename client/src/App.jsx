import "./App.css";
<<<<<<< HEAD
import LandingPage from "./components/landing-page.jsx";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8a123ae (rebase dev)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import MatchingPage from "./components/MatchingPage";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import Nav from "./nav";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  
} from "react-router-dom";
>>>>>>> 33f7ac3 (feat: add feature in admin page)
<<<<<<< HEAD
>>>>>>> 84ae46f (feat: add feature in admin page)
=======
=======
=======
>>>>>>> 6cc152f (feat create ui login,footer,matching page)
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import MatchingPage from "./components/MatchingPage";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
>>>>>>> 6069247 (feat create ui login,footer,matching page)
>>>>>>> 872bcbc (feat create ui login,footer,matching page)
import PackageListPage from "./component/packagelist";
import AddPackagePage from "./component/addpackage";
import EditPackage from "./component/editpackage";
import EditProfilePage from "./pages/user-profile-management/edit-profile-page.jsx";
<<<<<<< HEAD
import RegisterPage from "./pages/non-user/register-page.jsx";
import NavUser from "./pages/user-profile-management/navUser.jsx";
import HomeUserLogin from "./pages/user-profile-management/home-login.jsx";
=======
<<<<<<< HEAD
=======
>>>>>>> 8a123ae (rebase dev)
import PackageListPage from "./component/packagelist";
import AddPackagePage from "./component/addpackage";
<<<<<<< HEAD
>>>>>>> 6e1b356 (feat: create admin page about list package)
=======
import EditPackage from "./component/editpackage";
import EditProfilePage from "./pages/user-profile-management/edit-profile-page.jsx";
import RegisterPage from "./pages/non-user/register-page.jsx";
import NavUser from "./pages/user-profile-management/navUser.jsx";
import HomeUserLogin from "./pages/user-profile-management/home-login.jsx";
>>>>>>> 8a123ae (rebase dev)
=======
>>>>>>> 16e62b6 (rebase)
>>>>>>> 2b09a65 (rebase)

function App() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 33f7ac3 (feat: add feature in admin page)
=======

function App() {
>>>>>>> 6cc152f (feat create ui login,footer,matching page)
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 84ae46f (feat: add feature in admin page)
=======
>>>>>>> 14f909b (feat create ui login,footer,matching page)
          <Route path="/" element={<LandingPage />} />
          <Route path="/package/add" element={<AddPackagePage />} />
          <Route path="/package/view" element={<PackageListPage />} />
          <Route path="/package/edit/:package_id" element={<EditPackage />} />
          <Route path="/user/:userId/edit" element={<EditProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page" element={<NavUser />} />
          <Route path="/home-login" element={<HomeUserLogin />} />
=======
          <Route path="/" element={<Nav />} />
<<<<<<< HEAD
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/package/add" element={<AddPackagePage />} />
          <Route path="/package/view" element={<PackageListPage />} />
          {/* <Route path="/page" element={<Page />} /> */}
>>>>>>> 6e1b356 (feat: create admin page about list package)
=======
          <Route path="/" element={<LandingPage />} />
          <Route path="/package/add" element={<AddPackagePage />} />
          <Route path="/package/view" element={<PackageListPage />} />
          <Route path="/package/edit/:package_id" element={<EditPackage />} />
          <Route path="/user/:userId/edit" element={<EditProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page" element={<NavUser />} />
          <Route path="/home-login" element={<HomeUserLogin />} />
>>>>>>> 8a123ae (rebase dev)
=======

          {/* <Route path="/page" element={<Page />} /> */}
          <MatchingPage />
>>>>>>> 6cc152f (feat create ui login,footer,matching page)
>>>>>>> 14f909b (feat create ui login,footer,matching page)
        </Routes>
      </BrowserRouter>
=======
      <MatchingPage />
>>>>>>> 0ccb2dd (feat: crud admin at app.mjs)
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return <>
=======
          <Route path="/" element={<Nav />} />
          <Route path="/package/add" element={<AddPackagePage />} />
          <Route path="/package/view" element={<PackageListPage />} />
          <Route path="/package/edit" element={<EditPackage />} />
<<<<<<< HEAD
>>>>>>> 33f7ac3 (feat: add feature in admin page)
=======
          <Route path="/user/:userId/edit" element={<EditProfilePage />} />
>>>>>>> 16e62b6 (rebase)
=======
import EditProfilePage from "./pages/user-profile-management/edit-profile-page.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/user/:userId/edit" element={<EditProfilePage />} />

          {/* <Route path="/page" element={<Page />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
>>>>>>> 6091c76 (rebase)

          {/* <Route path="/page" element={<Page />} /> */}
        </Routes>
      </BrowserRouter>
<<<<<<< HEAD


  </>;
>>>>>>> 933cb57 (feat: add search icon on list package page)
=======
    </>
  );
>>>>>>> 33f7ac3 (feat: add feature in admin page)
}
<<<<<<< HEAD
<<<<<<< HEAD
export default App;
=======
}
>>>>>>> 6069247 (feat create ui login,footer,matching page)
=======

<<<<<<< HEAD
export default App
>>>>>>> c570cdf (feat: crud admin at app.mjs)
=======
}
>>>>>>> 6cc152f (feat create ui login,footer,matching page)
=======

export default App
>>>>>>> 0ccb2dd (feat: crud admin at app.mjs)
=======
export default App;
>>>>>>> 16e62b6 (rebase)
