import "./App.css";
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
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
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

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/package/add" element={<AddPackagePage/>}/>
        <Route path="/package/view" element={<PackageListPage/>}/>

        {/* <Route path="/page" element={<Page />} /> */}
      </Routes>
      </BrowserRouter>


  </>;
>>>>>>> 933cb57 (feat: add search icon on list package page)
}
export default App;
