import React from "react";
import RButton from "./Button";
import { Sun } from "lucide-react";

const HomeCalculateSection = () => {
  return (
    <div className="bg-dark_gray text-white min-h-max lg:min-h-[60vh] rounded-r-none lg:rounded-r-lg grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center place-content-center px-[35px] md:px-28 lg:px-56 py-20 lg:py-0 w-full lg:w-[95%]">
      <div>
        <h1 className="capitalize text-[40px] font-bold leading-tight w-full md:text-center lg:text-start mb-8">
          From calculation to installation in 3 simple steps
        </h1>
        <div className="flex items-center justify-center lg:justify-start">
          <RButton
            btnText={`Start your journey now !`}
            btnStyle={`capitalize bg-light_gray text-dark_gray rounded-md lg:rounded-full !py-3 px-8 w-full lg:w-auto`}
          />
        </div>
      </div>
      <div className="border border-light_gray/40 rounded-lg px-[30px] lg:px-10 py-8 lg:py-14 space-y-8">
        <div className="flex items-center justify-center gap-4">
          <Sun className="text-main_yellow" size={43} />
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            minus accusantium repellendus!
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Sun className="text-main_yellow" size={43} />
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            minus accusantium repellendus!
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Sun className="text-main_yellow" size={43} />
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            minus accusantium repellendus!
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCalculateSection;
