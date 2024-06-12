import React from "react";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import { AiOutlineGithub } from "react-icons/ai";

const projects = [
   {
      img: noImage,
      title: "Cloud",
      description: "UI of a cloud storage serrver website",
      links: {
         site: "#",
         github: "https://github.com/divinesta/PROJECT-2",
      },
   },
   {
      img: noImage,
      title: "SunnySide",
      description: "UI of a Sunny side website",
      links: {
         site: "https://divinesta.github.io/sunnyside-agency-landing-page-main/",
         github:
            "https://github.com/divinesta/sunnyside-agency-landing-page-main",
      },
   },
   {
      img: noImage,
      title: "GameHub",
      description: "Lookup on different games",
      links: {
         site: "https://game-hub-seven-iota-52.vercel.app/",
         github: "https://github.com/divinesta/game-hub",
      },
   },
   {
      img: noImage,
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
                     <p className="text-gray-300 mb-4">{project.description}</p>
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
            );
         })}
      </div>
   );
};

export default Portfolio;
