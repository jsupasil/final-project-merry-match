import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import drag from "../assets/icons/drag.png";
import { useState } from "react";
import X from "../assets/icons/X.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminAddPackagePage = () => {
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState([""]);

  // const create = () => {
    const [inputs,setInputs] = useState({
      packages_name: "",
      merry_limit:"",
      icons:"",
      detail:""
    })
  // }

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:4001/admin/create", inputs)
    console.log(res);
  }

  const handleAddDetail = () => {
    setDetails([...details, ""]);
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/package/view");
  };

  return (
    <section className="w-[90%] h-20 px-[60px] py-4 bg-white border-b border-gray-300 justify-start item-end inline-flex flex-col">
      <div className="flex flex-row">
        <div className="grow shrink basis-0 text-slate-800 text-2xl font-bold ">
=======
=======
import drag from "../assets/icons/drag.png"
>>>>>>> 8a123ae (rebase dev)

const AdminAddPackagePage = () => {
  return (
    <section className="w-[90%] h-20 px-[60px] py-4 bg-white border-b border-gray-300 justify-start item-end inline-flex flex-col">
      <div className="flex flex-row">
<<<<<<< HEAD
        <div className="grow shrink basis-0 text-slate-800 text-2xl font-bold  leading-[30px]">
>>>>>>> 6e1b356 (feat: create admin page about list package)
=======
        <div className="grow shrink basis-0 text-slate-800 text-2xl font-bold ">
>>>>>>> 8a123ae (rebase dev)
          Add Package
        </div>
        <div className="justify-start items-start gap-4 flex">
          <div className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 flex">
<<<<<<< HEAD
<<<<<<< HEAD
            <button
              className="text-center text-rose-800 text-base font-bold "
              onClick={handleClick}
            >
=======
            <button className="text-center text-rose-800 text-base font-bold font-['Nunito'] leading-normal">
>>>>>>> 6e1b356 (feat: create admin page about list package)
=======
            <button className="text-center text-rose-800 text-base font-bold ">
>>>>>>> 8a123ae (rebase dev)
              Cancel
            </button>
          </div>
          <div className="px-6 py-3 bg-rose-700 rounded-[99px] shadow justify-center items-center gap-2 flex">
<<<<<<< HEAD
<<<<<<< HEAD
            <button type="sumbit" onClick={handleSubmit} className="text-center text-white text-base font-bold ">
=======
            <button className="text-center text-white text-base font-bold font-['Nunito'] leading-normal">
>>>>>>> 6e1b356 (feat: create admin page about list package)
=======
            <button className="text-center text-white text-base font-bold ">
>>>>>>> 8a123ae (rebase dev)
              Create
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className=" flex rounded-2xl flex-col mt-[100px]">
        <label className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <p className=" w-full text-[16px] text-black">
              Package Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              placeholder=""
              name="packages_name"
              className="input input-bordered bg-white w-full "
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <p className=" w-full text-[16px] text-black">
              Merry limit <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              placeholder=""
              name="merry_limit"
              className="input input-bordered bg-white w-full"
              onChange={handleChange}
            />
          </div>
        </label>
        <label className="w-[150px] h-[120px]">
          <div className="label-text relative  mt-10 bottom-2 text-[16px] text-black ">
            Icon <span className="text-red-600">*</span>
          </div>
          <div className="relative ">
            {image ? (
              <div className="relative w-[130px] h-[100px]">
                <img
                  className="w-[120px] h-[100px] rounded-[5px]"
                  src={URL.createObjectURL(image)}
                />
                <button
                  className="absolute top-[-20px] right-[-20px] "
                  onClick={() => {
                    setImage(null);
                  }}
                  type="button"
                >
                  <img src={X} alt="" />
                </button>
              </div>
            ) : (
              <>
                <div className="absolute w-[120px] h-[100px] top-0 left-0 bg-[#f6f7fc] flex justify-center items-center rounded-[5px] ">
                  <p>Upload Icon</p>
                </div>
                <input
                  type="file"
                  className="input input-bordered bg-white w-[120px] h-[100px] opacity-0"
                  name="icons"
                  onChange={(event) => {
                    handleChange(event)
                    setImage(event.target.files[0]);
                  }}
                />
              </>
            )}
          </div>
        </label>

        <label className="form-control mt-12 w-full">
          <h1 className="">Package Detail </h1>
          {details.map((detail, index) => (
            <div key={index}>
              <div className="label mt-5">
                <p className="relative left-16">
                  Detail <span className="text-red-600">*</span>
                </p>
              </div>
              <div className="flex flex-row">
                <img className="relative bottom-4" src={drag} alt="" />
                <input
                  type="text"
                  value={detail}
                  name="detail"
                  onChange={(e) => {
                    handleChange(e)
                    handleDetailChange(index, e.target.value)
                  }}
                  // onChange={handleChange}
                  className="input input-bordered bg-white w-full"
                />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteDetail(index);
                  }}
                >
                  <span className="ml-4">Delete</span>
                </a>
              </div>
            </div>
          ))}
          <div className="px-[50px] flex-col justify-start items-start gap-2 flex mb-2 relative right-14">
            <button
              className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 inline-flex"
              onClick={handleAddDetail}
            >
              <div className="text-center text-rose-800 text-base font-bold font-['Nunito'] leading-normal">
                + Add detail
              </div>
            </button>
          </div>
        </label>
      </div>
    </section>
  );
};

=======
      <div className=" flex grow shrink basis-0 self-stretch rounded-2xl flex-col mt-[100px]">
        <label className="form-control w-full max-w-xs flex flex-row ">
          <div className="label flex flex-col mr-[500px]">
            <span className="label-text relative right-24 bottom-2 text-[16px]">
              Package Name*
            </span>
=======
      <div className=" flex rounded-2xl flex-col mt-[100px]">
        <label className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <p className=" w-full text-[16px]">Package Name*</p>
>>>>>>> 8a123ae (rebase dev)
            <input
              type="text"
              placeholder=""
              className="input input-bordered bg-white w-full "
            />
          </div>

          <div className="flex flex-col">
            <p className=" w-full text-[16px]">Merry limit*</p>
            <input
              type="text"
              placeholder=""
              className="input input-bordered bg-white w-full"
            />
          </div>
        </label>
        <label>
          <div className="label-text relative  mt-10 bottom-2 text-[16px] ">
            Icon*
          </div>
          <input
            type="image"
            placeholder="Uploud Icon"
            className="input input-bordered bg-white w-[120px] h-[100px] max-w-xs"
          />
          
        </label>

        <label className="form-control mt-10 w-full ">
          <h1>Package Detail</h1>
          <div className="label mt-10 ">
            <p className="label-text">Detail</p>
          </div>
          <div className="flex flex-row">
            <img className="relative bottom-4" src={drag} alt="" />
            <input
              type="text"
              placeholder=""
              className="input input-bordered bg-white w-full"
            />
            <a href="">
              <span className="ml-4">Delete</span>
            </a>
          </div>
          <div className="px-[50px] flex-col justify-start items-start gap-2 flex mt-10 relative right-14 ">
            <button className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 inline-flex">
              <div className="text-center text-rose-800 text-base font-bold  ">
                + Add detail
              </div>
            </button>
          </div>
        </label>
      </div>
    </section>
  );
};

<<<<<<< HEAD

>>>>>>> 6e1b356 (feat: create admin page about list package)
=======
>>>>>>> 8a123ae (rebase dev)
export default AdminAddPackagePage;
