import logo from "../assets/images/Logo-alone.png";

const Logo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 items-center sm:w-full">
      <img src={logo} alt="logo" className="h-[48px]" />
      <p className="text-lg text-primary-headings">PipSuite</p>
    </div>
  );
};

export default Logo;
