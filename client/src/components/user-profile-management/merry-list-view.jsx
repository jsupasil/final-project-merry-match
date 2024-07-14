import * as userProfilesTest from "../../assets/test-data/user-profile-data.json";
import merryRedIcon from "../../assets/icons/user-profile-management/merry-list/merry-red-icon.png";
import merryWhiteIcon from "../../assets/icons/user-profile-management/merry-list/merry-white-icon.png";
import merryMatchIcon from "../../assets/icons/user-profile-management/merry-list/merry-match-icon.png";
import locationIcon from "../../assets/icons/user-profile-management/merry-list/location-icon.png";
import chatIcon from "../../assets/icons/user-profile-management/merry-list/chat-icon.png";
import viewIcon from "../../assets/icons/user-profile-management/merry-list/view-icon.png";
import matchIcon from "../../assets/icons/user-profile-management/merry-list/match-icon.png";
import notMatchIcon from "../../assets/icons/user-profile-management/merry-list/not-match-icon.png";

function MerryListView() {
  console.log(userProfilesTest.data);
  return (
    <>
      <section className=" px-4 lg:px-0 py-10 lg:py-0 flex flex-col gap-10 lg:gap-6">
        <article className="">
          <h1 className=" text-sm font-semibold text-beige-700 mb-2">
            PROFILE
          </h1>
          <p className=" text-purple-500 text-[32px] leading-10 font-bold lg:text-[46px] lg:font-extrabold lg:leading-[57.5px] hidden lg:inline-block">
            Let’s know each other with Merry!
          </p>
          <p className=" text-purple-500 text-[32px] leading-10 font-bold lg:text-[46px] lg:font-extrabold lg:leading-[57.5px] lg:hidden">
            Let’s know each other
          </p>
          <p className=" text-purple-500 text-[32px] leading-10 font-bold lg:text-[46px] lg:font-extrabold lg:leading-[57.5px] lg:hidden">
            with Merry!
          </p>
        </article>
        <div>
          <div className=" flex gap-4">
            <div className="  px-6 py-5 bg-white rounded-2xl flex flex-col gap-1 border border-gray-200">
              <div className=" text-red-500 text-2xl leading-[30px] flex gap-1 items-center ">
                <p>{16}</p>
                <img src={merryRedIcon} className=" h-6 " />
              </div>
              <p>Merry to you</p>
            </div>
            <div className="  px-6 py-5 bg-white rounded-2xl flex flex-col gap-1 border border-gray-200">
              <div className=" text-red-500 text-2xl leading-[30px] flex gap-1 items-center">
                <p>{3}</p>
                <img src={merryMatchIcon} className=" h-6" />
              </div>

              <p>Merry to match</p>
            </div>
          </div>
          <div>
            <p className=" text-gray-700">
              Merry limit today
              <span className=" ">{`${2}/${20}`}</span>
            </p>
            <p className=" text-gray-600">Reset in {12}h</p>
          </div>
        </div>
      </section>
      <section>
        {userProfilesTest.data.map((item, index) => (
          <div>
            <p>{item.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default MerryListView;
