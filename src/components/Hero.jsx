import React from "react";
import picture from "../assets/portfolio.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
   AiOutlineGithub,
   AiOutlineLinkedin,
   AiOutlineMail,
} from "react-icons/ai";

import { motion } from "framer-motion";

const Hero = () => {
   return (
      <div className="mt-9 max-w-[1200px] mx-auto relative">
         <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
            >
               <TypeAnimation
                  sequence={["Full Stack Developer", 1000]}
                  speed={50}
                  repeat={Infinity}
                  className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-6"
               />

               <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-gray-200 md:text-7xl text-5xl tracking-tighter mb-6"
               >
                  HEY, I AM <br />
                  <span className="text-purple-500">EMILOLA DIVINE</span>
               </motion.p>

               <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-gray-200 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-4"
               >
                  I am a Full Stack Developer and Web Designer based in Lagos,
                  Nigeria. with 3 years of experience. It would be nice working
                  with you.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-row items-center gap-6 my-4 md:mb-0"
               >
                  <motion.button
                     whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                     }}
                     className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                  >
                     <a href="https://docs.google.com/document/d/1ulNmCP77hmHJcxPj9GftxsFkp6IR7ubHvcqmd4cD_lY/edit?usp=drive_link">
                        Download Resume
                     </a>
                  </motion.button>

                  <div className="flex gap-6 flex-row text-4xl md:text-5xl text-purple-400 z-20">
                     <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="https://github.com/divinesta/"
                     >
                        <AiOutlineGithub />
                     </motion.a>

                     <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="https://www.linkedin.com/in/emilola-divine-8737b727a/"
                     >
                        <AiOutlineLinkedin />
                     </motion.a>

                     <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="mailto:emiloladivine123@gmail.com"
                     >
                        <AiOutlineMail />
                     </motion.a>
                  </div>
               </motion.div>
            </motion.div>

            <motion.img
               src={picture}
               className="w-[300px] md:w-[450px]"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 1.5 }}
            />
         </div>
         <div className="absolute insert-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
         </div>
      </div>
   );
};

export default Hero;
