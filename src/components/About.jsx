// src/components/About.js
import React from 'react';
import aboutImage from '../assets/profile1.jpg'
import { ABOUT_TEXT } from '../content';
import { motion } from "framer-motion";

// // About component displaying information about the developer
function About() {
  return (
    <div className='border-b border-neutral-900 pb-8'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
         // Trigger animation only once
        className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl md:text-5xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row lg:items-center lg:gap-8 lg:px-6 xl:px-12 lg:py-8 xl:py-12">
        {/* Image Container */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
           // Trigger an
          className="w-full sm:w-1/2 lg:w-1/3 flex justify-center sm:justify-start lg:pl-4 xl:pl-8 lg:pt-4 xl:pt-6 lg:pb-4 xl:pb-6">
          <img
            src={aboutImage}
            alt="developer_image"
            className="rounded-lg shadow-lg w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>
        {/* Text Container */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
           // Trigger animation 
          className="w-full sm:w-1/2 lg:w-2/3 flex flex-col justify-center lg:pl-6 xl:pl-12 lg:py-4 xl:py-8 lg:pb-4 xl:pb-6">
          <p className="text-center sm:text-left text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;