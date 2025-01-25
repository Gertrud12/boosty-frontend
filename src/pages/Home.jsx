import React from 'react'
// import FAQ from '../components/FAQ'
import FORM from '../components/Form'


const Home = () => {


    const questionsData = [
        { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
        { question: 'How does React work?', answer: 'React builds a virtual DOM and updates it efficiently when the data changes.' },
        { question: 'What are hooks in React?', answer: 'Hooks are functions that let you use state and other React features in functional components.' },
        { question: 'What are states in React?', answer: 'Hooks are functions that let you use state and other React features in functional components.' },
        // Add as many questions as you like
      ];
  return (
    
    <div>

<div className='min-h-[30rem] bg-yellow-500  flex'>
      <p className='text-lg pl-20 pt-20 text-800 gap-16px '>
        <h2> <b> Start Your solar <br/>
        Journey with the <br/>
         Solar Assitant </b></h2>
         
         

         <p className=''>
          Calculate your enerygy needs. Customize <br/>
          your system and choose fiancing <br/>
          options.
        </p>
        </p>
     
       

        
          
        



  
      
   {/* <div className='pl-20'>
   <FAQ questions={questionsData}/>
   </div> */}

   <div className='flex w-1/2'>
    <FORM/>
   </div>
   </div>

    </div>
    

  )
}

export default Home
