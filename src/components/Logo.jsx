import logo from "../assets/images/Logo-alone.png";

const Logo = ({ size = "h-[48px]", style = "text-lg" }) => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:w-full">
      <img src={logo} alt="logo" className={`${size}`} />
      <p className={`${style} text-primary-headings`}>PipSuite</p>
    </div>
  );
};

export default Logo;
