import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import ButtonsSubmit from "../components/ButtonsSubmit";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";
import { IoPersonOutline } from "react-icons/io5";
import { RiFileUserLine } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGet, apiPost } from "../lib/api";
import useAuth from "../stores/auth";

const Register = () => {
  const [usersData, setUsersData] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkTerms, setCheckTerms] = useState(false);
  const age = new Date().getFullYear() - new Date(dob).getFullYear();

  const navigate = useNavigate();

  const setLoggedInUser = useAuth((state) => state.setUser);

  useEffect(() => {
    apiGet("Users").then((users) => setUsersData(users));
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const errors = [];
    if (fullName.trim().length <= 3) {
      errors.push("Full Name should have atleast 4 or more characters");
    }

    if (userName.trim().length <= 3) {
      errors.push("User Name should have atleast 4 or more characters");
    }

    if (age < 13) {
      errors.push("User should be atleast 13 Years old");
    }

    if (password !== confirmPassword) {
      errors.push("The passwords do not match");
    }

    if (!checkTerms) {
      errors.push(
        "You need to accept our Terms and Conditions to use PipSuite"
      );
    }

    const userExists = usersData.find((userData) => userData.email === email);

    if (errors.length > 0) {
      errors.forEach((error) => alert(error));
      return;
    }

    if (userExists) {
      alert("You are already a registered user. Please Sign in");
      navigate("/signin", { replace: true });
      return;
    }

    const registeringUser = {
      name: fullName,
      userName,
      email,
      DOB: dob,
      password,
    };

    try {
      const created = await apiPost("Users", registeringUser);
      setLoggedInUser(created ?? registeringUser);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      alert(`Registeration failed: ${err.message}`);
    }
  };

  return (
    <div className="bg-main-Background min-h-[100svh] flex justify-center items-center py-10">
      <div className="bg-secondary-Background w-4/5 md:w-3/5 max-w-4xl py-10 px-[5%] md:px-[8%] rounded-4xl flex flex-col gap-2">
        <Link to={"/"}>
          <Logo />
        </Link>
        <form
          onSubmit={handleRegister}
          className="flex flex-col justify-center items-start gap-4"
        >
          <h1 className="text-primary-headings text-2xl md:text-3xl font-bold text-center">
            Register
          </h1>

          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <IoPersonOutline />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Full Name"
              className="text-lg placeholder-secondary-headings w-full outline-none"
            />
          </div>
          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <RiFileUserLine />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="User Name"
              className="text-lg placeholder-secondary-headings w-full outline-none"
            />
          </div>
          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <MdOutlineEmail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="text-lg placeholder-secondary-headings w-full outline-none"
            />
          </div>
          <div className="relative bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <CiCalendarDate />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              placeholder="Date of Birth"
              className="text-lg placeholder-secondary-headings w-full outline-none [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-[60%] [&::-webkit-calendar-picker-indicator]:bg-red-500 [&::-webkit-calendar-picker-indicator]:right-0 "
            />
          </div>
          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <TbLockPassword />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className=" text-lg placeholder-secondary-headings w-full outline-none"
            />
            <FaRegEyeSlash
              className="mr-2 bg-white/2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            />
          </div>
          <div className="bg-white/30 w-full py-1 px-4 rounded-xl text-secondary-headings text-3xl flex justify-start items-center gap-2">
            <TbLockPassword />
            <input
              type={showCPass ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
              className=" text-lg placeholder-secondary-headings w-full outline-none"
            />
            <FaRegEyeSlash
              className="mr-2 bg-white/2 cursor-pointer"
              onClick={() => setShowCPass(!showCPass)}
            />
          </div>
          <div className="w-full flex justify-start items-center gap-2 mb-5 mt-2">
            <input
              type="checkbox"
              value={checkTerms}
              onChange={(e) => setCheckTerms(!checkTerms)}
              className="h-5 w-5 accent-brand-green cursor-pointer"
            />
            <p className="text-primary-headings text-lg ">
              I accept Pip-Suite{" "}
              <span className="underline cursor-pointer">
                Terms and Conditions.
              </span>{" "}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <ButtonsSubmit
              variant="mainVariant"
              styles="w-full p-1"
              label="Register"
              LeftIcon={null}
              RightIcon={null}
              type="submit"
            />
          </div>
        </form>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center w-full">
            <hr className="border-t border-brand-green w-1/3" />
            <p className="text-primary-headings text-lg w-1/3 text-center">
              continue with
            </p>
            <hr className="border-t border-brand-green w-1/3" />
          </div>
          <div className="w-full flex flex-wrap justify-around items-center">
            <Buttons
              variant="mainVariant"
              styles="w-3/10 p-2"
              label=""
              LeftIcon={<FaGoogle size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
            />
            <Buttons
              variant="mainVariant"
              styles="w-3/10 p-2"
              label=""
              LeftIcon={<FaFacebookF size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
            />
            <Buttons
              variant="mainVariant"
              styles="w-3/10 p-2"
              label=""
              LeftIcon={<SiTradingview size={25} />}
              RightIcon={null}
              link="https://www.google.com/"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className=" w-full flex gap-2 items-center mt-5">
            <p className="text-primary-headings text-lg w-full">
              Already have account?
            </p>
            <Buttons
              variant="secondaryVariant"
              styles="max-w-3/5 w-3/4 p-2"
              label="Sign in"
              LeftIcon={null}
              RightIcon={null}
              link="/signin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
