import React from "react";
import Form from "./Form";


const HomeHeroSection = () => {
  return (
    <div className="bg-main_yellow min-h-max lg:min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center py-20 lg:py-16 px-[35px] md:px-28 lg:px-56 relative">
      <div className="pt-28 lg:pt-16">
        <h1 className="capitalize text-[48px] font-medium leading-tight w-1/2 lg:w-[70%] md:text-left lg:text-start">
          Start Your Solar Journey With 
          The Solar Assistant 👉🏾
        </h1>
        <p className="text-xl mt-3 w-full lg:w-[55%] font-medium mb-14 lg:mt-0 md:text-left lg:text-start">
          Calculate your energy needs, customize your system. and choose
          financing options
        </p>
      </div>
      <div className="static lg:absolute right-[324px] -bottom-16">
        <Form />
      </div>
    </div>
  );
};

export default HomeHeroSection;
