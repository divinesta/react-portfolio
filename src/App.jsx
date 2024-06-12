import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

const App = () => {
   return (
      <div>
         <NavBar />
         <Hero/>
         <Skills />
         <Portfolio />
      </div>
   )
};

export default App;
