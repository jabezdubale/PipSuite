import React from "react";

const Buttons = ({ variant }) => {
  if (variant[0] === "mainVariant") {
    return (
      <div
        className={`flex justify-center items-center bg-brand-green text-center rounded-xl ${variant[1]}`}
      >
        {variant[3] && (
          <div className="text-main-Background text-lg">{variant[3]}</div>
        )}
        {variant[2] && (
          <div className="text-main-Background text-lg">{variant[2]}</div>
        )}
        {variant[4] && (
          <div className="text-main-Background text-lg">{variant[4]}</div>
        )}
      </div>
    );
  } else if (variant[0] === "secondaryVariant") {
    return (
      <div
        className={`flex justify-center items-center border-1 border-solid border-main-border text-center rounded-xl ${variant[1]}`}
      >
        {variant[3] && (
          <div className="text-primary-headings text-lg">{variant[3]}</div>
        )}
        {variant[2] && (
          <div className="text-primary-headings text-lg">{variant[2]}</div>
        )}
        {variant[4] && (
          <div className="text-primary-headings text-lg">{variant[4]}</div>
        )}
      </div>
    );
  }
};

export default Buttons;
{
  /* <Buttons variant={["mainVariant/secondaryVariant", "styles- gap-2 w-42 p-2", "Text", "leftIcon- <FaRegCircle />", "RightIcon- <FaRegCircle />"]} /> */
}
