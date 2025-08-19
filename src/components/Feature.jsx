import React from "react";

const Feature = ({ variant }) => {
  return (
    <div className="flex flex-col gap-2 md:max-w-95 py-8 px-2 md:h-full justify-center text-primary-headings bg-secondary-Background rounded-2xl ">
      <div className=" text-primary-headings">{variant[0]}</div>
      <div className="">
        <div className="text-3xl text-primary-headings">{variant[1]}</div>
        <hr className="border-t border-main-border mt-1" />
      </div>
      <div className="text-justify">{variant[2]}</div>
    </div>
  );
};

export default Feature;

{
  /* <Feature variant={["styles", "icon", "title", "description"]}/> */
}
