import Nav from "../../nav";
import Footer from "../../components/Footer";
import MerryListView from "../../components/user-profile-management/merry-list-view";

function MerryListPage() {
  return (
    <>
      <Nav />
      <section className=" px-0 md:px-[64px] lg:px-[254px] lg:pt-20 lg:pb-[147px] min-h-[calc(100vh-397px)] lg:min-h-[calc(100vh-459px)] bg-main">
        <MerryListView />
      </section>
      <Footer />
    </>
  );
}

export default MerryListPage;
