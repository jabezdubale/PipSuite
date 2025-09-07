import FooterMain from "../components/FooterMain";
import LargeSidebar from "../components/LargeSidebar";
import Navbar from "../components/Navbar";
import SidebarOverlay from "../components/SidebarOverlay";
import SmallSidebar from "../components/SmallSidebar";
import useSidebarOpener from "../stores/SidebarOpener";
import useMainNavOverlay from "../stores/MainNavOverlay";

const MainLayout = ({ children }) => {
  const setAmountOverlayOpenFalse = useMainNavOverlay(
    (state) => state.setAmountOverlayOpenFalse
  );
  const setProfileOverlayOpenFalse = useMainNavOverlay(
    (state) => state.setProfileOverlayOpenFalse
  );
  const largeSidebarOpen = useSidebarOpener((state) => state.largeSidebarOpen);
  const overlaySidebarOpen = useSidebarOpener(
    (state) => state.overlaySidebarOpen
  );
  const setOverlaySidebarOpen = useSidebarOpener(
    (state) => state.setOverlaySidebarOpen
  );
  return (
    <>
      <div
        onClick={() => {
          setAmountOverlayOpenFalse();
          setProfileOverlayOpenFalse();
        }}
        className="bg-main-Background h-[100dvh] flex flex-col"
      >
        <div className="shrink-0 border border-b-main-border py-[2dvh] my-[1dvh]">
          <Navbar />
        </div>

        <div className={`relative flex-1 min-h-0 grid grid-cols-12`}>
          <div
            className={`${
              overlaySidebarOpen ? "" : "hidden"
            }  sm:hidden absolute w-[100dvw] z-100 h-full bg-main-Background/70`}
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
            className={`col-span-12 overflow-y-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mx-[1dvw] border border-main-border rounded-xl ${
              largeSidebarOpen
                ? "sm:col-span-8 lg:col-span-9"
                : "sm:col-span-11"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="bg-main-Background py-[2dvh]">
        <FooterMain />
      </div>
    </>
  );
};

export default MainLayout;
