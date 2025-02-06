import React from "react";
import RButton from "./Button";
import EYE from "../Images/Video .mp4"

const Form = () => {
  return (
    <div className="bg-light_gray shadow-md h-max rounded-xl md:w-[90%] lg:w-[400px] mx-auto lg:mx-0 p-4 lg:p-7 pt-10">
      <div className="flex items-center justify-between px-2">
        <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full">
          <img
                        src={EYE}
                        alt=""
                    />
                    
        </div>

        <div className="relative border border-main_yellow text-black px-3 text-sm py-5 rounded-2xl max-w-[100%] shadow-md ml-6 font-bold">
          Wetin you wan use solar do?
          
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-main_yellow border-b-[10px] border-b-transparent"></div>
        </div>
      </div>
      <div className="border-b border-main_yellow pb-7">
        <form className="mt-9 bg-dark_gray/10 p-6 rounded-lg border border-dark_gray/5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="for-my-business">For My Business</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="for-my-home">For My Home</label>
            </div>
          </div>
          <div className="mt-5 space-y-6">
            <div className="space-y-2">
              <label htmlFor="whats-your-address">What's Your Address</label>
              <input
                type="text"
                className="py-[10px] px-6 w-full border border-dark_gray/50 rounded-md focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="whats-your-budget">
                What's Your Budget? (Naira)
              </label>
              <input
                type="text"
                className="py-[10px] px-6 w-full border border-dark_gray/50 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end mt-10">
        <RButton
          btnText={`Continue`}
          btnStyle={`bg-black w-full lg:w-[102px] text-main_yellow h-auto py-3 rounded-md lg:rounded-full border border-dark_gray`}
        />
      </div>
    </div>
  );
};

export default Form;
