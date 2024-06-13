import React from "react";
import {
   DiHtml5,
   DiCss3,
   DiJavascript,
   DiReact,
   DiBootstrap,
   DiGit,
   DiGithubBadge,
   DiWordpress,
   DiPython,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import Reveal from "./Reveal";

const skills = [
   {
      category: "Frontend",
      technologies: [
         {
            name: "HTML",
            icon: <DiHtml5 className="text-orange-600" size={30} />,
         },
         { name: "CSS", icon: <DiCss3 className="text-blue-600" size={30} /> },
         {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-blue-500" size={30} />,
         },
         {
            name: "Javascript",
            icon: <DiJavascript className="text-yellow-600" size={30} />,
         },
         {
            name: "Typescript",
            icon: <BiLogoTypescript className="text-blue-600" size={30} />,
         },
         {
            name: "React",
            icon: <DiReact className="text-blue-500" size={30} />,
         },
      ],
   },
   {
      category: "Others",
      technologies: [
         {
            name: "Python",
            icon: <DiPython className="text-blue-600" size={30} />,
         },
         {
            name: "Bootstrap",
            icon: <DiBootstrap className="text-purple-600" size={30} />,
         },
         { name: "Git", icon: <DiGit className="text-orange-900" size={30} /> },
         { name: "Github", icon: <DiGithubBadge className="text-white" size={30} /> },
         {
            name: "WordPress",
            icon: <DiWordpress className="text-blue-700" size={30} />,
         },
      ],
   },
];

const Skills = () => {
   return (
      <div
         className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 max-w-[800px] mx-auto"
         id="skills"
      >
         <Reveal>
            <h2 className="text-3xl front-bold mb-4 text-center ">Skills</h2>
            <p className="text-center mb-8">
               I worked on various frontend projects. Check them{" "}
               <a href="#" className="underline">
                  here
               </a>
               .
            </p>

            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
               {skills.map((skill, index) => (
                  <div
                     key={index}
                     className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
                  >
                     <h3 className="text-xl font-bold mb-4 text-center">
                        {skill.category}
                     </h3>
                     <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                           <div
                              key={idx}
                              className="flex items-center space-x-2"
                           >
                              <span className="text-2xl">{tech.icon}</span>
                              <span>{tech.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </Reveal>
      </div>
   );
};

export default Skills;
