import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";

const SignIn = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login is handled");
  };
  return (
    <div className="bg-main-Background h-screen flex justify-center items-center">
      <div className="bg-secondary-Background w-3/5 max-w-6xl p-[5%] rounded-4xl flex flex-col gap-3">
        <Logo size={"h-[75px]"} style="text-4xl" />
        <p className="text-secondary-headings text-xl py-5 mx-auto text-center w-4/5 lg:w-3/5">
          “It is not a calculated risk if you haven’t calculated it.” — Naved
          Abdali
        </p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center gap-8"
        >
          <h1 className="text-primary-headings text-4xl font-bold text-center">
            Log in
          </h1>
          <div className=" bg-white/30 w-3/5 p-3 rounded-xl text-secondary-headings text-4xl flex justify-start items-center gap-2">
            <MdOutlineEmail />
            <input
              type="text"
              placeholder="Email Adress"
              className="text-2xl placeholder-secondary-headings w-full outline-none"
            />
          </div>
          <div className="bg-white/30 w-3/5 p-3 rounded-xl text-secondary-headings text-4xl flex justify-start items-center gap-2">
            <TbLockPassword />
            <input
              type="text"
              placeholder="Password"
              className="text-2xl placeholder-secondary-headings w-full outline-none"
            />
            <FaRegEyeSlash className="mr-2 bg-white/2" />
          </div>
          <div className="w-3/5 flex justify-start items-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5 accent-brand-green cursor-pointer"
            />
            <p className="text-primary-headings text-lg ">Remember me</p>
          </div>
          <div className="w-3/5 flex flex-col justify-center items-center gap-3">
            <Buttons
              variant="mainVariant"
              styles="w-full p-3"
              label="Sign in"
              LeftIcon={null}
              RightIcon={null}
              link=""
              type="submit"
            />
            <p className="text-primary-headings text-lg ml-auto pr-5 cursor-pointer">
              Forgot password?
            </p>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-primary-headings text-lg">or continue with</p>
          <div className="w-3/5 flex flex-wrap justify-around items-center">
            <Buttons
              variant="mainVariant"
              styles="w-2/10 p-5"
              label=""
              LeftIcon={<FaGoogle size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
              type=""
            />
            <Buttons
              variant="mainVariant"
              styles="w-2/10 p-5"
              label=""
              LeftIcon={<FaFacebookF size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
              type=""
            />
            <Buttons
              variant="mainVariant"
              styles="w-2/10 p-5"
              label=""
              LeftIcon={<SiTradingview size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
              type=""
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-3/5 flex justify-center items-center gap-3 mt-10">
            <p className="text-primary-headings text-lg">
              Don't have an account yet?
            </p>
            <Buttons
              variant="secondaryVariant"
              styles="w-2/5 p-1"
              label="Register For free"
              LeftIcon={null}
              RightIcon={null}
              link="/register"
              type=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// add quote beneath login check
// add icons before inputs and after on PW check
// add forgot password? beneath button check
// add login with google and FB
