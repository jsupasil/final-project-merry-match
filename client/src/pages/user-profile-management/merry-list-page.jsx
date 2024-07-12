import Nav from "../../nav";
import Footer from "../../components/Footer";
import MerryListView from "../../components/user-profile-management/merry-list-view";

function MerryListPage() {
  return (
    <>
      <Nav />
      <section className=" px-[calc((100vw-375px)*254/649)] lg:px-[254px] lg:pt-20 lg:pb-[147px] min-h-[calc(100vh-397px)] lg:min-h-[calc(100vh-459px)]">
        <MerryListView />
      </section>
      <Footer />
    </>
  );
}

export default MerryListPage;
