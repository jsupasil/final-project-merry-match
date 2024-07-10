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

import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  
} from "react-router-dom";
>>>>>>> 33f7ac3 (feat: add feature in admin page)
>>>>>>> 84ae46f (feat: add feature in admin page)
import PackageListPage from "./component/packagelist";
import AddPackagePage from "./component/addpackage";
import EditPackage from "./component/editpackage";
import EditProfilePage from "./pages/user-profile-management/edit-profile-page.jsx";
import RegisterPage from "./pages/non-user/register-page.jsx";
import NavUser from "./pages/user-profile-management/navUser.jsx";
import HomeUserLogin from "./pages/user-profile-management/home-login.jsx";
=======
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

function App() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 33f7ac3 (feat: add feature in admin page)
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 84ae46f (feat: add feature in admin page)
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
        </Routes>
      </BrowserRouter>
    </>
  );
=======
  return <>
=======
          <Route path="/" element={<Nav />} />
          <Route path="/package/add" element={<AddPackagePage />} />
          <Route path="/package/view" element={<PackageListPage />} />
          <Route path="/package/edit" element={<EditPackage />} />
>>>>>>> 33f7ac3 (feat: add feature in admin page)

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
export default App;
