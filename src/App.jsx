import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
   return (
      <div className="overflow-x-hidden">
         <NavBar />
         <Hero/>
         <Skills />
         <Portfolio />
         <Contact />
         <Footer />
      </div>
   )
};

export default App;
