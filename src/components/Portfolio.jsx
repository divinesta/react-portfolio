import React from "react";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
   {
      img: "/src/assets/scoracimage.png",
      title: "Scorac",
      description: "An AI-powered platform transforming how programming is taught in universities and high schools through automation, personalized feedback, and AI-driven insights, eliminating outdated paper-based coding methods",
      links: {
         site: "https://scorac-blue-preview.vercel.app/",
         github: "",
      },
   },
   {
      img: "/src/assets/scribblegreen.png",
      title: "Scribble Green",
      description: "Consultancy firm providing CV builder and professional digital solutions for businesses and professionals",
      links: {
         site: "https://scribblegreen.com/",
         github: "",
      },
   },
   {
      img: "/src/assets/smartcontract.png",
      title: "Kona",
      description: "Visual tool for building, deploying, and managing smart contracts",
      links: {
         site: "https://kona-dusky.vercel.app/",
         github: "",
      },
   },
   {
      img: "/src/assets/ifoghaleefamue.png",
      title: "Ifoghale Efajemue",
      description: "A portfolio website for a senior project manager",
      links: {
         site: "https://ifoghaleeva.com/",
         github: "",
      },
   },
   {
      img: noImage,
      title: "E-commerce Backend",
      description: "An e-commerce website built in Django and React",
      links: {
         site: "",
         github: "",
      },
   },
   {
      img: noImage,
      title: "LMS Backend",
      description: "A learning management system built in Django and React",
      links: {
         site: "",
         github: "",
      },
   },
   {
      img: "/src/assets/sunnyside.png",
      title: "SunnySide",
      description: "A sunny side agency landing page",
      links: {
         site: "https://divinesta.github.io/sunnyside-agency-landing-page-main/",
         github: "https://github.com/divinesta/sunnyside-agency-landing-page-main",
      },
   },
   {
      img: "/src/assets/brainwaveimg.png",
      title: "BrainWave",
      description: "Diving into the world of AI",
      links: {
         site: "https://div-brainwave.vercel.app/",
         github: "https://github.com/divinesta/brainwave",
      },
   },
   {
      img: "/src/assets/expensetracker.png",
      title: "Simple Expense Tracker",
      description: "Calculate your expenses",
      links: {
         site: "https://expense-tracker-three-ruby.vercel.app/",
         github: "https://github.com/divinesta/Expense-tracker",
      },
   },
];

const Portfolio = () => {
   return (
      <div
         className="max-w-[1000px] mx-auto p-6 md:my-20"
         id="portfolio"
      >
         <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

         {projects.map((project, index) => {
            return (
               <Reveal>
                  <div
                     key={index}
                     className={`flex flex-col md:flex-row ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                     } mb-12`}
                  >
                     <div className="w-full md:w-1/2 p-4">
                        <img
                           src={project.img}
                           alt={project.title}
                           className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                     </div>

                     <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                           {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                           {project.description}
                        </p>
                        <div className="flex space-x-4">
                           <a
                              href={project.links.site}
                              className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                           >
                              Veiw Site
                           </a>
                           <a
                              href={project.links.github}
                              className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                           >
                              <AiOutlineGithub size={30} />
                           </a>
                        </div>
                     </div>
                  </div>
               </Reveal>
            );
         })}
      </div>
   );
};

export default Portfolio;
