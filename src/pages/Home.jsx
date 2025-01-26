import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeCalculateSection from "../components/HomeCalculateSection";
import HomeDesignedForSection from "../components/HomeDesignedForSection";
import FAQ from "../components/FAQ";

const Home = () => {
  const questionsData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How does React work?",
      answer:
        "React builds a virtual DOM and updates it efficiently when the data changes.",
    },
    {
      question: "What are hooks in React?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
    {
      question: "What are states in React?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
    // Add as many questions as you like
  ];
  return (
    <div className="min-h-screen">
      <HomeHeroSection />

      {/* // AI Image section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 py-28 px-[35px] md:px-20 lg:px-56 place-items-center place-content-center">
        {/* Remember to remove the styling on this div has an image is supposed to be here, so you will style the image accordingly */}
        <div className="w-full h-[400px] lg:h-[600px] bg-slate-300 flex items-center justify-center">
          Ai Image
        </div>
        <div>
          <h2 className="text-[40px] leading-tight font-bold capitalize mb-3 w-full lg:w-[90%]">
            Powering nigeria, one solar system at a time
          </h2>
          <p className="w-full lg:w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis
            eaque doloribus excepturi, quos eos labore ipsa voluptatem
            necessitatibus odit officia ea, rerum perspiciatis possimus,
            delectus hic doloremque. Nisi, veritatis recusandae! Tenetur
            repudiandae, quos perspiciatis nobis eaque sit rem magni!
          </p>
        </div>
      </div>

      {/* Green Section */}
      <div>
        <HomeCalculateSection />
      </div>

      {/* Designed for nigerians section */}
      <HomeDesignedForSection />

      {/* FAQ Section */}
      <div className="pl-22">
        <FAQ questions={questionsData} />
      </div>
    </div>
  );
};

export default Home;
