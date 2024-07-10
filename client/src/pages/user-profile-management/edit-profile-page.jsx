import EditProfileForm from "../../components/user-profile-management/edit-profile-form.jsx";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Footer from "../../components/Footer.jsx";
import NavUser from "./navUser.jsx";
=======
=======
>>>>>>> 557e99d (feat: add upload image, update and delete button)
import Nav from "../../nav.jsx";
>>>>>>> 0617cdb (rebase)

function EditProfilePage() {
  return (
    <>
      <NavUser />
      <section className="bg-main text-black">
        <EditProfileForm />
      </section>
      <Footer />
    </>
=======

function EditProfilePage() {
  return (
    <section className="px-4 py-10">
      <EditProfileForm />
    </section>
<<<<<<< HEAD
>>>>>>> 2b09a65 (rebase)
=======
>>>>>>> 6091c76 (rebase)
<<<<<<< HEAD
>>>>>>> 0617cdb (rebase)
=======
=======
import Nav from "../../nav.jsx";

function EditProfilePage() {
  return (
    <>
      <Nav />
      <section className="px-4 py-10 lg:px-60 lg:pt-20 lg:pb-14">
        <EditProfileForm />
      </section>
    </>
>>>>>>> 2d8e555 (feat: add upload image, update and delete button)
>>>>>>> 557e99d (feat: add upload image, update and delete button)
  );
}

export default EditProfilePage;
