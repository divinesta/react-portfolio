import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
   return (
      <div>
         <NavBar />
         <Hero/>
         <Skills />
         <Portfolio />
         <Contact />
      </div>
   )
};

export default App;
