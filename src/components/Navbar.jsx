import useSidebarOpener from "../stores/SidebarOpener";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GoSidebarCollapse } from "react-icons/go";
import { Link } from "react-router-dom";
import useMainNavOverlay from "../stores/MainNavOverlay";

const Navbar = () => {
  const setOverlaySidebarOpen = useSidebarOpener(
    (state) => state.setOverlaySidebarOpen
  );
  const overlaySidebarOpen = useSidebarOpener(
    (state) => state.overlaySidebarOpen
  );
  const amountOverlayOpen = useMainNavOverlay(
    (state) => state.amountOverlayOpen
  );
  const profileOverlayOpen = useMainNavOverlay(
    (state) => state.profileOverlayOpen
  );

  const setAmountOverlayOpen = useMainNavOverlay(
    (state) => state.setAmountOverlayOpen
  );
  const setProfileOverlayOpen = useMainNavOverlay(
    (state) => state.setProfileOverlayOpen
  );

  return (
    <div className="px-4 h-full flex flex-col justify-between text-primary-headings text-lg">
      <div className="flex justify-between items-center gap-4 h-full">
        <div className="flex justify-start items-center gap-1 w-[80%] ">
          <Link to={"/"} className="w-full">
            <Logo size="h-8" style="text-lg gap-1" />
          </Link>
          <div className="relative border border-primary-headings rounded-lg w-full">
            <IoIosSearch
              size={22}
              className="absolute top-1/2 -translate-y-1/2 left-1 text-gray-400 "
            />
            <input
              className="flex items-center py-1 pl-7 w-full"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex flex-wrap border border-white justify-center items-center gap-2 w-[45%]">
          <div
            onClick={() => setAmountOverlayOpen()}
            className="relative flex justify-center w-20 items-center gap-2 py-1 px-2 bg-secondary-Background rounded-xl"
          >
            <p>$250</p>
            <MdKeyboardArrowDown />
            <div
              className={`${
                amountOverlayOpen ? "" : "hidden"
              } absolute z-1 bg-secondary-Background mt-2 top-1/1 right-0 w-50 p-4`}
            >
              <p>Withdraw</p>
            </div>
          </div>
          <div
            onClick={() => setProfileOverlayOpen()}
            className="relative flex justify-center items-center w-20 gap-2 py-1.5 px-3 bg-secondary-Background rounded-xl"
          >
            <IoPersonOutline size={24} />
            <MdKeyboardArrowDown />
            <div
              className={`${
                profileOverlayOpen ? "" : "hidden"
              } absolute z-1 bg-secondary-Background mt-2 top-1/1 right-0 w-50 p-4`}
            >
              <p>Profile</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${overlaySidebarOpen ? "hidden" : ""} sm:hidden pb-1`}
        onClick={setOverlaySidebarOpen}
      >
        <GoSidebarCollapse size={24} />
      </div>
    </div>
  );
};

export default Navbar;
