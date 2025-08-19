import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { PiSignIn } from "react-icons/pi";
import { TiThMenuOutline } from "react-icons/ti";
import Logo from "./Logo";

const NavLanding = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div className="hidden sm:flex justify-between items-center w-full gap-4 mx-4">
        <Link to="/home" className="text-primary-headings text-lg w-full">
          Home
        </Link>
        <Link to="/features" className="text-primary-headings text-lg w-full">
          Features
        </Link>
        <Link to="/tools" className="text-primary-headings text-lg w-full">
          Tools
        </Link>
        <Link to="/faq" className="text-primary-headings text-lg w-full">
          FAQ
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-col md:flex-row justify-center items-center gap-3 w-full">
        <Buttons
          variant={[
            "secondaryVariant",
            "gap-2 w-30 p-2",
            "Sign in",
            <PiSignIn />,
            null,
          ]}
        />
        <Buttons
          variant={["mainVariant", "gap-2 w-30 p-2", "Get Started", null, null]}
        />
      </div>
      <div className="sm:hidden text-primary-headings align-center">
        <TiThMenuOutline size={32} />
      </div>
    </div>
  );
};

export default NavLanding;
