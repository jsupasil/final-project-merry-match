import RegisterForm from "../../components/non-user/register-form";
<<<<<<< HEAD
import Nav from "./nav";
=======
import Nav from "../../nav";
>>>>>>> be63780 (feat, style: partial complete register css page)

function RegisterPage() {
  return (
    <>
      <Nav />
<<<<<<< HEAD
      <section className=" bg-main relative pt-[100px] overflow-x-hidden">
=======
      <section className=" bg-main relative">
>>>>>>> be63780 (feat, style: partial complete register css page)
        <RegisterForm />
        <div className=" w-[100px] h-[100px] rounded-full absolute top-[85px] left-[-19px] bg-beige-100 max-lg:hidden"></div>
        <div className=" w-[59px] h-[59px] rounded-full absolute top-[605px] right-[-14px] bg-beige-100 max-lg:hidden"></div>
      </section>
    </>
  );
}

export default RegisterPage;
