import useSidebarOpener from "../stores/SidebarOpener";
import { GoSidebarExpand } from "react-icons/go";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosJournal } from "react-icons/io";
import { LuCalculator } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiToolboxBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";

const LargeSidebar = ({ styles }) => {
  const setLargeSidebarOpen = useSidebarOpener(
    (state) => state.setLargeSidebarOpen
  );
  const selectedSidebar = useSidebarOpener((state) => state.selectedSidebar);
  const setSelectedSidebar = useSidebarOpener(
    (state) => state.setSelectedSidebar
  );
  return (
    <div
      className={`bg-secondary-Background text-primary-headings mx-[5%] rounded-2xl flex flex-col justify-between items-center py-8 min-h-full ${styles}`}
    >
      <div className="h-full flex flex-col justify-center items-center gap-3 w-full">
        <div
          onClick={setLargeSidebarOpen}
          className="h-full text-gray-400 w-full flex justify-end pr-[10%]"
        >
          <GoSidebarExpand size={20} />
        </div>
        <Link
          to={"/dashboard"}
          onClick={() => setSelectedSidebar("dashboard")}
          className={`flex justify-start gap-2 w-[90%] p-[5%] rounded-lg  ${
            selectedSidebar === "dashboard" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <GoHome size={24} />
          <p>Dashboard</p>
        </Link>

        <Link
          to={"/trade-journal"}
          onClick={() => setSelectedSidebar("trade-journal")}
          className={`flex justify-start gap-2 w-[90%] p-[5%] rounded-lg  ${
            selectedSidebar === "trade-journal" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <IoIosJournal size={24} />
          <p>Trade Journal</p>
        </Link>

        <Link
          to={"/risk-calculator"}
          onClick={() => setSelectedSidebar("risk-calculator")}
          className={`flex justify-start gap-2 w-[90%] p-[5%] rounded-lg  ${
            selectedSidebar === "risk-calculator" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <LuCalculator size={24} />
          <p>Risk Calculator</p>
        </Link>

        <Link
          to={"/back-tester"}
          onClick={() => setSelectedSidebar("back-tester")}
          className={`flex justify-start gap-2 w-[90%] p-[5%] rounded-lg  ${
            selectedSidebar === "back-tester" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <FaClockRotateLeft size={24} />
          <p>Back Tester</p>
        </Link>

        <Link
          to={"/more-tools"}
          onClick={() => setSelectedSidebar("more-tools")}
          className={`flex justify-start gap-2 w-[90%] p-[5%] rounded-lg  ${
            selectedSidebar === "more-tools" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <PiToolboxBold size={24} />
          <p>More Tools</p>
        </Link>

        <Link
          to={"/settings"}
          onClick={() => setSelectedSidebar("settings")}
          className={`flex justify-start gap-2 w-[90%] p-[5%] rounded-lg  ${
            selectedSidebar === "settings" &&
            "bg-brand-green/20 border border-brand-green"
          }`}
        >
          <IoSettingsOutline size={24} />
          <p>Settings</p>
        </Link>
      </div>
      <div className="flex flex-col justify-end items-center w-full gap-2">
        <div className="w-[95%] flex flex-col justify-center items-center gap-2 py-3 px-4 bg-main-Background rounded-lg">
          <p className="w-full">Quick Actions</p>
          <div className="text-main-Background w-full bg-brand-green rounded-lg flex justify-center items-center p-2">
            <IoIosAdd size={20} />
            <p>New Trade</p>
          </div>
        </div>
        <div className="w-[95%] flex justify-center items-center gap-2 border border-main-border rounded-lg p-2">
          <PiSignOutBold />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default LargeSidebar;
