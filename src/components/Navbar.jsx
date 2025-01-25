import React from 'react'
import LOGO from '../Images/Logo.png'

const Navbar = () => {
  return (
    <nav className='bg-white text-yellow w-full py-3 px-16 flex'>
    

    <div className="mt-4">
          <img 
            src={LOGO} 
            alt="Uploaded" 
            className="h-auto rounded-lg shadow-md justify-items-start"
          />
        </div>

       <div className='flex gap-4 text-center pl-80 m-3 text-xs'>
       <a><b>Home</b></a>
       <a>Become a partner</a>
       <a>want to fund solar project</a>
        
       </div>
       
      

<div>
<button
          type="submit"
          className=" py-2 px-4 bg-blue-50  text-black font-small rounded-2xl border-l-black justify-end text-xs "
        >
          Sign in
        </button>
</div>

        
    </nav>
  )
}

export default Navbar
