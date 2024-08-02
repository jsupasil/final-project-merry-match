import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import DislikeButton from "../../assets/images/dislikebutton.png";
import LikeButton from "../../assets/images/likebutton.png";
import richard from "../../assets/images/richard.jpg";
import erlich from "../../assets/images/erlich.jpg";
import monica from "../../assets/images/monica.jpg";
import jared from "../../assets/images/jared.jpg";
import dinesh from "../../assets/images/dinesh.jpg";
import arrowleft from "../../assets/images/arrowleft.png";
import arrowright from "../../assets/images/arrowright.png";
import location from "../../assets/images/location.png";
import filter from "../../assets/images/filter.png";
import SeeProfile from "./seeprofile";
import RangeSlider from "./rangeslider";

const db = [
  { name: "Richard Hendricks", url: richard },
  { name: "Erlich Bachman", url: erlich },
  { name: "Monica Hall", url: monica },
  { name: "Jared Dunn", url: jared },
  { name: "Dinesh Chugtai", url: dinesh },
];

function Cardtinder() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = (direction, nameToDelete, index) => {
    console.log(`You swiped: ${direction}`);
    setCurrentIndex(index - 1);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(`${myIdentifier} left the screen`);
  };

  const canSwipe = currentIndex >= 0 && currentIndex < db.length;

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = () => {
    if (currentIndex < db.length - 1) {
      const newIndex = currentIndex + 1;
      updateCurrentIndex(newIndex);
    }
  };

  const goForward = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      updateCurrentIndex(newIndex);
    }
  };

  return (
    <section>
      {/* Mobile and iPad view */}
      <div className="flex flex-col items-center">
        <div className="lg:hidden">
          {currentIndex >= 0 && (
            <TinderCard
              ref={childRefs[currentIndex]}
              className="swipe"
              key={db[currentIndex].name}
              onSwipe={(dir) =>
                swiped(dir, db[currentIndex].name, currentIndex)
              }
              onCardLeftScreen={() => onCardLeftScreen(db[currentIndex].name)}
            >
              <div
                style={{ backgroundImage: `url(${db[currentIndex].url})` }}
                className="card bg-cover bg-center mt-[10%] w-screen h-screen rounded-3xl shadow-lg"
              >
                <div className="h-full w-full absolute bg-gradient-to-t from-purple-800 to-transparent opacity-70 rounded-b-3xl z-2"></div>
                <div className="w-full h-full flex justify-center mb-10 p-4 z-40">
                  <div className="w-[90%] h-full flex flex-row items-end justify-between">
                    <div className="text-white w-full flex items-center justify-between">
                      <div className="">
                        <h1 className="text-[25px]">
                          {db[currentIndex].name} 24
                        </h1>
                        <p className="flex flex-row text-[20px]">
                          <img
                            src={location}
                            className="mt-2 mr-2 w-[15px] h-[20px]"
                            alt="Location icon"
                          />
                          Bangkok, Thailand
                        </p>
                      </div>
                      <SeeProfile />
                    </div>
                  </div>
                </div>
              </div>
            </TinderCard>
          )}
        </div>

        {/* Desktop view */}
        <div className="cardContainer flex justify-center max-lg:hidden z-[0]">
          {currentIndex >= 0 && (
            <TinderCard
              ref={childRefs[currentIndex]}
              className="swipe"
              key={db[currentIndex].name}
              onSwipe={(dir) =>
                swiped(dir, db[currentIndex].name, currentIndex)
              }
              onCardLeftScreen={() => onCardLeftScreen(db[currentIndex].name)}
            >
              <div className="h-full w-full absolute bg-gradient-to-t from-purple-800 to-transparent opacity-80 rounded-b-3xl z-20"></div>
              <div
                style={{ backgroundImage: `url(${db[currentIndex].url})` }}
                className="bg-cover mt-[15%] w-[580px] h-[580px] rounded-3xl relative"
              >
                <div className="w-full h-full flex justify-center absolute p-4 pb-10 z-40">
                  <div className="w-[90%] h-full flex flex-row items-end justify-between">
                    <div className="text-white text-[25px] flex justify-center items-center">
                      <div className="">{db[currentIndex].name} 24</div>
                      <SeeProfile />
                    </div>
                    <div className="mb-6">
                      <button onClick={goBack}>
                        <img
                          src={arrowleft}
                          className="mr-6 w-[16px] h-[16px]"
                          alt="Previous"
                        />
                      </button>
                      <button onClick={goForward}>
                        <img
                          src={arrowright}
                          className="w-[16px] h-[16px]"
                          alt="Next"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TinderCard>
          )}
        </div>

        <div className="buttons flex space-x-4 mt-[-55px] z-40">
          <button
            className={`p-2 rounded ${!canSwipe ? "" : ""}`}
            onClick={() => swipe("left")}
          >
            <img src={DislikeButton} alt="Dislike" />
          </button>
          <button
            className={`p-2 rounded ${!canSwipe ? "" : ""}`}
            onClick={() => swipe("right")}
          >
            <img src={LikeButton} alt="Like" />
          </button>
        </div>

        {/* Bottom desktop */}
        <p className="h-[100px] flex flex-row items-center justify-center max-lg:hidden">
          Merry limit today <span className="text-[#FF1659] ml-4">2/20</span>
        </p>

        {/* Bottom mobile */}
        <div className="w-[90%] flex items-end justify-between lg:hidden">
          <div className="flex flex-row">
            <button
              className=""
              onClick={() => document.getElementById("Filter").showModal()}
            >
              <img
                src={filter}
                className="w-[25px] h-[25px] mr-2"
                alt="Filter"
              />
            </button>
            Filter
          </div>
          <p className="flex flex-row">
            Merry limit today <span className="text-[#FF1659] ml-4">2/20</span>
          </p>
        </div>

        {/* Filter modal-box */}
        <section className="">
          <dialog
            id="Filter"
            className="modal bg-white w-screen h-[80%] flex flex-col mt-[180px] rounded-t-3xl"
          >
            <form method="dialog">
              <button className="text-[18px] text-black btn btn-sm btn-circle btn-ghost absolute left-3 top-4">
                ✕
              </button>
              <p className="text-[20px] text-[#191C77] absolute right-[45%] top-4">
                Filter
              </p>
              <button className="text-[16px] text-red-500 btn btn-sm btn-circle btn-ghost absolute right-6 top-4">
                Clear
              </button>
            </form>

            {/* Search by Keywords */}
            <div className="w-full h-[20%] flex pt-24 items-start justify-center">
              <div className="w-[90%]">
                <p className="text-black text-lg">Search by Keywords</p>
                <form method="GET">
                  <div className="relative pt-4">
                    <span className="absolute inset-y-0 left-0 flex pt-4 pl-2">
                      <button type="submit" className="p-1 border-gray-300">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      className="py-2 w-full text-sm text-black rounded-md pl-10 bg-white border focus:border-gray-300 border-gray-300"
                      placeholder="Search..."
                      autoComplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Sex you interest */}
            <div className="w-full h-[20%] flex pt-24 justify-center">
              <div className="w-[90%] h-full">
                <p className="text-black text-lg">Sex you interest</p>
                {["Default", "Female", "Non-binary people"].map((label) => (
                  <div className="flex" key={label}>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox mt-4 border-gray-300 [--chkbg:purple] [--chkfg:white] checked:border-purple-300"
                    />
                    <p className="ml-4 mt-3 w-full text-lg">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[30%] w-[95%]">
              <p className="text-black text-lg ml-3">Age Range</p>
              <div className="flex justify-center">
                <RangeSlider />
              </div>
            </div>
            <div className="w-[90%] m-6 flex items-center justify-center">
              <button className="bg-red-500 rounded-[30px] w-full h-[60px] text-xl text-white">
                Search
              </button>
            </div>
          </dialog>
        </section>
      </div>
    </section>
  );
}

export default Cardtinder;
