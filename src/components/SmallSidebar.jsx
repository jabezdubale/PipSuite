import useSidebarOpener from "../stores/SidebarOpener";
import { GoSidebarCollapse } from "react-icons/go";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosJournal } from "react-icons/io";
import { LuCalculator } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiToolboxBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import useAuth from "../stores/auth";

const SmallSidebar = ({ styles }) => {
  const logOut = useAuth((state) => state.logOut);
  const resetAllOverlay = useSidebarOpener((state) => state.resetAllOverlay);
  const setLargeSidebarOpen = useSidebarOpener(
    (state) => state.setLargeSidebarOpen
  );
  const selectedSidebar = useSidebarOpener((state) => state.selectedSidebar);
  const setSelectedSidebar = useSidebarOpener(
    (state) => state.setSelectedSidebar
  );
  return (
    <div
      className={`bg-secondary-Background text-primary-headings mx-[10%] rounded-2xl flex flex-col justify-between items-center py-10 min-h-full ${styles}`}
    >
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <div
          onClick={setLargeSidebarOpen}
          className="text-gray-400 w-full flex justify-center"
        >
          <GoSidebarCollapse size={20} />
        </div>
        <Link
          to={"/dashboard"}
          onClick={() => setSelectedSidebar("dashboard")}
          className={`flex justify-center w-[90%] p-[15%] rounded-lg  ${
            selectedSidebar === "dashboard" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <GoHome size={24} />
        </Link>
        <Link
          to={"/trade-journal"}
          onClick={() => setSelectedSidebar("trade-journal")}
          className={`flex justify-center w-[90%] p-[15%] rounded-lg  ${
            selectedSidebar === "trade-journal" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <IoIosJournal size={24} />
        </Link>

        <Link
          to={"/risk-calculator"}
          onClick={() => setSelectedSidebar("risk-calculator")}
          className={`flex justify-center w-[90%] p-[15%] rounded-lg  ${
            selectedSidebar === "risk-calculator" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <LuCalculator size={24} />
        </Link>

        <Link
          to={"/back-tester"}
          onClick={() => setSelectedSidebar("back-tester")}
          className={`flex justify-center w-[90%] p-[15%] rounded-lg  ${
            selectedSidebar === "back-tester" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <FaClockRotateLeft size={24} />
        </Link>

        <Link
          to={"/more-tools"}
          onClick={() => setSelectedSidebar("more-tools")}
          className={`flex justify-center w-[90%] p-[15%] rounded-lg  ${
            selectedSidebar === "more-tools" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <PiToolboxBold size={24} />
        </Link>

        <Link
          to={"/settings"}
          onClick={() => setSelectedSidebar("settings")}
          className={`flex justify-center w-[90%] p-[15%] rounded-lg  ${
            selectedSidebar === "settings" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <IoSettingsOutline size={24} />
        </Link>
      </div>
      <div className="flex flex-col justify-end items-center w-full gap-5">
        <div className="w-[95%] py-3 px-1 bg-main-Background rounded-lg flex justify-center items-center ">
          <div className="text-main-Background w-[90%] py-2 bg-brand-green rounded-lg flex justify-center items-center ">
            <IoIosAdd size={20} />
          </div>
        </div>
        <div
          onClick={() => {
            logOut();
            resetAllOverlay();
          }}
          className="w-[95%] flex justify-center items-center gap-2 border border-main-border rounded-lg p-2"
        >
          <PiSignOutBold size={20} />
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
