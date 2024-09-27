// // src/components/Contact.js
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from '../content';
import { motion } from "framer-motion"

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-8'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl md:text-5xl">
        GET IN<span className="text-neutral-500"> TOUCH</span>
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" /> Current Location: {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}

          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center">
          <FaPhoneAlt className="mr-2" /> Phone No.: {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center">
          <FaGithub className="mr-2" /> Github:
          <a href="https://github.com/ragavallika4" target="_blank" rel="noopener noreferrer" className="ml-1">
            {CONTACT.Github}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center">
          <FaLinkedin className="mr-2" /> LinkedIn:
          <a href="https://www.linkedin.https://linkedin.com/in/ragavallika-alla-388811177//" target="_blank" rel="noopener noreferrer" className="ml-1">
            {CONTACT.linkdin}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}

          className="my-4 flex items-center justify-center">
          <FaEnvelope className="mr-2" /> Email:
          <a href={`mailto:${CONTACT.email}`} className="ml-1">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;


