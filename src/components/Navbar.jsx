import useSidebarOpener from "../stores/SidebarOpener";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GoSidebarCollapse } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import useMainNavOverlay from "../stores/MainNavOverlay";
import useAuth from "../stores/auth";
import { useState } from "react";
import { apiPatch } from "../lib/api";

const Navbar = () => {
  const user = useAuth((state) => state.user);
  const setUser = useAuth((state) => state.setUser);
  const [amount, setAmount] = useState(user.availableMoney);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showDeposit, setShowDeposit] = useState(true);
  const resetAllOverlay = useSidebarOpener((state) => state.resetAllOverlay);
  const logOut = useAuth((state) => state.logOut);
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
  const setAmountOverlayOpenFalse = useMainNavOverlay(
    (state) => state.setAmountOverlayOpenFalse
  );
  const setProfileOverlayOpenFalse = useMainNavOverlay(
    (state) => state.setProfileOverlayOpenFalse
  );

  return (
    <div className="px-4 h-full flex flex-col justify-between text-primary-headings text-lg">
      <div className="flex justify-between items-center gap-4 h-full">
        <div className="flex justify-start items-center gap-1 w-[80%] ">
          <div
            className={`${
              overlaySidebarOpen ? "hidden" : ""
            } cursor-pointer sm:hidden pb-1 pl-[5%]`}
            onClick={setOverlaySidebarOpen}
          >
            <GoSidebarCollapse size={24} />
          </div>
          <Link to={"/"} className=" ml-[5%] sm:ml-[20%]">
            <Logo size="h-8" style="text-lg gap-1" />
          </Link>
          {/* <div className="relative border border-primary-headings rounded-lg w-full">
            <IoIosSearch
              size={22}
              className="absolute top-1/2 -translate-y-1/2 left-1 text-gray-400 "
            />
            <input
              className="flex items-center py-1 pl-7 w-full"
              placeholder="Search..."
            />
          </div> */}
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-wrap justify-center items-center gap-2 w-[65%]"
        >
          {/* Amount field */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setAmountOverlayOpen();
              setProfileOverlayOpenFalse();
            }}
            className="cursor-pointer relative flex justify-center w-20 items-center gap-2 py-1 px-2 bg-secondary-Background rounded-xl"
          >
            <p>${amount}</p>
            <MdKeyboardArrowDown />
            <div
              onClick={(e) => e.stopPropagation()}
              className={`${
                amountOverlayOpen ? "" : "hidden"
              } absolute z-1 bg-secondary-Background rounded-2xl mt-2 top-1/1 w-[400%] right-0 p-4`}
            >
              <div className="relative flex justify-center items-center gap-[10%]">
                <div
                  onClick={() => setShowDeposit(true)}
                  className={` absolute left-[10%] -bottom-[5%]  p-1 px-4 cursor-pointer ${
                    showDeposit
                      ? "bg-secondary-Background border-t border-x border-main-border rounded-t-xl"
                      : ""
                  } `}
                >
                  <p>Deposit</p>
                </div>
                <div className="text-secondary-Background">.</div>
                <div
                  onClick={() => setShowDeposit(false)}
                  className={`absolute right-[10%] -bottom-[5%] p-1 px-4 cursor-pointer ${
                    showDeposit
                      ? ""
                      : "bg-secondary-Background border-t border-x border-main-border rounded-t-xl"
                  }`}
                >
                  <p>Withdraw</p>
                </div>
              </div>
              <div>
                {showDeposit ? (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const newAmount = Number(amount) + Number(depositAmount);
                      const updated = await apiPatch(`Users/${user.id}`, {
                        availableMoney: newAmount,
                      });
                      setUser(
                        updated ?? { ...user, availableMoney: newAmount }
                      );
                      setAmount(newAmount);
                      setWithdrawAmount("");
                      setDepositAmount("");
                    }}
                    className="flex flex-col justify-center items-center border border-main-border rounded-xl p-2 mb-2"
                  >
                    <div>
                      <label htmlFor="depositAmount">$</label>
                      <input
                        className=" border border-main-border p-2 m-2 "
                        type="text"
                        id="depositAmount"
                        placeholder="Enter Deposit Amount"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="cursor-pointer border w-[70%]  border-brand-green bg-brand-green/30 rounded-xl p-2"
                    >
                      Deposit
                    </button>
                  </form>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const newAmount = Number(amount) - Number(withdrawAmount);
                      const updated = await apiPatch(`Users/${user.id}`, {
                        availableMoney: newAmount,
                      });
                      setUser(
                        updated ?? { ...user, availableMoney: newAmount }
                      );
                      setAmount(newAmount);
                      setWithdrawAmount("");
                      setDepositAmount("");
                    }}
                    className="flex flex-col justify-center items-center border border-main-border rounded-xl p-2 mb-2"
                  >
                    <div>
                      <label htmlFor="withdrawAmount">$</label>
                      <input
                        className=" border border-main-border p-2 m-2 "
                        type="text"
                        id="withdrawAmount"
                        placeholder="Enter withdrawal Amount"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="cursor-pointer w-[70%] border border-brand-green bg-brand-green/30 rounded-xl p-2"
                    >
                      Withdraw
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setProfileOverlayOpen();
              setAmountOverlayOpenFalse();
            }}
            className="relative"
          >
            <div className="cursor-pointer relative flex justify-center items-center w-20 gap-2 py-1.5 px-3 bg-secondary-Background rounded-xl">
              <IoPersonOutline size={24} />
              <MdKeyboardArrowDown />
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`${
                profileOverlayOpen ? "" : "hidden"
              } absolute z-1 bg-secondary-Background rounded-2xl flex flex-col justify-center items-center gap-5 mt-2 top-1/1 right-0 w-50 p-4`}
            >
              <div className="cursor-pointer border border-main-border rounded-lg p-2 w-full bg-brand-green/30 text-center">
                <p>{user.name}</p>
              </div>
              <div className=" flex flex-col justify-center items-center gap-3 w-full">
                <p className="cursor-pointer">Profile</p>
                <p className="cursor-pointer">Settings</p>
                <div
                  onClick={() => {
                    logOut();
                    resetAllOverlay();
                  }}
                  className="cursor-pointer w-[75%] flex justify-center items-center gap-2 border border-main-border rounded-lg p-2"
                >
                  <PiSignOutBold />
                  <p>Sign Out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
