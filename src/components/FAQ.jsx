import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Question */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="my-2 py-2 px-6 w-full flex justify-between items-center cursor-pointer"
      >
        <p className="text-secondary-headings text-xl pr-2">{question}</p>
        <div onClick={() => !isOpen} className="text-brand-green">
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      {/* Answer */}
      <div className={`w-full bg-main-Background ${isOpen ? "" : "hidden"}`}>
        <p className="text-secondary-headings text-lg py-6 pl-18 pr-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
