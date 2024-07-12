import React from "react";
import drag from "../assets/icons/drag.png"
import X from "../assets/icons/X.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminEditPackagePage = () => {
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState(['']);
  const [packageName, setPackageName] = useState('');
  const [merryLimit, setMerryLimit] = useState('');

  const handleAddDetail = () => {
    setDetails([...details, '']);
  };

  const handleDeleteDetail = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const handleDeletePackage = () => {
    setImage(null);
    setDetails(['']);
    setPackageName('');
    setMerryLimit('');
  };

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/package/view')
  }


  return (
    <section className="w-[90%] h-20 px-[60px] py-4 bg-white border-b border-gray-300 justify-start item-end inline-flex flex-col  ">
      <div className="flex flex-row">
        <div className="grow shrink basis-0 text-slate-800 text-2xl font-bold">
          Edit 'Package'
        </div>
        <div className="justify-start items-start gap-4 flex">
          <div className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 flex">
            <button className="text-center text-rose-800 text-base font-bold " onClick={handleClick}>
              Cancel
            </button>
          </div>
          <div className="px-6 py-3 bg-rose-700 rounded-[99px] shadow justify-center items-center gap-2 flex">
            <button className="text-center text-white text-base font-bold ">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="flex rounded-2xl flex-col mt-[100px]">
        <label className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <p className="w-full text-[16px] text-black">Package Name <span className="text-red-600">*</span></p>
            <input
              type="text"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="input input-bordered bg-white w-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="w-full text-[16px] text-black ">Merry limit <span className="text-red-600">*</span></p>
            <input
              type="number"
              value={merryLimit}
              onChange={(e) => setMerryLimit(e.target.value)}
              className="input input-bordered bg-white w-full"
            />
          </div>
        </label>

        <label className="w-[150px] h-[120px]">
          <div className="label-text relative mt-10 bottom-2 text-[16px] text-black">
            Icon <span className="text-red-600">*</span>
          </div>
          <div className="relative">
            {image ? (
              <div className="relative w-[130px] h-[100px]">
                <img
                  className="w-[120px] h-[100px] rounded-[5px]"
                  src={URL.createObjectURL(image)}
                />
                <button
                  className="absolute top-[-20px] right-[-20px]"
                  onClick={() => setImage(null)}
                  type="button"
                >
                  <img src={X} alt="" />
                </button>
              </div>
            ) : (
              <>
                <div className="absolute w-[120px] h-[100px] top-0 left-0 bg-[#f6f7fc] flex justify-center items-center rounded-[5px]">
                  <p>Upload Icon</p>
                </div>
                <input
                  type="file"
                  className="input input-bordered bg-white w-[120px] h-[100px] opacity-0"
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </>
            )}
          </div>
        </label>

        <label className="form-control mt-12 w-full">
          <h1>Package Detail</h1>
          {details.map((detail, index) => (
            <div key={index}>
              <div className="label mt-5">
                <p className="relative left-16">Detail <span className="text-red-600">*</span></p>
              </div>
              <div className="flex flex-row">
                <img className="relative bottom-4" src={drag} alt="" />
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => handleDetailChange(index, e.target.value)}
                  className="input input-bordered bg-white w-full"
                />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteDetail(index);
                  }}
                >
                  <span className="ml-4 text-red-600">Delete</span>
                </a>
              </div>
            </div>
          ))}
          <div className="px-[50px] flex-col justify-start items-start gap-2 flex mb-2 relative right-14">
            <button
              className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 inline-flex"
              onClick={handleAddDetail}
            >
              <div className="text-center text-rose-800 text-base font-bold ">
                + Add detail
              </div>
            </button>
          </div>
        </label>
      </div>
      <footer className="border-t-2 mt-2">
        <a href="#" onClick={(e) => { e.preventDefault(); handleDeletePackage(); }}>
          <p className="text-end mt-2">Delete Package</p>
        </a>
      </footer>
    </section>
  );
};

export default AdminEditPackagePage;
