import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import { SiCplusplus, SiCsharp, SiDotnet } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';  // Added new import for Next.js icon
import { motion } from 'framer-motion';

// Define icon animation variants
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4">
        {/* React */}
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4" style={{ width: '120px', height: '120px' }}>
          <RiReactjsLine className="text-cyan-400" size={80} />
        </motion.div>
        {/* HTML */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4" style={{ width: '120px', height: '120px' }}>
          <FaHtml5 title="HTML5" style={{ color: '#E34F26' }} size={80} />
        </motion.div>
        {/* CSS */}
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4" style={{ width: '120px', height: '120px' }}>
          <FaCss3Alt title="CSS3" style={{ color: '#1572B6' }} size={80} />
        </motion.div>
        {/* JavaScript */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4" style={{ width: '120px', height: '120px' }}>
          <DiJavascript1 title="JavaScript" style={{ color: '#F7DF1E' }} size={80} />
        </motion.div>
        {/* C++.cpp */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4" style={{ width: '120px', height: '120px' }}>
          <SiCplusplus title="C++" style={{ color: '#764ABC' }} size={80} />
        </motion.div>
        {/* C#.csharp */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4" style={{ width: '120px', height: '120px' }}>
          <SiCsharp className="text-cyan-400" size={80} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
