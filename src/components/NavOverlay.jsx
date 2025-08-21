import { Link } from "react-router-dom";
import useNavOverlayStore from "../stores/NavOverlayStore";
import Buttons from "./Buttons";
import { PiSignIn } from "react-icons/pi";

const NavOverlay = () => {
  const isOpen = useNavOverlayStore((s) => s.isOpen);
  const buttonIsClicked = useNavOverlayStore((s) => s.buttonIsClicked);

  return (
    <div>
      <div
        onClick={buttonIsClicked}
        className={`${
          isOpen ? "" : "hidden"
        } fixed text-primary-headings bg-stone-900/40 w-full inset-0`}
      ></div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } sm:${buttonIsClicked} flex flex-col justify-center items-center gap-4 absolute top-30 right-10 w-4/5 py-8 bg-secondary-Background rounded-2xl`}
      >
        <Link to="/home" className="text-primary-headings text-lg">
          Home
        </Link>
        <Link to="/features" className="text-primary-headings text-lg">
          Features
        </Link>
        <Link to="/tools" className="text-primary-headings text-lg">
          Tools
        </Link>
        <Link to="/faq" className="text-primary-headings text-lg">
          FAQ
        </Link>

        <Buttons
          variant="secondaryVariant"
          styles="w-3/5 p-2"
          label="Sign in"
          LeftIcon={<PiSignIn />}
          RightIcon={null}
          link="signin"
        />
        <Buttons
          variant="mainVariant"
          styles="w-3/5 p-2"
          label="Get Started"
          LeftIcon={null}
          RightIcon={null}
          link="register"
        />
      </div>
    </div>
  );
};

export default NavOverlay;
