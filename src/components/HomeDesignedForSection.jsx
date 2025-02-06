import React from "react";
import RButton from "./Button";
import co2 from "../Images/co2-icon 1.svg"
// import Vector from "../Images/Vector.png"

const HomeDesignedForSection = () => {
  return (
    <div className="py-20 px-[35px] md:px-28 lg:px-56">
      <h1 className="capitalize text-[40px] font-bold leading-tight md:text-center lg:text-start mb-8 w-full lg:w-[45%] text-#2B2D2C">
        Designed for nigerians, built for your energy needs
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
        

        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
            {/* <img
                          src={Robot}
                          alt="Preview"
                      /> */}
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            Smart Solar Assistant
          </p>
          <p>
           Personalize your solar <br></br>
          energy system in minutes.
          </p>
        </div>
        
        <div>
          <div className="w-[40px] h-[40px] flex items-center justify-center p-6">
          <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center">
                    {/* <img
                        src={Vector}
                        alt="Preview"
                    /> */}
                  </div>
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            Flexible Financing
          </p>
          <p>
            Buy now, pay later for <br></br>
            verified users or pay <br></br>
            upfront.
          </p>
        </div>
        
        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
            Icon
          </div>
          <p className="text-lg font-bold capitalize mt-3">
          End-to-End Support
          </p>
          <p>
           From customization of <br></br>
           solar system to <br></br>
           professional installation.
           
          </p>
        </div>
        
        <div>
          <div className="w-[40px] h-[40px] bg-main_yellow flex items-center justify-center p-6">
           Icon
          </div>
          <p className="text-lg font-bold capitalize mt-3">
            CO2 Savings Tracker
          </p>
          <p>
            See how you're <br></br>
             contributing to a greener <br></br>
             future.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start mt-10">
        <RButton
          btnText={`start now`}
          btnStyle={`bg-black w-full lg:w-max text-main_yellow h-auto py-3 px-10 capitalize rounded-md lg:rounded-full border border-dark_gray`}
        />
      </div>
    </div>
  );
};

export default HomeDesignedForSection;
