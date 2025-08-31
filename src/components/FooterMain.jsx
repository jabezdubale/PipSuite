import Logo from "./Logo";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <div className=" text-primary-headings text-lg md:text-2xl flex justify-around items-center mx-[1dvw]  mt-[2dvh] rounded-2xl py-8 bg-secondary-Background">
      <div>
        <Logo size="h-8" style="text-lg gap-1" />
      </div>
      <div className=" flex flex-col justify-center items-center gap-2">
        <div>
          <p>Quick Links</p>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-2">
          <Link>Home</Link>
          <Link>Features</Link>
          <Link>Tools</Link>
          <Link>FAQs</Link>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-2">
        <BsTwitterX size={24} />
        <AiOutlineYoutube size={24} />
        <BiLogoFacebook size={24} />
      </div>
    </div>
  );
};

export default FooterMain;
