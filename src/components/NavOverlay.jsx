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
        } fixed text-primary-headings bg-stone-900/40 left-0 right-0 top-0 w-full h-full`}
      ></div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex flex-col justify-center items-center gap-4 absolute top-30 right-10 w-4/5 py-8 bg-secondary-Background rounded-2xl`}
      >
        <Link to="/home" className="text-primary-headings text-lg">
          Home
        </Link>
        <Link to="/home" className="text-primary-headings text-lg">
          Features
        </Link>
        <Link to="/home" className="text-primary-headings text-lg">
          Tools
        </Link>
        <Link to="/home" className="text-primary-headings text-lg">
          FAQ
        </Link>
        <Buttons
          variant={[
            "secondaryVariant",
            "gap-2 w-3/5 p-2",
            "Sign in",
            <PiSignIn />,
            null,
          ]}
        />
        <Buttons
          variant={[
            "mainVariant",
            "gap-2 w-3/5 p-2",
            "Get Started",
            null,
            null,
          ]}
        />
      </div>
    </div>
  );
};

export default NavOverlay;
