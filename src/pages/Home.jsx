import React from 'react'
import FAQ from '../components/FAQ'

const Home = () => {
    const questionsData = [
        { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
        { question: 'How does React work?', answer: 'React builds a virtual DOM and updates it efficiently when the data changes.' },
        { question: 'What are hooks in React?', answer: 'Hooks are functions that let you use state and other React features in functional components.' },
        { question: 'What are states in React?', answer: 'Hooks are functions that let you use state and other React features in functional components.' },
        // Add as many questions as you like
      ];
  return (
    <div className='min-h-screen'>
      Home

   <div className='pl-20'>
   <FAQ questions={questionsData}/>
   </div>
    </div>
  )
}

export default Home
