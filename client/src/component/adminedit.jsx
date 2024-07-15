<<<<<<< HEAD
import { useEffect } from "react";
import drag from "../assets/icons/drag.png";
import X from "../assets/icons/X.png";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdminEditPackagePage = () => {
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState([""]);
  const [packageName, setPackageName] = useState("");
  const [merryLimit, setMerryLimit] = useState("");

  const [inputs, setInputs] = useState({
    packages_name: "",
    merry_limit: "",
    icons: "",
    detail: "",
  });

  // const [packageId, setPackageId] = useState({});

  const params = useParams();

  console.log(params);

  useEffect(() => {
    console.log("params:", params);

    const fetchPackage = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/admin/get/${params.package_id}`
        );

        const packageData = res.data.data;

        setInputs({
          packages_name: packageData.packages_name,
          merry_limit: packageData.merry_limit,
          icons: packageData.icons,
          detail: Array.isArray(packageData.detail)
            ? packageData.detail.join(", ")
            : packageData.detail,
        });
        setPackageName(packageData.packages_name);
        setMerryLimit(packageData.merry_limit);
        setDetails(
          Array.isArray(packageData.detail)
            ? packageData.detail
            : packageData.detail.split(", ").map((item) => item.trim())
        );
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    if (params.package_id) {
      fetchPackage();
    } else {
      console.error("No package_id found in params");
    }
  }, [params]);

  // console.log(inputs);
  // console.log(params.package_id);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(inputs);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log("Inputs:", inputs);
  //   console.log("Package ID:", params.package_id);

  //   const res = await axios.put(
  //     `http://localhost:4001/admin/edit/${params.package_id}`,
  //     inputs
  //   );
  //   console.log(res);
  //   console.log(params.package_id);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
   
    const numericMerryLimit = parseInt(inputs.merry_limit, 10);
  
    if (isNaN(numericMerryLimit)) {
      console.error("Merry limit is not a valid number");
      return;
    }
  
    try {
      const res = await axios.put(
        `http://localhost:4001/admin/edit/${params.package_id}`,
        {
          packages_name: inputs.packages_name,
          merry_limit: numericMerryLimit,
          icons: inputs.icons,
          detail: inputs.detail,
        }
      );
      console.log("Response:", res);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
      } else {
        console.error("Error updating package data:", error.message);
      }
    }
  };
  

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

  const handleDeletePackage = () => {
    setImage(null);
    setDetails([""]);
    setPackageName("");
    setMerryLimit("");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/package/view");
  };

  return (
    <section className="w-[90%] h-20 px-[60px] py-4 bg-white border-b border-gray-300 justify-start item-end inline-flex flex-col  ">
      <div className="flex flex-row">
        <div className="grow shrink basis-0 text-slate-800 text-2xl font-bold">
          Edit Package
        </div>
        <div className="justify-start items-start gap-4 flex">
          <div className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 flex">
            <button
              className="text-center text-rose-800 text-base font-bold "
              onClick={handleClick}
            >
=======
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
<<<<<<< HEAD
            <button className="text-center text-rose-800 text-base font-bold font-['Nunito'] leading-normal">
>>>>>>> 8a123ae (rebase dev)
=======
            <button className="text-center text-rose-800 text-base font-bold " onClick={handleClick}>
>>>>>>> 84ae46f (feat: add feature in admin page)
              Cancel
            </button>
          </div>
          <div className="px-6 py-3 bg-rose-700 rounded-[99px] shadow justify-center items-center gap-2 flex">
<<<<<<< HEAD
<<<<<<< HEAD
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-center text-white text-base font-bold "
            >
=======
            <button className="text-center text-white text-base font-bold font-['Nunito'] leading-normal">
>>>>>>> 8a123ae (rebase dev)
=======
            <button className="text-center text-white text-base font-bold ">
>>>>>>> 84ae46f (feat: add feature in admin page)
              Edit
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex rounded-2xl flex-col mt-[100px]">
        <label className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <p className="w-full text-[16px] text-black">
              Package Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              value={packageName}
              name="packages_name"
              onChange={(e) => {
                handleChange(e);
                setPackageName(e.target.value);
              }}
              className="input input-bordered bg-white w-full"
=======
      <div className=" flex rounded-2xl flex-col mt-[100px]">
=======
      <div className="flex rounded-2xl flex-col mt-[100px]">
>>>>>>> 84ae46f (feat: add feature in admin page)
        <label className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <p className="w-full text-[16px] text-black">Package Name <span className="text-red-600">*</span></p>
            <input
              type="text"
<<<<<<< HEAD
              placeholder=""
              className="input input-bordered bg-white w-full "
>>>>>>> 8a123ae (rebase dev)
=======
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="input input-bordered bg-white w-full"
>>>>>>> 84ae46f (feat: add feature in admin page)
            />
          </div>

          <div className="flex flex-col">
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="w-full text-[16px] text-black ">
              Merry limit <span className="text-red-600">*</span>
            </p>
            <input
              type="number"
              value={merryLimit}
              name="merry_limit"
              onChange={(e) => {
                handleChange(e);
                setMerryLimit(e.target.value);
              }}
=======
            <p className=" w-full text-[16px]">Merry limit*</p>
            <input
              type="number"
              placeholder=""
>>>>>>> 8a123ae (rebase dev)
=======
            <p className="w-full text-[16px] text-black ">Merry limit <span className="text-red-600">*</span></p>
            <input
              type="number"
              value={merryLimit}
              onChange={(e) => setMerryLimit(e.target.value)}
>>>>>>> 84ae46f (feat: add feature in admin page)
              className="input input-bordered bg-white w-full"
            />
          </div>
        </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 84ae46f (feat: add feature in admin page)

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
<<<<<<< HEAD
                  name="icons"
                  onChange={(event) => {
                    handleChange(event);
                    setImage(event.target.files[0]);
                  }}
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
                    handleChange(e);
                    handleDetailChange(index, e.target.value);
                  }}
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
=======
        <label>
          <div className="label-text relative  mt-10 bottom-2 text-[16px] ">
            Icon*
=======
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </>
            )}
>>>>>>> 84ae46f (feat: add feature in admin page)
          </div>
        </label>

        <label className="form-control mt-12 w-full">
          <h1>Package Detail</h1>
<<<<<<< HEAD
          <div className="label mt-5 ">
            <p className=" relative left-16">Detail</p>
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

          <div className="label mt-5 ">
            <p className="relative left-16">Detail</p>
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
          <div className="px-[50px] flex-col justify-start items-start gap-2 flex mb-2 relative right-14 ">
            <button className="px-6 py-3 bg-rose-100 rounded-[99px] shadow justify-center items-center gap-2 inline-flex">
              <div className="text-center text-rose-800 text-base font-bold font-['Nunito'] leading-normal">
>>>>>>> 8a123ae (rebase dev)
=======
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
>>>>>>> 84ae46f (feat: add feature in admin page)
                + Add detail
              </div>
            </button>
          </div>
        </label>
      </div>
      <footer className="border-t-2 mt-2">
<<<<<<< HEAD
<<<<<<< HEAD
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleDeletePackage();
          }}
        >
          <p className="text-end mt-2">Delete Package</p>
        </a>
=======
        <a href=""><p className="text-end mt-2">Delete Package</p></a>
>>>>>>> 8a123ae (rebase dev)
=======
        <a href="#" onClick={(e) => { e.preventDefault(); handleDeletePackage(); }}>
          <p className="text-end mt-2">Delete Package</p>
        </a>
>>>>>>> 84ae46f (feat: add feature in admin page)
      </footer>
    </section>
  );
};

export default AdminEditPackagePage;
