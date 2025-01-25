import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";

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
      <div className="grid grid-cols-2 gap-24 py-28 px-56 place-items-center place-content-center">
        <div className="w-full h-[600px] bg-slate-300 flex items-center justify-center">Ai Image</div>
        <div>
          <h2 className="text-[40px] leading-tight font-bold capitalize mb-3 w-[90%]">
            Powering nigeria, one solar system at a time
          </h2>
          <p className="w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis
            eaque doloribus excepturi, quos eos labore ipsa voluptatem
            necessitatibus odit officia ea, rerum perspiciatis possimus,
            delectus hic doloremque. Nisi, veritatis recusandae! Tenetur
            repudiandae, quos perspiciatis nobis eaque sit rem magni!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
