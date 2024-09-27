import React from 'react';
import { EXPERIENCES } from '../content';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
              <h5 className="mb-2 font-semibold">{experience.role}</h5>
              <p className="mb-2 text-neutral-400">{experience.company}</p>
              <p className="mb-2 text-neutral-400">{experience.year}</p>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
              <ul className="list-disc pl-5 mb-4 text-neutral-400">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div>
                {experience.technologies.map((tech, i) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
