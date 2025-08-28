import { Link } from "react-router-dom";
import useNavOverlayStore from "../../stores/NavOverlayStore";
import Buttons from "../Buttons";
import { PiSignIn } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../Logo";

const NavLanding = () => {
  const buttonIsClicked = useNavOverlayStore((s) => s.buttonIsClicked);
  const isOpen = useNavOverlayStore((s) => s.isOpen);
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div className="hidden sm:flex justify-between items-center w-full gap-4 mx-4">
        <Link to="/" className="text-primary-headings text-lg w-full">
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
          variant="secondaryVariant"
          styles="w-30 p-2"
          label="Sign in"
          LeftIcon={<PiSignIn />}
          RightIcon={null}
          link="signin"
        />
        <Buttons
          variant="mainVariant"
          styles="w-30 p-2"
          label="Get Started"
          LeftIcon={null}
          RightIcon={null}
          link="register"
        />
      </div>
      <div
        onClick={buttonIsClicked}
        className="sm:hidden text-primary-headings align-center"
      >
        {isOpen ? <MdOutlineClose size={32} /> : <MdMenu size={32} />}
      </div>
    </div>
  );
};

export default NavLanding;
