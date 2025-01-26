import React from "react";
import RButton from "./Button";

const HomeDesignedForSection = () => {
  return (
    <div className="py-20 px-[35px] md:px-28 lg:px-56">
      <h1 className="capitalize text-[40px] font-bold leading-tight md:text-center lg:text-start mb-8 w-full lg:w-[45%]">
        Designed for nigerians, built for your energy needs
      </h1>
      {/* box icon sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
        {/* box 1 */}
        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
            Icon
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            topic Lorem ipsum dolor sit amet
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur molestias debitis accusantium ut animi.
          </p>
        </div>
        {/* box 2 */}
        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
            Icon
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            topic Lorem ipsum dolor sit amet
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur molestias debitis accusantium ut animi.
          </p>
        </div>
        {/* box 3 */}
        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
            Icon
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            topic Lorem ipsum dolor sit amet
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur molestias debitis accusantium ut animi.
          </p>
        </div>
        {/* box 4 */}
        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
            Icon
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            topic Lorem ipsum dolor sit amet
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur molestias debitis accusantium ut animi.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start mt-10">
        <RButton
          btnText={`section btn text`}
          btnStyle={`bg-black w-full lg:w-max text-main_yellow h-auto py-3 px-10 capitalize rounded-md lg:rounded-full border border-dark_gray`}
        />
      </div>
    </div>
  );
};

export default HomeDesignedForSection;
