import { Link } from "react-router-dom";

const Buttons = ({ variant, styles, label, LeftIcon, RightIcon, link }) => {
  if (variant === "mainVariant") {
    return (
      <Link
        to={`${link}`}
        className={`flex justify-center items-center bg-brand-green text-center gap-2 rounded-xl cursor-pointer ${styles}`}
      >
        {LeftIcon && (
          <div className="text-main-Background text-lg">{LeftIcon}</div>
        )}
        {label && <div className="text-main-Background text-lg">{label}</div>}
        {RightIcon && (
          <div className="text-main-Background text-lg">{RightIcon}</div>
        )}
      </Link>
    );
  } else if (variant === "secondaryVariant") {
    return (
      <Link
        to={`${link}`}
        className={`flex justify-center items-center border-1 border-solid border-main-border text-center gap-2 rounded-xl ${styles}`}
      >
        {LeftIcon && (
          <div className="text-primary-headings text-lg">{LeftIcon}</div>
        )}
        {label && <div className="text-primary-headings text-lg">{label}</div>}
        {RightIcon && (
          <div className="text-primary-headings text-lg">{RightIcon}</div>
        )}
      </Link>
    );
  }
};

export default Buttons;
{
  /* <Buttons variant="mainVariant/secondaryVariant" styles="" label="" LeftIcon={} RightIcon={} link="" /> */
}
