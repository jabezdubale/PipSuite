import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({
  variant,
  styles,
  label,
  LeftIcon,
  RightIcon,
  link,
  type,
}) => {
  if (variant === "mainVariant") {
    return (
      <button
        type={`${type}`}
        className={`flex justify-center items-center bg-brand-green text-center gap-2 rounded-xl cursor-pointer ${styles}`}
      >
        {link ? (
          <Link
            to={`${link}`}
            className="flex justify-center items-center text-center w-full gap-2"
          >
            {LeftIcon && (
              <div className="text-main-Background text-lg">{LeftIcon}</div>
            )}
            {label && (
              <div className="text-main-Background text-lg">{label}</div>
            )}
            {RightIcon && (
              <div className="text-main-Background text-lg">{RightIcon}</div>
            )}
          </Link>
        ) : (
          <div>
            {LeftIcon && (
              <div className="text-main-Background text-lg">{LeftIcon}</div>
            )}
            {label && (
              <div className="text-main-Background text-lg">{label}</div>
            )}
            {RightIcon && (
              <div className="text-main-Background text-lg">{RightIcon}</div>
            )}
          </div>
        )}
      </button>
    );
  } else if (variant === "secondaryVariant") {
    return (
      <button
        type={`${type}`}
        className={`flex justify-center items-center border-1 border-solid border-main-border text-center rounded-xl ${styles}`}
      >
        {link ? (
          <Link
            to={`${link}`}
            className="flex justify-center items-center text-center gap-2"
          >
            {LeftIcon && (
              <div className="text-primary-headings text-lg">{LeftIcon}</div>
            )}
            {label && (
              <div className="text-primary-headings text-lg">{label}</div>
            )}
            {RightIcon && (
              <div className="text-primary-headings text-lg">{RightIcon}</div>
            )}
          </Link>
        ) : (
          <div>
            {LeftIcon && (
              <div className="text-primary-headings text-lg">{LeftIcon}</div>
            )}
            {label && (
              <div className="text-primary-headings text-lg">{label}</div>
            )}
            {RightIcon && (
              <div className="text-primary-headings text-lg">{RightIcon}</div>
            )}
          </div>
        )}
      </button>
    );
  }
};

export default Buttons;
{
  /* <Buttons variant="mainVariant/secondaryVariant" styles="" label="" LeftIcon={} RightIcon={} link="" /> */
}
