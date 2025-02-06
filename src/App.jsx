import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import BecomePartner from "./pages/BecomePartner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden font-opensans text-base">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" elememt={<BecomePartner />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
