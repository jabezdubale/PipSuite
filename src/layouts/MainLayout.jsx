import FooterMain from "../components/FooterMain";
import LargeSidebar from "../components/LargeSidebar";
import Navbar from "../components/Navbar";
import SidebarOverlay from "../components/SidebarOverlay";
import SmallSidebar from "../components/SmallSidebar";
import useSidebarOpener from "../stores/SidebarOpener";

const MainLayout = ({ children }) => {
  const largeSidebarOpen = useSidebarOpener((state) => state.largeSidebarOpen);
  const overlaySidebarOpen = useSidebarOpener(
    (state) => state.overlaySidebarOpen
  );
  const setOverlaySidebarOpen = useSidebarOpener(
    (state) => state.setOverlaySidebarOpen
  );
  return (
    <div className="bg-main-Background">
      <div className="h-[10dvh] border border-b-main-border sm:mb-[2dvh]">
        <Navbar />
      </div>

      <div className={`relative h-[88dvh] grid grid-cols-12`}>
        <div
          className={`${
            overlaySidebarOpen ? "" : "hidden"
          } absolute w-[100dvw] h-full bg-white/1`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOverlaySidebarOpen();
          }}
        >
          <SidebarOverlay styles={`w-[50%] min-h-full`} />
        </div>
        <div
          className={`hidden sm:block ${
            largeSidebarOpen ? "col-span-4 lg:col-span-3" : "col-span-1"
          }`}
        >
          <SmallSidebar styles={` ${largeSidebarOpen ? "hidden" : ""}`} />
          <LargeSidebar styles={` ${largeSidebarOpen ? "" : "hidden"}`} />
        </div>
        <div
          className={`col-span-12 overflow-y-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mr-[1dvw] sm:border border-main-border rounded-xl ${
            largeSidebarOpen ? "sm:col-span-8 lg:col-span-9" : "sm:col-span-11"
          }`}
        >
          {children}
        </div>
      </div>
      <div className="">
        <FooterMain />
      </div>
    </div>
  );
};

export default MainLayout;
