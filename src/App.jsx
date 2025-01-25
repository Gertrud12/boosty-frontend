import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import SecondPage from './pages/SecondPage'
import BecomeAPartner from './pages/BecomeAPartner'
import InvestorForm from './pages/InvestorForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden font-opensans text-base'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SecondPage' element={<SecondPage/>}/>
          <Route path='/investor-form' element={<InvestorForm/>}/>
          <Route path='/become-a-partner' element={<BecomeAPartner/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
