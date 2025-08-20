import Logo from "./Logo";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-secondary-Background flex flex-col justify-center items-center gap-14">
      <div className="flex flex-wrap justify-center items-center pt-14 gap-8">
        <div className="flex flex-col justify-center items-center max-w-70 ">
          <Logo />
          <p className="text-primary-headings text-center">
            All-in-one trading toolkit for smarter forex & crypto decisions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-primary-headings  flex flex-col justify-center items-center">
            <p className="text-3xl text-primary-headings pb-5">Features</p>
            <p className="text-secondary-headings text-xl">Risk Calculator</p>
            <p className="text-secondary-headings text-xl">Trade Analysis</p>
            <p className="text-secondary-headings text-xl">
              Trade Data Journal
            </p>
            <p className="text-secondary-headings text-xl">
              Market Time Convertor
            </p>
          </div>

          <div className="text-primary-headings  flex flex-col justify-center items-center">
            <p className="text-3xl text-primary-headings pb-5">Quick Links</p>
            <p className="text-secondary-headings text-xl">Home</p>
            <p className="text-secondary-headings text-xl">Features</p>
            <p className="text-secondary-headings text-xl">Tools</p>
            <p className="text-secondary-headings text-xl">FAQs</p>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center max-w-70">
          <p className="text-3xl text-primary-headings">Start Your Journey</p>
          <p className="text-secondary-headings py-5">
            “It is not a calculated risk if you haven’t calculated it.” — Naved
            Abdali
          </p>
          <div className=" text-primary-headings flex justify-center items-center w-[50%] gap-[20%]">
            <BsTwitterX size={24} />
            <AiOutlineYoutube size={24} />
            <BiLogoFacebook size={24} />
          </div>
        </div>
      </div>
      <div className="text-center pb-14">
        <p className="text-primary-headings">
          © {new Date().getFullYear()} PipSuite, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
