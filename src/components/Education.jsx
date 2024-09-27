import React from 'react';
import { EDUCATIONS } from '../content'; // Import the EDUCATIONS array
import { motion } from "framer-motion"

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl md:text-5xl">
        Education
        <span className="text-neutral-500">'s</span>
      </motion.h1>
      <div className="flex flex-col items-center">
        {EDUCATIONS.map((items, index) => (
          <div
            key={index}
            className="mb-8 flex w-full max-w-4xl flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="mb-2 text-sm text-neutral-400">{items.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-center lg:text-left">{items.degree} - {' '}
                <span className="text-sm text-purple-500">
                  {items.institution}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-center lg:text-left">{items.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {items.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
