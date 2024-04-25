import Image from "next/image";
import { GiConversation } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";
import {
  FaExternalLinkAlt,
  FaBuilding,
  FaYenSign,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Modal = ({ job, jobId }) => {
  const {
    image,
    title,
    company,
    location,
    salary,
    description,
    requirements,
    proficiency_in_japanese,
  } = job || {};
  return (
    <dialog id={`my_modal_${jobId}`} className="modal">
      <div className="modal-box text-[#666666] dark:text-white">
        <div className=" dark:bg-gray-700">
          <div className="m-5">
            <h3 className="text-center text-xl md:text-3xl text-teal-600 font-bold dark:text-white mb-3">
              {title}
            </h3>
            <div className="flex flex-col gap-2 space-y-2 text-lg">
              <p className=" text-xl">{description}</p>
              <div className="flex gap-2">
                <FaBuilding className="text-xl" />
                <p>
                  <span className="font-bold">Company </span>: {company}
                </p>
              </div>
              <div className="flex gap-2">
                <MdLocationOn className="text-xl" />
                <p>
                  <span className="font-bold"> Location : </span>
                  {location}
                </p>
              </div>
              <div className="flex gap-2">
                <FaYenSign className="text-xl" />
                <p>
                  <span className="font-bold"> Salary : </span>
                  {salary}
                </p>
              </div>
              <div className="flex gap-2">
                <LuMessagesSquare className="text-xl" />
                <p>
                  <span className="font-bold"> Proficiency in Japanese : </span>
                  {proficiency_in_japanese}
                </p>
              </div>

              <div className="flex gap-2">
                <div>
                  <span className="font-bold"> Requirements :</span>
                  {requirements.map((requirement) => (
                    <li>{requirement}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <Image
            className="w-96 md:max-w-lg mx-auto"
            src={image}
            alt=""
            width={384}
            height={0}
          />
        </div> */}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
};

export default Modal;
