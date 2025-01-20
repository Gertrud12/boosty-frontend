import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'; 

const FAQ = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null); 

  // Toggle the visibility of a particular answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if open, open if closed
  };

  return (
    <div className="bg-faq_bg px-16 py-10 rounded-md">
      <h2 className="font-bold text-2xl capitalize mb-6">Frequently Asked Questions</h2>

      <div className='w-[60%] text-[#3D3E3E] border border-[#374646]'>
        {/* Loop through the questions and render them */}
      <div className="">
        {questions.map((faq, index) => (
          <div key={index} className="faq-item border-b border-[#374646] py-3 px-8">
            {/* Question with chevron icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="font-normal">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUpIcon className="w-6 h-6 text-body_text" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-body_text" />
              )}
            </div>

            {/* Answer section */}
            {openIndex === index && (
              <div className="mt-2 text-body_text w-[60%] font-bold">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FAQ;
