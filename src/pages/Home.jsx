import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeCalculateSection from "../components/HomeCalculateSection";
import HomeDesignedForSection from "../components/HomeDesignedForSection";
import FAQ from "../components/FAQ";
import House from "../Images/Houses.png"

const Home = () => {
  const questionsData = [
    {
      question: "Are my eligabile to solar financing?",
      answer: "Eligibility is determined by the vetting process of our financial partners. Start by using the Solar Assitant and selecting the BNPL ('Pay small-small') option to begin the process.",
    },
    {
      question: "How quickly can i get approved for solar financing?",
      answer:
        "Approvals typically take 1-3 business days once all required documents are submitted.",
    },
    {
      question: "Is Boosty available to residentials",
      answer:
        "Yes, Boosty serves both residential and commercial customers.",
    },
    {
      question: "How does the energy assitance work?",
      answer:
        "The Energy Assistant calculates your energy needs. recommends he right solar system, and helps you manage payments.",
    },
    {
      question: "Can i pay for my loan early",
      answer:
        "Yes, you can pay off your loan early without any penalties.",
    },
    

  ];
  return (
    <div className="min-h-screen">
      <HomeHeroSection />

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 py-28 px-[35px] md:px-20 lg:px-56 place-items-center place-content-center">
        
        <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center">
          <img
              src={House}
              alt="Preview"
          />
        </div>
        <div>
          <h2 className="text-[40px] leading-tight font-bold capitalize mb-3 w-full lg:w-[90%]">
            Powering nigeria, one solar system at a time
          </h2>
          <p className="w-full lg:w-[85%]">
            Millions in Nigeria face unreliable electricity, rising
            petrol cost and the complexity of adopting solar
            energy. Boosty solar assistance simplifies energy
            calculations, customized solutions, and offer flexible
            financing to make clean energy accessible.

          </p>
        </div>
      </div>

      
      <div>
        <HomeCalculateSection />
      </div>

     
      <HomeDesignedForSection />

     
      <div className="pl-22">
        <FAQ questions={questionsData} />
      </div>
    </div>
  );
};

export default Home;
