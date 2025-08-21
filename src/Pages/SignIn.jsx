import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";
import { useState } from "react";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login is handled");
  };
  return (
    <div className="bg-main-Background min-h-[100svh] flex justify-center items-center py-10">
      <div className="bg-secondary-Background w-4/5 md:w-3/5 max-w-4xl py-10 px-[5%] md:px-[8%] rounded-4xl flex flex-col gap-2">
        <Logo />
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-start gap-4"
        >
          <h1 className="text-primary-headings text-2xl md:text-3xl font-bold text-center">
            Welcome Back
          </h1>
          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <MdOutlineEmail />
            <input
              type="email"
              placeholder="Email Adress"
              className="text-lg placeholder-secondary-headings w-full outline-none"
            />
          </div>
          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <TbLockPassword />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className=" text-lg placeholder-secondary-headings w-full outline-none"
            />
            <FaRegEyeSlash
              className="mr-2 bg-white/2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            />
          </div>
          <div className="w-3/5 flex justify-start items-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5 accent-brand-green cursor-pointer"
            />
            <p className="text-primary-headings text-lg ">Remember me</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <Buttons
              variant="mainVariant"
              styles="w-full p-1"
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
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-primary-headings text-lg">or continue with</p>
          <div className="w-full flex flex-wrap justify-around items-center">
            <Buttons
              variant="mainVariant"
              styles="w-3/10 p-2"
              label=""
              LeftIcon={<FaGoogle size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
              type=""
            />
            <Buttons
              variant="mainVariant"
              styles="w-3/10 p-2"
              label=""
              LeftIcon={<FaFacebookF size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
              type=""
            />
            <Buttons
              variant="mainVariant"
              styles="w-3/10 p-2"
              label=""
              LeftIcon={<SiTradingview size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
              type=""
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className=" w-full flex gap-2 items-center mt-5">
            <p className="text-primary-headings text-lg w-full">
              Don't have an account yet?
            </p>
            <Buttons
              variant="secondaryVariant"
              styles="max-w-3/5 w-3/4 p-2"
              label="Register"
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
