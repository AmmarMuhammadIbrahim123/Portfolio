"use client"
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="Services" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <motion.h4 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:0.5}}
      className="text-center mb-2 text-lg font-serif">What I Offer?</motion.h4>
      <motion.h2
       initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.5,duration:0.5}}
      className="text-center text-5xl font-serif">My Services</motion.h2>

      <motion.p 
       initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7,duration:0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-serif">
        Passionate web developer skilled in HTML, CSS, JavaScript, and Next.js,
        building responsive, interactive projects and constantly learning.
      </motion.p>

      <motion.div 
        initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9,duration:0.6}}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{scla:1.05}}
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-50
                hover:-translate-y-1 duration-500  hover:shadow-lg hover:shadow-black"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
