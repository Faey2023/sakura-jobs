"use client";
import Image from "next/image";
import { FaBuilding, FaYenSign, FaLongArrowAltRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Modal from "./Modal";

const JobCard = ({ job }) => {
  const {
    id,
    image,
    title,
    company,
    location,
    salary,
    description,
    requirements,
  } = job || {};
  return (
    <>
      <div className="max-w-sm h-[580px] hover:bg-[#FFFBF2] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <Image
          className=" w-96 h-52"
          src={image}
          alt="image"
          width={384}
          height={200}
        ></Image>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">
              {title}
            </h5>
          </a>
          <div className=" text-lg">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <FaBuilding className=" inline-block mr-2" />
              <span className="font-bold inline-block"> Company :</span>{" "}
              {company}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-2 items-center">
              <MdLocationOn /> <span className="font-bold">Location :</span>{" "}
              {location}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <FaYenSign className=" inline-block mr-2" />
              <span className="font-bold inline-block">
                {" "}
                Monthly Salary :
              </span>{" "}
              {salary}
            </p>
          </div>
          <button
            onClick={() =>
              document.getElementById(`my_modal_${id}`).showModal()
            }
            className="btn btn-outline text-teal-600 hover:bg-teal-600 hover:border-none hover:text-white absolute bottom-0 mb-5"
          >
            Read more
            <FaLongArrowAltRight className=" text-xl" />
          </button>
        </div>
      </div>
      <Modal job={job} jobId={id} />
    </>
  );
};

export default JobCard;
