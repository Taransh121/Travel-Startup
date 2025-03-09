import React from "react";
type props = {
  heading: string;
};
const SectionHeading = ({ heading }: props) => {
  return (
    <div className=" w-[80%] mx-auto">
      <h1 className="text-xl font-bold text-blue-950 sm:text-3xl">{heading}</h1>
    </div>
  );
};

export default SectionHeading;
